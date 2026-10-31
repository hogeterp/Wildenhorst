process.env.TZ='Europe/Amsterdam';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'../../app.js'),'utf8');
const dates=[{id:'oct24',dateKey:'2026-10-24'},{id:'oct31',dateKey:'2026-10-31'},{id:'nov07',dateKey:'2026-11-07'}];
const elements=new Map();const $=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',classList:{add(){},remove(){}},querySelectorAll:()=>[],addEventListener(){}});return elements.get(id)};
let courts=[{number:1,teamA:['A','B'],teamB:['C','D']},{number:2,teamA:['E','F'],teamB:['G','H']}],results=[],published=true,rendered;
const context=vm.createContext({Date,console,season:{id:'test',endTime:'12:00'},db:{},window:{},$,
 esc:s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'),
 compactTeam:a=>a.join(' & '),pointText:r=>`Punten ${r.pointsA} – ${r.pointsB}`,
 dateText:k=>k,collection:(_,...p)=>p.join('/'),doc:(_,...p)=>p.join('/'),
 getDocFromServer:async()=>({exists:()=>true,data:()=>({published,courts})}),
 getDocs:async()=>({docs:results.map(r=>({data:()=>r}))}),
 playDates:async()=>dates,renderSaturday:async d=>{rendered=d},renderResultArchive:async()=>{},
});
vm.runInContext(source.slice(source.indexOf('function keyDate('),source.indexOf('function dateText('))+source.slice(source.indexOf('function toKey('),source.indexOf('function timeText('))+source.slice(source.indexOf('function endMoment('),source.indexOf('function resultEnteredDate('))+source.slice(source.indexOf('function nextPlayDate('),source.indexOf('async function home(')),context);
let count=0;function check(name,fn){fn();count++;console.log('PASS '+name)}
for(const time of ['00:00','09:59','11:59','12:00'])check('before end of play at '+time,()=>{const r=context.homePlayDates(dates,new Date('2026-10-31T'+time+':00+01:00'));assert.equal(r.previous.id,'oct24');assert.equal(r.next.id,'oct31')});
for(const time of ['12:01','15:16','23:59'])check('after play at '+time,()=>{const r=context.homePlayDates(dates,new Date('2026-10-31T'+time+':00+01:00'));assert.equal(r.previous.id,'oct31');assert.equal(r.next.id,'nov07')});
check('last play date retained the following day without results',()=>{const r=context.homePlayDates(dates,new Date('2026-11-01T09:00:00+01:00'));assert.equal(r.previous.id,'oct31');assert.equal(r.next.id,'nov07')});
check('last play date retained midweek',()=>{const r=context.homePlayDates(dates,new Date('2026-11-04T09:00:00+01:00'));assert.equal(r.previous.id,'oct31');assert.equal(r.next.id,'nov07')});
check('last date of season remains visible',()=>{const r=context.homePlayDates(dates.slice(0,2),new Date('2026-10-31T15:16:00+01:00'));assert.equal(r.previous.id,'oct31');assert.equal(r.next,null)});
check('no past date before season starts',()=>{const r=context.homePlayDates(dates,new Date('2026-10-01T09:00:00+02:00'));assert.equal(r.previous,null);assert.equal(r.next.id,'oct24')});
check('no dates does not fail',()=>{const r=context.homePlayDates([],new Date());assert.equal(r.previous,null);assert.equal(r.next,null)});
(async()=>{
 let html=await context.lastPlayDateHomeCard(dates[1]);
 check('published lineup visible without results',()=>{assert.match(html,/Baan 1/);assert.match(html,/Baan 2/);assert.match(html,/0 van 2 uitslagen ingevoerd/);assert.match(html,/data-playdate="oct31"/)});
 results=[{courtNumber:'1',scoreText:'6-3',pointsA:1,pointsB:0}];html=await context.lastPlayDateHomeCard(dates[1]);
 check('partial results shown without hiding other court',()=>{assert.match(html,/1 van 2/);assert.match(html,/6-3/);assert.match(html,/Nog geen uitslag ingevoerd/)});
 results.push({courtNumber:2,scoreText:'6-4',pointsA:1,pointsB:0});html=await context.lastPlayDateHomeCard(dates[1]);
 check('both results counted',()=>assert.match(html,/2 van 2/));
 courts.push({number:3,mode:'Niet gebruiken'});results.push({courtNumber:99});html=await context.lastPlayDateHomeCard(dates[1]);
 check('unused courts and unrelated results excluded',()=>{assert.match(html,/2 van 2/);assert.doesNotMatch(html,/Baan 3/)});
 published=false;html=await context.lastPlayDateHomeCard(dates[1]);
 check('unpublished lineup remains private',()=>{assert.match(html,/Indeling is nog niet bekend/);assert.doesNotMatch(html,/Baan 1|6-3/)});
 published=true;courts=[{number:1,teamA:['<script>'],teamB:['Safe']}];results=[];html=await context.lastPlayDateHomeCard(dates[1]);
 check('player names escaped',()=>{assert.match(html,/&lt;script>/);assert.doesNotMatch(html,/<script>/)});
 vm.runInContext(source.slice(source.indexOf('async function saturday('),source.indexOf('\nasync function renderSaturday(')),context);
 context.window.__homeSaturdayDate='oct31';await context.saturday();
 check('last-date link opens requested date',()=>{assert.equal(rendered.id,'oct31');assert.equal(context.window.__homeSaturdayDate,undefined)});
 context.window.__homeSaturdayDate='nov07';await context.saturday();
 check('next-date link opens next date',()=>assert.equal(rendered.id,'nov07'));
 const RealDate=Date;
 class FixedDate extends RealDate{constructor(...args){super(...(args.length?args:['2026-10-31T15:19:00+01:00']))}}
 Object.assign(context,{Date:FixedDate,activeProfile:()=>({name:'Test'}),head:()=>false,admin:()=>false,
  beheer:()=>{},testBanner:()=>'',bindTestBanner:()=>{},validPair:()=>false,coupleNumber:()=>1,duplicatePlayerEntries:()=>[],
  closeAtWith:()=>new RealDate('2026-11-06T18:00:00+01:00'),timeText:v=>v,
  getDoc:async()=>({exists:()=>false}),getDocs:async()=>({docs:[],empty:true})});
 vm.runInContext(source.slice(source.indexOf('async function home('),source.indexOf('\nfunction resultLine(')),context);
 await context.home();
 check('full Home shows next Saturday then last play date without results',()=>{
  const html=$('screen').innerHTML;
  assert.match(html,/2026-10-31/);assert.match(html,/0 van 1 uitslagen ingevoerd/);
  assert.match(html,/2026-11-07/);
  assert.ok(html.indexOf('🎾 Volgende speeldag')<html.indexOf('🎾 Laatste speeldag'));
  assert.doesNotMatch(html,/2026-10-24/);
 });
 console.log(`${count} home date checks passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
