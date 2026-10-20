const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../../app.js'),'utf8');
const helpers=source.slice(source.indexOf('function personAccountView('),source.indexOf('async function renderPlayersAdmin('));
const ctx=vm.createContext({});vm.runInContext(helpers,ctx);
const view=(p,k,a)=>JSON.parse(JSON.stringify(ctx.personAccountView(p,k,a)));
let count=0;function check(name,fn){fn();count++;console.log('PASS '+name)}
// Synthetic fixtures, not records read from production Firebase.
const person={id:'p1',name:'Testspeler',email:'old@example.test',strength:5};
const account={id:'existing-uid',playerId:'p1',email:'new@example.test',status:'active'};
check('changed email uses existing playerId',()=>assert.deepEqual(view(person,'players',[account]),{email:'new@example.test',status:'active'}));
check('active account displayed as activated',()=>assert.match(ctx.personAccountStatus(view(person,'players',[account])),/Account geactiveerd/));
check('input records and UID remain unchanged',()=>{const before=JSON.stringify([person,account]);view(person,'players',[account]);assert.equal(JSON.stringify([person,account]),before)});
check('stable link wins over old email match',()=>assert.equal(view(person,'players',[account,{email:person.email,status:'pending'}]).status,'active'));
check('reserveId works after changed email',()=>assert.equal(view(person,'reserves',[{...account,playerId:'',reserveId:'p1'}]).email,'new@example.test'));
check('playerId is not used as reserveId',()=>assert.equal(view(person,'reserves',[account]).status,'unlinked'));
check('legacy unlinked account matches normalized email',()=>assert.equal(view(person,'players',[{email:' OLD@EXAMPLE.TEST ',status:'active'}]).status,'active'));
check('empty emails never match',()=>assert.equal(view({id:'p2',email:''},'players',[{email:'',status:'active'}]).status,'unlinked'));
check('never match by name',()=>assert.equal(view(person,'players',[{name:person.name,email:'other@example.test',status:'active'}]).status,'unlinked'));
check('do not borrow another players linked account',()=>assert.equal(view(person,'players',[{...account,playerId:'p2',email:person.email}]).status,'unlinked'));
check('multiple linked accounts require review',()=>assert.equal(view(person,'players',[account,{...account,id:'other-uid'}]).status,'ambiguous'));
check('multiple legacy email matches require review',()=>assert.equal(view(person,'players',[{email:person.email},{email:person.email}]).status,'ambiguous'));
check('pending remains pending',()=>assert.match(ctx.personAccountStatus(view(person,'players',[{...account,status:'pending'}])),/Wacht op goedkeuring/));
check('rejected remains rejected',()=>assert.match(ctx.personAccountStatus(view(person,'players',[{...account,status:'rejected'}])),/Aanvraag geweigerd/));
check('unactivated player keeps registered contact address',()=>assert.deepEqual(view(person,'players',[]),{email:person.email,status:'unlinked'}));
check('linked record without email retains contact address',()=>assert.equal(view(person,'players',[{...account,email:''}]).email,person.email));

(async()=>{
 const elements=new Map();const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',classList:{toggle(){}},querySelectorAll:()=>[]});return elements.get(id)};
 const collections={players:[person],couples:[],reserves:[],users:[account]};
 const context=vm.createContext({
  $:element,db:{},seasonId:()=> 'test',head:()=>false,
  collection:(_,...parts)=>parts.at(-1),getDocs:async key=>({docs:collections[key].map(x=>({id:x.id,data:()=>x}))}),
  esc:s=>String(s),coupleNumber:()=>1,playerCoupleLabel:()=>'',
  setDoc:()=>{throw Error('Unexpected Firebase write')},updateDoc:()=>{throw Error('Unexpected Firebase write')},
  createUserWithEmailAndPassword:()=>{throw Error('Unexpected account creation')}
 });
 vm.runInContext(helpers+source.slice(source.indexOf('async function renderPlayersAdmin('),source.indexOf('\nfunction newReserve(')),context);
 await context.renderPlayersAdmin();
 check('admin screen displays linked email and active state',()=>{assert.match(element('ap').innerHTML,/new@example.test/);assert.doesNotMatch(element('ap').innerHTML,/old@example.test|Nog niet geactiveerd/);assert.match(element('ap').innerHTML,/Account geactiveerd/)});
 let exported;
 context.exportExcel=(...args)=>{exported=args};element('nawExcel').onclick();
 check('admin export uses the same current email',()=>assert.equal(exported[2][0][2],'new@example.test'));
 // Exercise the real edit-save handler with the read model and mocked Firestore.
 const dialog={showModal(){},close(){}};elements.set('personEditDialog',dialog);
 for(const [id,value] of Object.entries({epEmail:'new@example.test',epName:person.name,epPhone:'123',epSingles:'no',epStrength:'5'}))element(id).value=value;
 const writes=[];
 Object.assign(context,{doc:(_,...parts)=>parts.join('/'),updateDoc:async(ref,data)=>writes.push({ref,data}),serverTimestamp:()=> 'timestamp',setTimeout:()=>{},document:{createElement:()=>dialog,body:{appendChild(){}}}});
 vm.runInContext(source.slice(source.indexOf('function editPerson('),source.indexOf('\n}',source.indexOf('function editPerson('))+2),context);
 context.editPerson('players',person,[account]);
 check('edit dialog displays linked email',()=>assert.match(dialog.innerHTML,/value="new@example.test"/));
 await element('epSave').onclick();
 check('saving contact data does not overwrite email or identity',()=>{assert.equal(writes.length,1);assert.equal(writes[0].ref,'seasons/test/players/p1');assert.deepEqual(Object.keys(writes[0].data).sort(),['name','phone','singlesAllowed','strength','updatedAt']);});
 element('epEmail').value='unapproved@example.test';await element('epSave').onclick();
 check('changing login email through edit dialog remains blocked',()=>assert.equal(writes.length,1));
 console.log(`${count} account-view checks passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
