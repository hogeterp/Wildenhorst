const {initializeTestEnvironment,assertSucceeds,assertFails}=require('@firebase/rules-unit-testing');
const {doc,getDoc,setDoc,updateDoc,deleteDoc,collection,getDocs,Timestamp,serverTimestamp}=require('firebase/firestore');
const fs=require('node:fs');
(async()=>{
 const env=await initializeTestEnvironment({projectId:'demo-wildenhorst',firestore:{host:'127.0.0.1',port:8085,rules:fs.readFileSync(require('node:path').join(__dirname,'../../firestore.rules'),'utf8')}});
 let n=0;const ok=async(name,p)=>{await assertSucceeds(p);console.log('PASS '+name);n++},no=async(name,p)=>{await assertFails(p);console.log('PASS '+name);n++};
 const base='seasons/test/playDates/day',result=base+'/results/court-1';
 await env.withSecurityRulesDisabled(async c=>{const db=c.firestore();for(const [uid,role,status] of [['a','player','active'],['b','player','active'],['admin','admin','active'],['head','headAdmin','active'],['pending','player','pending']])await setDoc(doc(db,'users',uid),{role,status,participantType:'fixed',email:uid+'@example.test',coupleId:'c1'});await setDoc(doc(db,'seasons/test'),{name:'Test'});await setDoc(doc(db,base+'/public/lineup'),{published:true});await setDoc(doc(db,result),{pointsA:1,pointsB:.5,enteredBy:'a',enteredAt:Timestamp.now()});await setDoc(doc(db,base+'/results/old'),{pointsA:1,enteredBy:'a',enteredAt:Timestamp.fromMillis(Date.now()-49*3600000)});await setDoc(doc(db,base+'/privateNotes/a'),{ownerUid:'a',text:'private'});await setDoc(doc(db,'accessEmails/hash'),{allowed:true});});
 const a=env.authenticatedContext('a').firestore(),b=env.authenticatedContext('b').firestore(),admin=env.authenticatedContext('admin').firestore(),head=env.authenticatedContext('head').firestore(),anon=env.unauthenticatedContext().firestore(),pending=env.authenticatedContext('pending').firestore();
 try{
 await no('anonymous cannot read season',getDoc(doc(anon,'seasons/test')));
 await no('pending cannot read results',getDoc(doc(pending,result)));
 await ok('active player can read results',getDoc(doc(a,result)));
 await no('player cannot change own role',updateDoc(doc(a,'users/a'),{role:'admin'}));
 await ok('player can change own phone',updateDoc(doc(a,'users/a'),{phone:'test'}));
 await no('player cannot read another profile',getDoc(doc(a,'users/b')));
 await ok('admin can read profile',getDoc(doc(admin,'users/b')));
 await no('player cannot edit another result',updateDoc(doc(b,result),{pointsA:2}));
 await ok('author can correct result within 48h',updateDoc(doc(a,result),{pointsA:1.5}));
 await no('author cannot edit after 48h',updateDoc(doc(a,base+'/results/old'),{pointsA:2}));
 await no('author cannot change original author',updateDoc(doc(a,result),{enteredBy:'b'}));
 await no('author cannot delete result',deleteDoc(doc(a,result)));
 await ok('admin can correct old result',updateDoc(doc(admin,base+'/results/old'),{pointsA:2}));
 await no('player cannot write standings',setDoc(doc(a,'seasons/test/standings/c1'),{points:2}));
 await ok('admin can write standings',setDoc(doc(admin,'seasons/test/standings/c1'),{points:2}));
 await ok('owner can read private note',getDoc(doc(a,base+'/privateNotes/a')));
 await no('another player cannot read private note',getDoc(doc(b,base+'/privateNotes/a')));
 await no('admin cannot read private note',getDoc(doc(admin,base+'/privateNotes/a')));
 await no('head admin cannot read private note',getDoc(doc(head,base+'/privateNotes/a')));
 await ok('public targeted email hash lookup',getDoc(doc(anon,'accessEmails/hash')));
 await no('public cannot list email hashes',getDocs(collection(anon,'accessEmails')));
 await no('player cannot read payments',getDocs(collection(a,'seasons/test/payments')));
 await no('admin cannot write audit log',setDoc(doc(admin,'auditLogs/test'),{text:'test'}));
 await no('unknown collection denied',getDoc(doc(admin,'unknown/test')));
 console.log(`${n} emulator checks passed`);
 }finally{await env.cleanup()}
})().catch(e=>{console.error(e);process.exitCode=1});
