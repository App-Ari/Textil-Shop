/* =====================================================================
   FILL & STOFF — Sistem Menaxhimi për Biznes Tekstili
   Dy sisteme të ndara: Magazina e Madhe (PIN) & Dyqan (PIN)
   ===================================================================== */

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  product: `<svg viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>`,
  madhe: `<svg viewBox="0 0 24 24"><path d="M3 21V9l9-6 9 6v12"/><path d="M3 9h18"/><path d="M9 21v-8h6v8"/></svg>`,
  vogel: `<svg viewBox="0 0 24 24"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 13a3 3 0 006 0"/></svg>`,
  blerje: `<svg viewBox="0 0 24 24"><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="21" r="1.2"/><circle cx="18" cy="21" r="1.2"/><path d="M21 8l-2-5"/></svg>`,
  shitje: `<svg viewBox="0 0 24 24"><path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="21" r="1.2"/><circle cx="18" cy="21" r="1.2"/><path d="M14 5l3-2 3 2"/></svg>`,
  debitore: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  bilanc: `<svg viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M5 8l-3 6a4 4 0 008 0l-3-6"/><path d="M19 8l-3 6a4 4 0 008 0l-3-6"/><path d="M4 8h16"/><path d="M8 21h8"/></svg>`,
  xhiro: `<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="2"/><circle cx="12" cy="12.5" r="3"/><path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>`,
  config: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  print: `<svg viewBox="0 0 24 24"><path d="M6 9V2h12v7"/><rect x="6" y="14" width="12" height="8"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/></svg>`,
  pdf: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg>`,
  edit: `<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>`,
  vogel2: `<svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="1.5"/><path d="M4 9l8-5 8 5"/><path d="M9 20v-5h6v5"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>`,
  ban: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M5 5l14 14"/></svg>`,
  chat: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
};
function ic(name,cls){return ICONS[name]?ICONS[name].replace('<svg ', `<svg class="${cls||''}" `):'';}

/* ---------------- STATE ---------------- */
const STORAGE_KEY = 'tekstile-erp-state-v1';
let state = null;

function defaultState(){
  return {
    products: [],
    suppliers: [],
    customers: [],
    users: [],
    stock: { madhe:{}, dyqan:{} },
    purchases: [],
    transfers: [],
    sales: [],
    payments: [],
    cashMovements: [],
    expenses: [],
    xhiroClosures: [],
    counters: { blerje:0, transferim:0, shitje:0 },
    config: {
      markaEmri: 'Fill & Stoff',
      emri: 'Fill & Stoff Tekstile',
      adresa: 'Rr. Kryesore, Nr. 12, Tiranë',
      nipt: 'L00000000A',
      tel: '+355 69 000 0000',
      tvsh: 20,
      monedha: 'Lekë',
      printFormat: 'pos80',
      pinMadhe: '1234',
      pinDyqan: '1111',
      njesiteCustom: [],
      dyqanEmri: '',
      dyqanVendndodhja: '',
      dyqanNr: '',
      dyqanTel: '',
      madheEmri: '',
      madheVendndodhja: '',
      madheTel: '',
      shpenzimeKategori: ['Qera','Rrogë','Faturë (energji/ujë)','Transport','Mirëmbajtje','Tjetër']
    }
  };
}

async function loadState(){
  try{
    const remote = await loadStateFromSupabase();
    if(remote){
      state = remote;
      try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
    }else{
      // Projekt Supabase bosh (hera e parë) — nis me gjendjen parazgjedhur dhe ruaje menjëherë
      state = defaultState();
      await saveState();
    }
  }catch(e){
    console.error('Lidhja me Supabase dështoi, po përdor kopjen lokale (offline).', e);
    try{
      const cached = localStorage.getItem(STORAGE_KEY);
      state = cached ? JSON.parse(cached) : defaultState();
    }catch(e2){
      state = defaultState();
    }
  }
  if(!state.payments) state.payments=[];
  if(!state.cashMovements) state.cashMovements=[];
  if(!state.expenses) state.expenses=[];
  const changed = migrateState();
  if(changed) await saveState();
}

/* Migrate older data shapes to the current 2-sistem model (madhe / dyqan). Safe every load. */
function migrateState(){
  let changed = false;
  if(!state.stock) { state.stock = { madhe:{}, dyqan:{} }; changed = true; }
  if(!state.stock.madhe){ state.stock.madhe = {}; changed = true; }
  if(!state.stock.dyqan){ state.stock.dyqan = state.stock.vogel_old_dyqan_placeholder || {}; changed = true; }
  // fold legacy "vogel" bucket (old 3rd warehouse) into dyqan
  if(state.stock.vogel){
    Object.keys(state.stock.vogel).forEach(pid=>{
      const qty = state.stock.vogel[pid]||0;
      if(qty){
        state.stock.dyqan[pid] = Math.round(((state.stock.dyqan[pid]||0)+qty)*1000)/1000;
      }
    });
    delete state.stock.vogel;
    changed = true;
  }
  (state.products||[]).forEach(p=>{
    if(!p.variants){
      const vid = p.id; // reuse product id so existing stock (keyed by product id) still resolves
      p.variants = [{id:vid, emer:p.emri||'Standard', masa:'', cmimiBlerje:p.cmimiBlerje||0, cmimiShitje:p.cmimiShitje||0}];
      delete p.emri; delete p.cmimiBlerje; delete p.cmimiShitje;
      changed = true;
    }
  });
  (state.transfers||[]).forEach(t=>{
    if(t.drejtBy==='vogel'){ t.drejtBy='dyqan'; changed=true; }
    if(t.nga==='vogel'){ t.nga='dyqan'; changed=true; }
    if(!t.status){ t.status='pranuar'; changed=true; } // transferet e vjetra ishin aplikuar menjëherë
  });
  (state.purchases||[]).forEach(p=>{
    if(!p.magazina){ p.magazina='madhe'; changed=true; }
  });
  if(!state.users){ state.users=[]; changed=true; }
  if(!state.config) { state.config = defaultState().config; changed = true; }
  if(!state.config.pinMadhe){ state.config.pinMadhe = '1234'; changed = true; }
  if(!state.config.pinDyqan){ state.config.pinDyqan = '1111'; changed = true; }
  if(!state.config.njesiteCustom){ state.config.njesiteCustom = []; changed = true; }
  if(state.config.dyqanEmri===undefined){ state.config.dyqanEmri = ''; changed = true; }
  if(state.config.dyqanVendndodhja===undefined){ state.config.dyqanVendndodhja = ''; changed = true; }
  if(state.config.dyqanNr===undefined){ state.config.dyqanNr = ''; changed = true; }
  if(state.config.dyqanTel===undefined){ state.config.dyqanTel = ''; changed = true; }
  if(state.config.madheEmri===undefined){ state.config.madheEmri = ''; changed = true; }
  if(state.config.madheVendndodhja===undefined){ state.config.madheVendndodhja = ''; changed = true; }
  if(state.config.madheTel===undefined){ state.config.madheTel = ''; changed = true; }
  if(!state.config.shpenzimeKategori){ state.config.shpenzimeKategori = ['Qera','Rrogë','Faturë (energji/ujë)','Transport','Mirëmbajtje','Tjetër']; changed = true; }
  if(!state.expenses){ state.expenses = []; changed = true; }
  if(state.config.markaEmri===undefined){ state.config.markaEmri = 'Fill & Stoff'; changed = true; }
  if(!state.xhiroClosures){ state.xhiroClosures = []; changed = true; }
  (state.users||[]).forEach(u=>{ if(!u.roli){ u.roli='Shitës'; changed=true; } });
  return changed;
}
async function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  try{
    await saveStateToSupabase(state);
  }catch(e){ console.error('Ruajtja te Supabase dështoi (ndryshimet janë ruajtur vetëm lokalisht).', e); }
}

/* ---------------- HELPERS ---------------- */
const MUAJT_SHQ = ['Jan','Shk','Mar','Pri','Maj','Qer','Kor','Gsh','Sht','Tet','Nën','Dhj'];
const DITET_SHQ = ['Die','Hën','Mar','Mër','Enj','Pre','Sht'];
function dataShqip(d){
  d = d || new Date();
  return `${DITET_SHQ[d.getDay()]}, ${String(d.getDate()).padStart(2,'0')} ${MUAJT_SHQ[d.getMonth()]} ${d.getFullYear()}`;
}
const fmt = n => (Number(n)||0).toLocaleString('sq-AL',{minimumFractionDigits:2,maximumFractionDigits:2});
const today = () => new Date().toISOString().slice(0,10);
const uid = () => Math.random().toString(36).slice(2,10);
function nextNr(kind, prefix){
  state.counters[kind] = (state.counters[kind]||0)+1;
  return prefix + String(state.counters[kind]).padStart(5,'0');
}
function prodById(id){ return state.products.find(p=>p.id===id); }
const UNITS_DEFAULT = ['copë','cm','metër','gram','kg','rrotull','paketë'];
function allUnits(){ return [...UNITS_DEFAULT, ...(state.config.njesiteCustom||[])]; }
function njesiaOptionsHtml(selected){
  return allUnits().map(u=>`<option value="${u}" ${selected===u?'selected':''}>${u}</option>`).join('')
    + `<option value="__add_new__">+ Njësi e re…</option>`;
}
function custById(id){ return state.customers.find(c=>c.id===id); }
function saleStatusTag(s){
  const totali = s.totali||0;
  const mbetet = s.mbetetFillestar||0;
  if(mbetet <= 0.001) return {label:'E paguar', cls:'tag-ok'};
  if(mbetet < totali - 0.001) return {label:'Pjesshëm', cls:'tag-warn'};
  return {label:'Debitor', cls:'tag-bad'};
}
function findCustomerByName(name){
  const n = (name||'').trim().toLowerCase();
  if(!n) return null;
  return state.customers.find(c=>c.emri.trim().toLowerCase()===n) || null;
}
/* ---- variant helpers ---- */
function findVariant(vid){
  for(const p of state.products){
    const v = (p.variants||[]).find(v=>v.id===vid);
    if(v) return {product:p, variant:v};
  }
  return null;
}
function variantLabel(p, v){
  let lbl = `${p.kod} — ${v.emer}`;
  if(v.masa) lbl += ` (${v.masa})`;
  return lbl;
}
function allVariantRows(){
  const rows = [];
  state.products.forEach(p=>(p.variants||[]).forEach(v=>rows.push({p, v})));
  return rows;
}
function stockOf(mag, pid){ return (state.stock[mag] && state.stock[mag][pid]) || 0; }
function addStock(mag, pid, qty){
  if(!state.stock[mag]) state.stock[mag]={};
  state.stock[mag][pid] = Math.round(((state.stock[mag][pid]||0) + qty) * 1000)/1000;
}
function custBalance(id){
  const sold = state.sales.filter(s=>s.klientId===id).reduce((a,s)=>a+s.mbetetFillestar,0);
  const paid = state.payments.filter(p=>p.klientId===id).reduce((a,p)=>a+p.shuma,0);
  return Math.round((sold-paid)*100)/100;
}
function anonymousDebtSales(){
  return state.sales.filter(s=>!s.klientId && s.mbetetFillestar>0.001);
}
function anonymousDebtTotal(){
  return Math.round(anonymousDebtSales().reduce((a,s)=>a+s.mbetetFillestar,0)*100)/100;
}
function totalDebtAmount(){
  const named = state.customers.reduce((a,c)=>a+custBalance(c.id),0);
  return Math.round((named+anonymousDebtTotal())*100)/100;
}
function findProductsByKod(kod, excludeId){
  const k = (kod||'').trim().toLowerCase();
  if(!k) return [];
  return state.products.filter(p => p.id!==excludeId && (p.kod||'').trim().toLowerCase()===k);
}
function kodWarningHtml(kod, excludeId){
  const matches = findProductsByKod(kod, excludeId);
  if(matches.length===0) return '';
  const parts = matches.map(p=>{
    const emrat = (p.variants||[]).map(v=>v.emer).filter(Boolean).join(', ') || '—';
    let stokMadhe=0, stokDyqan=0;
    (p.variants||[]).forEach(v=>{ stokMadhe+=stockOf('madhe',v.id); stokDyqan+=stockOf('dyqan',v.id); });
    const vende = [];
    if(stokMadhe>0) vende.push(`Magazina e Madhe: ${stokMadhe}`);
    if(stokDyqan>0) vende.push(`Dyqan: ${stokDyqan}`);
    const vendText = vende.length ? vende.join(' · ') : 'pa stok aktualisht në asnjë sistem';
    return `<b>${p.kod}</b> — ${emrat} (${vendText})`;
  }).join('<br>');
  return `⚠ Ky kod është në përdorim tashmë te: ${parts}`;
}
const STAFF_ROLES = ['Admin','Menaxher','Shitës','Magazinier','Tjetër'];
const CLOSING_ROLES = ['Admin','Menaxher'];
function closableUsers(){ return state.users.filter(u=>u.sistem==='dyqan' && CLOSING_ROLES.includes(u.roli)); }
function xhiroClosureFor(date){ return state.xhiroClosures.find(c=>c.data===date) || null; }
function otherSystem(sys){ return sys==='madhe' ? 'dyqan' : 'madhe'; }
function sysLabel(sys){ return sys==='madhe' ? 'Magazina e Madhe' : 'Dyqan'; }
function pendingIncoming(sys){ return state.transfers.filter(t=>t.drejtBy===sys && t.status==='ne_pritje'); }

/* ---------------- SESSION / NAV ---------------- */
let currentSystem = null; // null | 'madhe' | 'dyqan' — restaurohet nga sessionStorage nëse ekziston (mbetet i loguar edhe pas refresh, derisa të mbyllet skeda/shfletuesi)
let currentLoggedUser = null; // përdoruesi që hyri me PIN-in e vet personal (null nëse u përdor PIN-i i sistemit)
const SESSION_KEY = 'fs-session-v1';
function saveSession(){
  try{
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({system: currentSystem, userId: currentLoggedUser ? currentLoggedUser.id : null}));
  }catch(e){}
}
function clearSession(){
  try{ sessionStorage.removeItem(SESSION_KEY); }catch(e){}
}
function restoreSession(){
  try{
    const raw = sessionStorage.getItem(SESSION_KEY);
    if(!raw) return;
    const s = JSON.parse(raw);
    if(s && (s.system==='madhe' || s.system==='dyqan')){
      currentSystem = s.system;
      currentLoggedUser = s.userId ? (state.users.find(u=>u.id===s.userId) || null) : null;
    }
  }catch(e){}
}
let currentView = null;

const NAV_MADHE = [
  {id:'paneli-madhe', label:'Paneli', icon:'dashboard'},
  {id:'produkte', label:'Produkte', icon:'product'},
  {id:'stok-madhe', label:'Stoku', icon:'madhe'},
  {id:'transfer-madhe', label:'Transferime', icon:'arrow'},
  {id:'blerje-madhe', label:'Blerje', icon:'blerje'},
  {id:'kerko-madhe', label:'Kërko Fatura', icon:'search'},
  {id:'njoftime-madhe', label:'Njoftime', icon:'chat'},
  {id:'perdorues-madhe', label:'Përdorues', icon:'debitore'},
  {id:'config-madhe', label:'Konfigurime', icon:'config'},
];
const NAV_DYQAN = [
  {id:'paneli-dyqan', label:'Paneli', icon:'dashboard'},
  {id:'produkte-dyqan', label:'Produkte', icon:'product'},
  {id:'stok-dyqan', label:'Stoku', icon:'vogel2'},
  {id:'shiko-madhe', label:'Shiko Magazinën e Madhe', icon:'madhe'},
  {id:'transfer-dyqan', label:'Transferime', icon:'arrow'},
  {id:'blerje-dyqan', label:'Blerje', icon:'blerje'},
  {id:'shitje', label:'Shitje', icon:'shitje'},
  {id:'kerko-dyqan', label:'Kërko Fatura', icon:'search'},
  {id:'shpenzime', label:'Shpenzime', icon:'xhiro'},
  {id:'debitore', label:'Debitorë', icon:'debitore'},
  {id:'bilanc', label:'Bilanc', icon:'bilanc'},
  {id:'xhiro', label:'Xhiro Ditore', icon:'xhiro'},
  {id:'njoftime-dyqan', label:'Njoftime', icon:'chat'},
  {id:'perdorues-dyqan', label:'Përdorues', icon:'debitore'},
  {id:'config-dyqan', label:'Konfigurime', icon:'config'},
];
/* Vetëm Admini ka qasje të plotë. Nëse hyrja bëhet me PIN-in e përgjithshëm të
   sistemit (pa u identifikuar si përdorues i vetëm), trajtohet si Admin.
   "Kërko Fatura" tek Magazina e Madhe lejohet edhe për Menaxher e Magazinier. */
function navForRole(sys){
  const full = sys==='madhe' ? NAV_MADHE : NAV_DYQAN;
  const u = currentLoggedUser;
  if(!u || u.roli==='Admin') return full;
  return full.filter(n=>{
    if(n.id==='config-madhe' || n.id==='config-dyqan') return false;
    if(n.id==='kerko-madhe') return ['Menaxher','Magazinier'].includes(u.roli);
    return true;
  });
}

/* ---------------- RENDER SHELL ---------------- */
function render(){
  const app = document.getElementById('app');
  document.title = `${state.config.markaEmri || 'Fill & Stoff'} — Menaxhim Tekstili`;
  if(!currentSystem){
    stopNjoftimePolling();
    app.className = '';
    app.innerHTML = renderSystemChooser();
    wireSystemChooser();
    return;
  }
  startNjoftimePolling();
  const nav = navForRole(currentSystem);
  if(!currentView || !nav.some(n=>n.id===currentView)) currentView = nav[0].id;
  app.className = currentSystem==='madhe' ? 'sys-madhe' : 'sys-dyqan';
  app.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark">${(state.config.markaEmri||'FS').trim().slice(0,2).toUpperCase()}</div>
          <div>
            <div class="brand-name">${state.config.markaEmri||'Fill & Stoff'} <span class="sys-pill">${currentSystem==='madhe'?'📦 Magazina e Madhe':'🏬 Dyqan'}</span></div>
            <div class="brand-sub">${currentSystem==='madhe'?'Magazina e Madhe':(state.config.dyqanEmri||'Dyqan · Menaxhim Tekstili')}</div>
          </div>
        </div>
        <div class="topbar-right">
          <span><span class="dot"></span>${state.config.emri}</span>
          <span>${dataShqip()}</span>
          <button class="btn btn-ghost btn-sm" id="btn-switch-system">${ic('lock','thumb-icon')}Ndrysho Sistemin</button>
        </div>
      </div>
      <nav class="nav">
        ${nav.map(n=>`
          <button class="nav-btn ${currentView===n.id?'active':''}" data-nav="${n.id}">
            ${ic(n.icon)}
            <span>${navLabel(n)}</span>
          </button>`).join('')}
      </nav>
    </div>
    <main id="main"></main>
  `;
  app.querySelectorAll('[data-nav]').forEach(b=>{
    b.onclick = ()=>{
      currentView = b.dataset.nav;
      njoftimeOpenedFor = null;
      app.querySelectorAll('[data-nav]').forEach(x=>x.classList.toggle('active', x.dataset.nav===currentView));
      renderMain();
    };
  });
  document.getElementById('btn-switch-system').onclick = ()=>{
    currentSystem = null; currentView = null; currentLoggedUser = null; clearSession(); render();
  };
  renderMain();
}
function debtorsCount(){
  return state.customers.filter(c=>custBalance(c.id)>0.001).length + anonymousDebtSales().length;
}
function lowStockCount(sys){
  return allVariantRows().filter(({p,v})=>stockOf(sys,v.id) <= (p.minStok||0)).length;
}
let njoftimeUnread = {madhe:0, dyqan:0};
let njoftimePollTimer = null;
let njoftimePollSystem = null;
async function refreshNjoftimeBadge(){
  if(!currentSystem) return;
  try{
    njoftimeUnread[currentSystem] = await fetchUnreadCount(currentSystem);
  }catch(e){ return; }
  const btn = document.querySelector(`[data-nav="njoftime-${currentSystem}"] span`);
  if(btn) btn.innerHTML = navLabel({id:`njoftime-${currentSystem}`, label:'Njoftime'});
}
function startNjoftimePolling(){
  if(njoftimePollSystem === currentSystem && njoftimePollTimer) return;
  if(njoftimePollTimer) clearInterval(njoftimePollTimer);
  njoftimePollSystem = currentSystem;
  refreshNjoftimeBadge();
  njoftimePollTimer = setInterval(refreshNjoftimeBadge, 20000);
}
function stopNjoftimePolling(){
  if(njoftimePollTimer) clearInterval(njoftimePollTimer);
  njoftimePollTimer = null; njoftimePollSystem = null;
}
function navLabel(n){
  if(n.id === `transfer-${currentSystem}`){
    const cnt = pendingIncoming(currentSystem).length;
    if(cnt>0) return `${n.label} <span class="nav-badge">${cnt}</span>`;
  }
  if(n.id === `stok-${currentSystem}`){
    const cnt = lowStockCount(currentSystem);
    if(cnt>0) return `${n.label} <span class="nav-badge-danger">${cnt}</span>`;
  }
  if(n.id === `njoftime-${currentSystem}`){
    const cnt = njoftimeUnread[currentSystem]||0;
    if(cnt>0) return `${n.label} <span class="nav-badge-danger">${cnt}</span>`;
  }
  if(n.id === 'debitore'){
    const cnt = debtorsCount();
    if(cnt>0) return `${n.label} <span class="nav-badge-danger">${cnt}</span>`;
  }
  return n.label;
}

function renderMain(){
  const main = document.getElementById('main');
  const views = {
    'paneli-madhe': viewPaneliMadhe,
    'produkte': viewProdukte,
    'stok-madhe': viewStokMadhe,
    'transfer-madhe': ()=>viewTransfer('madhe'),
    'blerje-madhe': ()=>viewBlerje('madhe'),
    'kerko-madhe': ()=>viewKerkoFatura('madhe'),
    'njoftime-madhe': ()=>viewNjoftime('madhe'),
    'perdorues-madhe': ()=>viewPerdorues('madhe'),
    'config-madhe': viewConfigMadhe,
    'paneli-dyqan': viewPaneliDyqan,
    'produkte-dyqan': viewProdukte,
    'stok-dyqan': viewStokDyqan,
    'shiko-madhe': ()=>viewStok('madhe'),
    'transfer-dyqan': ()=>viewTransfer('dyqan'),
    'blerje-dyqan': ()=>viewBlerje('dyqan'),
    'shitje': viewShitje,
    'kerko-dyqan': ()=>viewKerkoFatura('dyqan'),
    'shpenzime': viewShpenzime,
    'debitore': viewDebitore,
    'bilanc': viewBilanc,
    'xhiro': viewXhiro,
    'njoftime-dyqan': ()=>viewNjoftime('dyqan'),
    'perdorues-dyqan': ()=>viewPerdorues('dyqan'),
    'config-dyqan': viewConfigDyqan,
  };
  main.innerHTML = (views[currentView]||viewPaneliMadhe)();
  wireCurrentView();
}
function wireCurrentView(){
  const fns = {
    'paneli-madhe': wirePaneliMadhe,
    'produkte': wireProdukte,
    'stok-madhe': wireStokMadhe,
    'transfer-madhe': ()=>wireTransfer('madhe'),
    'blerje-madhe': ()=>wireBlerje('madhe'),
    'kerko-madhe': ()=>wireKerkoFatura('madhe'),
    'njoftime-madhe': ()=>wireNjoftime('madhe'),
    'perdorues-madhe': ()=>wirePerdorues('madhe'),
    'config-madhe': wireConfigMadhe,
    'paneli-dyqan': wirePaneliDyqan,
    'produkte-dyqan': wireProdukte,
    'stok-dyqan': wireStokDyqan,
    'shiko-madhe': ()=>{},
    'transfer-dyqan': ()=>wireTransfer('dyqan'),
    'blerje-dyqan': ()=>wireBlerje('dyqan'),
    'shitje': wireShitje,
    'kerko-dyqan': ()=>wireKerkoFatura('dyqan'),
    'shpenzime': wireShpenzime,
    'debitore': wireDebitore,
    'bilanc': wireBilanc,
    'xhiro': wireXhiro,
    'njoftime-dyqan': ()=>wireNjoftime('dyqan'),
    'perdorues-dyqan': ()=>wirePerdorues('dyqan'),
    'config-dyqan': wireConfigDyqan,
  };
  (fns[currentView]||function(){})();
}
async function refresh(){ await saveState(); render(); }

/* ---------------- SYSTEM CHOOSER (LOGIN) ---------------- */
function renderSystemChooser(){
  return `
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;">
    <div style="max-width:760px;width:100%;">
      <div style="text-align:center;margin-bottom:34px;">
        <div class="brand-mark" style="width:68px;height:68px;font-size:26px;margin:0 auto 14px;border-radius:16px;">FS</div>
        <h1 class="disp" style="margin:0 0 6px;font-size:28px;">${state.config.markaEmri||'Fill & Stoff'}</h1>
        <p class="hint" style="font-size:14px;">Zgjidh sistemin ku dëshiron të hysh</p>
      </div>
      <div class="sys-grid">
        <button class="sys-card" id="choose-madhe">
          ${ic('madhe','sys-card-icon')}
          <div class="sys-card-title">Magazina e Madhe</div>
          <div class="sys-card-sub">Produkte, kategori, stok, alarme, transferime, përdorues</div>
        </button>
        <button class="sys-card" id="choose-dyqan">
          ${ic('vogel2','sys-card-icon')}
          <div class="sys-card-title">Dyqan</div>
          <div class="sys-card-sub">Stok, shitje, blerje, debitorë, bilanc, xhiro ditore</div>
        </button>
      </div>
    </div>
  </div>`;
}
function wireSystemChooser(){
  document.getElementById('choose-madhe').onclick = ()=> openSystemPin('madhe');
  document.getElementById('choose-dyqan').onclick = ()=> openSystemPin('dyqan');
}
function openSystemPin(sys){
  const label = sysLabel(sys);
  const pin = sys==='madhe' ? state.config.pinMadhe : state.config.pinDyqan;
  openModal(`
    <div class="modal-head"><h3>${ic('lock','thumb-icon')}${label}</h3><button class="close-x" id="m-close">✕</button></div>
    <p class="hint">Shkruaj PIN-in për të hyrë në këtë sistem.</p>
    <form id="pin-form">
      <div class="field"><label>PIN</label><input required type="password" inputmode="numeric" name="pin" autofocus autocomplete="off"></div>
      <div id="pin-err" style="color:var(--danger);font-size:12.5px;margin:-4px 0 10px;display:none;">PIN i pasaktë. Provo përsëri.</div>
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-primary">Hyr</button>
      </div>
    </form>
  `);
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('pin-form').onsubmit = (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const entered = (f.get('pin')||'').trim();
    const matchedUser = state.users.find(u=>u.sistem===sys && u.pin && u.pin===entered);
    if(entered === (pin||'') || matchedUser){
      currentSystem = sys; currentView = null;
      currentLoggedUser = matchedUser || null;
      saveSession();
      closeModal();
      render();
    } else {
      document.getElementById('pin-err').style.display='block';
    }
  };
}

/* ---------------- MODAL SYSTEM ---------------- */
function openModal(html, wide){
  let ov = document.getElementById('overlay');
  if(!ov){
    ov = document.createElement('div');
    ov.id='overlay'; ov.className='overlay';
    document.body.appendChild(ov);
    // Mbyllet vetëm me butonin "Anulo"/"X" ose me Escape — jo duke klikuar jashtë,
    // që të mos humbasë aksidentalisht ajo çka është shkruar në formular.
    document.addEventListener('keydown', escCloseModal);
  }
  ov.innerHTML = `<div class="modal${wide?' modal-wide':''}">${html}</div>`;
  ov.style.display='flex';
}
function escCloseModal(e){
  if(e.key==='Escape') closeModal();
}
function closeModal(){
  const ov = document.getElementById('overlay');
  if(ov) ov.remove();
  document.removeEventListener('keydown', escCloseModal);
}

/* =====================================================================
   PANELI — MAGAZINA E MADHE
   ===================================================================== */
function viewPaneliMadhe(){
  const rows = allVariantRows();
  const valMadhe = rows.reduce((a,{v})=>a+stockOf('madhe',v.id)*v.cmimiBlerje,0);
  const lowStock = rows.filter(({p,v})=>stockOf('madhe',v.id) <= (p.minStok||0)).slice(0,6);
  const pendingIn = pendingIncoming('madhe');
  const lastPurchases = state.purchases.filter(p=>p.magazina==='madhe').sort((a,b)=>b.data.localeCompare(a.data)).slice(0,6);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Përmbledhje</div><h1 class="view-title">Paneli — Magazina e Madhe</h1></div>
      <div class="hint">${state.products.length} produkte</div>
    </div>
    <div class="grid-stats">
      <div class="stat-card"><p class="stat-label">Vlera e Stokut</p><p class="stat-val">${fmt(valMadhe)}</p><p class="stat-sub">${state.config.monedha} (me çmim blerje)</p></div>
      <div class="stat-card s3"><p class="stat-label">Produkte nën Minimum</p><p class="stat-val">${lowStock.length}</p><p class="stat-sub">shiko te "Stoku"</p></div>
      <div class="stat-card s2"><p class="stat-label">Transferime në Pritje</p><p class="stat-val">${pendingIn.length}</p><p class="stat-sub">për pranim nga dyqani</p></div>
    </div>
    <div class="card">
      <p class="card-title">Hyrje të Fundit (Blerje)</p>
      ${lastPurchases.length? `<table><thead><tr><th>Nr</th><th>Data</th><th class="num">Artikuj</th><th class="num">Totali</th></tr></thead><tbody>
        ${lastPurchases.map(r=>`<tr><td class="mono">${r.nr}</td><td>${r.data}</td><td class="num">${r.items.length}</td><td class="num">${fmt(r.totali)}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty">Ende pa hyrje malli.</div>`}
    </div>
    <div class="card">
      <p class="card-title">Stok i Ulët</p>
      ${lowStock.length? `<table><thead><tr><th>Produkti</th><th class="num">Gjendja</th><th class="num">Min.</th></tr></thead><tbody>
        ${lowStock.map(({p,v})=>`<tr><td>${p.kod} — ${v.emer}</td><td class="num">${stockOf('madhe',v.id)} ${p.njesia}</td><td class="num">${p.minStok||0}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty">Asnjë produkt nën nivelin minimal.</div>`}
    </div>
  `;
}
function wirePaneliMadhe(){}

/* =====================================================================
   PANELI — DYQAN
   ===================================================================== */
function viewPaneliDyqan(){
  const rows = allVariantRows();
  const valDyqan = rows.reduce((a,{v})=>a+stockOf('dyqan',v.id)*v.cmimiBlerje,0);
  const totShitjeSot = state.sales.filter(s=>s.data===today()).reduce((a,s)=>a+s.totali,0);
  const totDebi = totalDebtAmount();
  const lowStock = rows.filter(({p,v})=>stockOf('dyqan',v.id) <= (p.minStok||0)).slice(0,6);
  const pendingIn = pendingIncoming('dyqan');
  const lastSales = [...state.sales].sort((a,b)=>b.data.localeCompare(a.data)||b.nr.localeCompare(a.nr)).slice(0,6);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Përmbledhje</div><h1 class="view-title">Paneli — Dyqan</h1></div>
      <div class="hint">${state.customers.length} klientë</div>
    </div>
    <div class="grid-stats">
      <div class="stat-card"><p class="stat-label">Vlera e Stokut</p><p class="stat-val">${fmt(valDyqan)}</p><p class="stat-sub">${state.config.monedha} (me çmim blerje)</p></div>
      <div class="stat-card s3"><p class="stat-label">Shitje Sot</p><p class="stat-val">${fmt(totShitjeSot)}</p><p class="stat-sub">${state.config.monedha}</p></div>
      <div class="stat-card s4"><p class="stat-label">Totali Debitorë</p><p class="stat-val">${fmt(totDebi)}</p><p class="stat-sub">${state.config.monedha} pa u arkëtuar</p></div>
      <div class="stat-card s2"><p class="stat-label">Transferime në Pritje</p><p class="stat-val">${pendingIn.length}</p><p class="stat-sub">për pranim nga magazina</p></div>
    </div>
    <div class="card">
      <p class="card-title">Shitjet e Fundit</p>
      ${lastSales.length? `<table><thead><tr><th>Nr</th><th>Data</th><th>Klienti</th><th>Pagesa</th><th class="num">Totali</th></tr></thead><tbody>
        ${lastSales.map(s=>`<tr><td class="mono">${s.nr}</td><td>${s.data}</td><td>${s.klientId?custById(s.klientId)?.emri||'—':'Klient rasti'}</td><td><span class="tag ${saleStatusTag(s).cls}">${saleStatusTag(s).label}</span></td><td class="num">${fmt(s.totali)}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty">Nuk ka ende shitje. Fillo nga skeda "Shitje".</div>`}
    </div>
    <div class="card">
      <p class="card-title">Stok i Ulët</p>
      ${lowStock.length? `<table><thead><tr><th>Produkti</th><th class="num">Gjendja</th><th class="num">Min.</th></tr></thead><tbody>
        ${lowStock.map(({p,v})=>`<tr><td>${p.kod} — ${v.emer}</td><td class="num">${stockOf('dyqan',v.id)} ${p.njesia}</td><td class="num">${p.minStok||0}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty">Asnjë produkt nën nivelin minimal — shumë mirë.</div>`}
    </div>
  `;
}
function wirePaneliDyqan(){}

/* =====================================================================
   PRODUKTE (vetëm te Magazina e Madhe)
   ===================================================================== */
function viewProdukte(){
  const rows = allVariantRows();
  const here = currentSystem, other = otherSystem(currentSystem);
  const hereLbl = sysLabel(here), otherLbl = sysLabel(other);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Katalogu</div><h1 class="view-title">Produkte</h1><p class="hint">Çdo produkt mund të ketë disa emra (variante) — secili me masën dhe çmimet e veta. Katalogu (kodet, emrat, çmimet) është i përbashkët për të dy sistemet, por <b>sasia e stokut është krejtësisht e ndarë</b> — një artikull hyn te ${otherLbl} vetëm përmes një Transferimi të pranuar.</p></div>
      <button class="btn btn-terra" id="btn-new-prod">${ic('plus','thumb-icon')}Produkt i Ri</button>
    </div>
    <div class="card">
      <table><thead><tr>
        <th>Kodi</th><th>Grupi</th><th>Emri / Varioni</th><th>Masa</th><th>Njësia</th>
        <th class="num">Çm. Blerje</th><th class="num">Çm. Shitje</th>
        <th class="num" style="background:${here==='madhe'?'#eef1f8':'#faf1ea'};">Sasia këtu — ${hereLbl}</th>
        <th class="num" style="color:var(--ink-soft);">Sasia te ${otherLbl} <span class="hint" style="margin:0;">(referencë)</span></th><th></th>
      </tr></thead><tbody>
      ${state.products.length===0? `<tr><td colspan="10"><div class="empty">Nuk ka produkte ende. Shto produktin e parë.</div></td></tr>` :
        state.products.map(p=>(p.variants||[]).map((v,vi)=>`
        <tr>
          <td class="mono">${p.kod}</td><td>${p.kategori||'—'}</td><td>${v.emer}</td><td>${v.masa||'—'}</td><td>${p.njesia}</td>
          <td class="num">${fmt(v.cmimiBlerje)}</td><td class="num">${fmt(v.cmimiShitje)}</td>
          <td class="num" style="font-weight:800;color:${here==='madhe'?'var(--indigo)':'var(--terra)'};background:${here==='madhe'?'#eef1f8':'#faf1ea'};">${stockOf(here,v.id)}</td>
          <td class="num" style="color:var(--ink-soft);">${stockOf(other,v.id)}</td>
          <td>${vi===0?`<button class="icon-btn" data-edit-prod="${p.id}" style="background:#eef1f8;color:var(--indigo)">${ic('edit','thumb-icon')}</button>
              <button class="icon-btn" data-del-prod="${p.id}">${ic('trash','thumb-icon')}</button>`:''}</td>
        </tr>`).join('')).join('')}
      </tbody></table>
    </div>
  `;
}
function variantRowHtml(v, idx, sysLbl, stockVal){
  return `<div class="variant-row" data-variant-row="${idx}" data-vid="${v.id}">
    <div class="field" style="margin-bottom:0;"><label>Emri ${idx+1}</label><input required data-vf="emer" value="${v.emer||''}" placeholder="p.sh. E kuqe"></div>
    <div class="field" style="margin-bottom:0;"><label>Masa</label><input data-vf="masa" value="${v.masa||''}" placeholder="p.sh. 1.40m"></div>
    <div class="field" style="margin-bottom:0;"><label>Çm. Blerje</label><input required type="number" step="0.01" data-vf="cmimiBlerje" value="${v.cmimiBlerje||0}"></div>
    <div class="field" style="margin-bottom:0;"><label>Çm. Shitje</label><input required type="number" step="0.01" data-vf="cmimiShitje" value="${v.cmimiShitje||0}"></div>
    <div class="field" style="margin-bottom:0;"><label>Stok <span class="unit-badge">— ${sysLbl}</span></label><input type="number" step="0.01" data-vf="stok" value="${stockVal||0}"></div>
    <button type="button" class="icon-btn" data-remove-variant>${ic('trash','thumb-icon')}</button>
  </div>`;
}
function productForm(p){
  const isEdit = !!p;
  const base = p || {kod:'',kategori:'',njesia:'copë',minStok:0,variants:[{id:uid(),emer:'',masa:'',cmimiBlerje:0,cmimiShitje:0}]};
  const variants = base.variants && base.variants.length ? base.variants : [{id:uid(),emer:'',masa:'',cmimiBlerje:0,cmimiShitje:0}];
  const sysLbl = sysLabel(currentSystem);
  return `
    <div class="modal-head"><h3>${isEdit?'Modifiko Produktin':'Produkt i Ri'}</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="prod-form">
      <div class="field-row">
        <div class="field"><label>Kodi</label><input required name="kod" id="kod-input" value="${base.kod}" autocomplete="off">
          <div id="kod-warning"></div>
        </div>
        <div class="field"><label>Kategoria / Emri i Grupit</label><input name="kategori" list="kategori-list" value="${base.kategori||''}" placeholder="p.sh. Pëlhurë Pambuku">
          <datalist id="kategori-list">${[...new Set(state.products.map(p=>p.kategori).filter(Boolean))].map(k=>`<option value="${k}">`).join('')}</datalist>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Njësia</label>
          <select name="njesia" id="njesia-select">${njesiaOptionsHtml(base.njesia)}</select>
        </div>
        <div class="field"><label>Stoku Minimal (për sinjalizim)</label><input type="number" step="0.01" name="minStok" value="${base.minStok||0}"></div>
      </div>
      <hr class="stitch">
      <div class="lock-badge" style="background:${currentSystem==='madhe'?'#eef1f8':'#faf1ea'};color:${currentSystem==='madhe'?'var(--indigo)':'var(--terra)'};margin-bottom:10px;">
        ${ic(currentSystem==='madhe'?'madhe':'vogel2','thumb-icon')} Stoku i vendosur më poshtë do të shtohet vetëm te<b style="color:#000;font-style:italic;margin-left:4px;">${sysLbl}</b>. Për ta pasur edhe te ${sysLabel(otherSystem(currentSystem))}, duhet një Transferim i pranuar nga ana tjetër.
      </div>
      <label>Emrat / Variantet e Produktit</label>
      <p class="hint">Shto sa emra të duash (emër 1, emër 2, emër 3...). Secili emër ka masën dhe çmimet e veta.</p>
      <div id="variant-rows">
        ${variants.map((v,idx)=>variantRowHtml(v,idx,sysLbl,stockOf(currentSystem,v.id))).join('')}
        <button type="button" class="btn btn-ghost btn-sm" id="variant-addbtn">${ic('plus','thumb-icon')}Shto Emër Tjetër</button>
      </div>
      <hr class="stitch">
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-primary">${isEdit?'Ruaj Ndryshimet':'Shto Produktin'}</button>
      </div>
    </form>
  `;
}
function wireProdukte(){
  document.getElementById('btn-new-prod').onclick = ()=>{
    openModal(productForm(null), true);
    bindProdForm(null);
  };
  document.querySelectorAll('[data-edit-prod]').forEach(b=>{
    b.onclick = ()=>{
      const p = prodById(b.dataset.editProd);
      openModal(productForm(p), true);
      bindProdForm(p);
    };
  });
  document.querySelectorAll('[data-del-prod]').forEach(b=>{
    b.onclick = async ()=>{
      if(!confirm('Fshi këtë produkt (me të gjitha variantet)? Kjo nuk ndikon te lëvizjet e mëparshme.')) return;
      state.products = state.products.filter(p=>p.id!==b.dataset.delProd);
      await refresh();
    };
  });
}
function bindProdForm(existing){
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  const kodInput = document.getElementById('kod-input');
  const kodWarnEl = document.getElementById('kod-warning');
  function updateKodWarning(){
    const html = kodWarningHtml(kodInput.value, existing?existing.id:null);
    kodWarnEl.innerHTML = html;
    kodWarnEl.className = html ? 'stock-info stock-bad' : '';
  }
  kodInput.oninput = updateKodWarning;
  updateKodWarning();
  const njesiaSelect = document.getElementById('njesia-select');
  let prevNjesia = njesiaSelect.value;
  njesiaSelect.onchange = async ()=>{
    if(njesiaSelect.value !== '__add_new__') return;
    const val = (prompt('Emri i njësisë së re (p.sh. litër, m²):')||'').trim();
    if(!val){ njesiaSelect.innerHTML = njesiaOptionsHtml(prevNjesia); njesiaSelect.value = prevNjesia; return; }
    if(!allUnits().includes(val)){
      state.config.njesiteCustom = state.config.njesiteCustom||[];
      state.config.njesiteCustom.push(val);
      await saveState();
    }
    njesiaSelect.innerHTML = njesiaOptionsHtml(val);
    njesiaSelect.value = val;
    prevNjesia = val;
  };
  const rowsWrap = document.getElementById('variant-rows');
  const addBtn = document.getElementById('variant-addbtn');
  function wireRemove(){
    rowsWrap.querySelectorAll('[data-remove-variant]').forEach(btn=>{
      btn.onclick = ()=>{
        if(rowsWrap.querySelectorAll('[data-variant-row]').length<=1){ alert('Duhet të ketë të paktën një emër.'); return; }
        btn.closest('[data-variant-row]').remove();
      };
    });
  }
  function addVariantRow(){
    const idx = rowsWrap.querySelectorAll('[data-variant-row]').length;
    const div = document.createElement('div');
    div.innerHTML = variantRowHtml({id:uid(),emer:'',masa:'',cmimiBlerje:0,cmimiShitje:0}, idx, sysLabel(currentSystem), 0);
    rowsWrap.insertBefore(div.firstElementChild, addBtn);
    wireRemove();
  }
  wireRemove();
  addBtn.onclick = addVariantRow;

  document.getElementById('prod-form').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const variantRows = Array.from(rowsWrap.querySelectorAll('[data-variant-row]')).map(row=>({
      id: row.dataset.vid,
      emer: row.querySelector('[data-vf="emer"]').value.trim(),
      masa: row.querySelector('[data-vf="masa"]').value.trim(),
      cmimiBlerje: parseFloat(row.querySelector('[data-vf="cmimiBlerje"]').value)||0,
      cmimiShitje: parseFloat(row.querySelector('[data-vf="cmimiShitje"]').value)||0,
      stok: parseFloat(row.querySelector('[data-vf="stok"]').value)||0,
    })).filter(v=>v.emer);
    if(variantRows.length===0){ alert('Shto të paktën një emër produkti.'); return; }
    const data = {
      kod:f.get('kod').trim(), kategori:f.get('kategori').trim(),
      njesia:f.get('njesia'), minStok:parseFloat(f.get('minStok'))||0,
      variants: variantRows.map(({stok, ...rest})=>rest)
    };
    variantRows.forEach(v=>{
      const diff = v.stok - stockOf(currentSystem, v.id);
      if(diff !== 0) addStock(currentSystem, v.id, diff);
    });
    if(existing){ Object.assign(existing, data); }
    else { data.id = uid(); state.products.push(data); }
    closeModal();
    await refresh();
  };
}

/* =====================================================================
   STOKU (madhe / dyqan) + ALARME
   ===================================================================== */
function pendingOutMap(sys){
  const map = {};
  state.transfers.filter(t=>t.nga===sys && t.status==='ne_pritje').forEach(t=>{
    t.items.forEach(it=>{ map[it.productId] = (map[it.productId]||0) + it.sasia; });
  });
  return map;
}
function viewStok(sys){
  const rows = allVariantRows();
  const low = rows.filter(({p,v})=>stockOf(sys,v.id) <= (p.minStok||0));
  const pendOut = pendingOutMap(sys);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">${sys==='madhe'?'Depoja Qendrore':'Pika e Shitjes'}</div><h1 class="view-title">Stoku — ${sysLabel(sys)}</h1></div>
    </div>
    ${low.length? `<div class="card" style="border-color:var(--danger);">
      <p class="card-title">⚠ Alarme Stoku (${low.length})</p>
      <table><thead><tr><th>Produkti</th><th class="num">Gjendja</th><th class="num">Min.</th></tr></thead><tbody>
      ${low.map(({p,v})=>`<tr class="stok-row-alert"><td>${p.kod} — ${v.emer}</td><td class="num qty-alert">${stockOf(sys,v.id)} ${p.njesia}</td><td class="num">${p.minStok||0}</td></tr>`).join('')}
      </tbody></table>
    </div>` : ''}
    <div class="card">
      <p class="card-title">Gjendja e Plotë</p>
      <table><thead><tr><th>Kodi</th><th>Produkti / Varioni</th><th>Masa</th><th>Njësia</th><th class="num">Sasia</th><th class="num">Në Transferim</th><th class="num">Vlera (blerje)</th><th></th></tr></thead><tbody>
      ${rows.length===0?`<tr><td colspan="8"><div class="empty">S'ka produkte ende.</div></td></tr>`:
        rows.map(({p,v})=>{
          const q = stockOf(sys,v.id);
          const isLow = q <= (p.minStok||0);
          const transferuar = pendOut[v.id] || 0;
          const rowClass = isLow ? 'stok-row-alert' : (transferuar>0 ? 'stok-row-transfer' : '');
          const qtyClass = isLow ? 'qty-alert' : (transferuar>0 ? 'qty-transfer' : '');
          const tagHtml = isLow
            ? '<span class="tag tag-bad">Stok i ulët</span>'
            : (transferuar>0 ? '<span class="tag tag-transfer">Në transferim</span>' : '');
          const transferCell = transferuar>0 ? `<span class="qty-transfer">− ${transferuar} ${p.njesia}</span>` : '<span style="color:var(--ink-soft);">—</span>';
          return `<tr class="${rowClass}"><td class="mono">${p.kod}</td><td>${p.kategori?p.kategori+' — ':''}${v.emer}</td><td>${v.masa||'—'}</td><td>${p.njesia}</td><td class="num ${qtyClass}">${q}</td><td class="num">${transferCell}</td><td class="num">${fmt(q*v.cmimiBlerje)}</td><td>${tagHtml}</td></tr>`;
        }).join('')}
      </tbody></table>
      <p class="hint">🔴 Rreshti i kuq = stoku është nën minimum (alarm). 🟡 Rreshti i verdhë = ka material të dërguar në transferim, ende në pritje pranimi — sasia në kolonën "Sasia" tregon çfarë <b>ka mbetur</b> pas atij transferimi.</p>
    </div>
  `;
}
function viewStokMadhe(){ return viewStok('madhe'); }
function viewStokDyqan(){ return viewStok('dyqan'); }
function wireStokMadhe(){}
function wireStokDyqan(){}

/* ---- Item picker: search-as-you-type (datalist) shared by hyrje / transfer / shitje ---- */
function productSearchDatalist(){
  return `<datalist id="product-search-list">${allVariantRows().map(({p,v})=>`<option value="${variantLabel(p,v)}"></option>`).join('')}</datalist>`;
}
function itemsPickerRows(existingItems, withPrice){
  const items = existingItems && existingItems.length ? existingItems : [{productId:'',sasia:'',cmimi:''}];
  return items.map((it,idx)=>itemRowHtml(it, idx, withPrice)).join('');
}
function itemRowHtml(it, idx, withPrice){
  const ref = it.productId ? findVariant(it.productId) : null;
  const labelVal = ref ? variantLabel(ref.product, ref.variant) : '';
  const unitVal = ref ? ref.product.njesia : '';
  const sasiaField = withPrice
    ? `<div><label>Sasia <span data-f="unit-label" class="unit-badge">${unitVal}</span></label><input type="number" step="0.01" data-f="sasia" value="${it.sasia||''}"><small data-f="stock-info" class="stock-info"></small></div>`
    : `<div><label>Sasia</label><input type="number" step="0.01" data-f="sasia" value="${it.sasia||''}"><small data-f="stock-info" class="stock-info"></small></div>
       <div><label>Njësia</label><select data-f="njesia">${njesiaOptionsHtml(it.njesia||unitVal)}</select></div>`;
  const rreshtiTotali = (parseFloat(it.sasia)||0) * (parseFloat(it.cmimi)||0);
  return `<div class="${withPrice?'item-row':'item-row-2'}" data-item-row="${idx}">
    <div>
      <label>Produkti (kërko)</label>
      <input list="product-search-list" data-f="search" placeholder="Kërko kodin ose emrin..." value="${labelVal}" autocomplete="off">
      <input type="hidden" data-f="productId" value="${it.productId||''}">
    </div>
    ${sasiaField}
    ${withPrice?`<div><label>Çmimi</label><input type="number" step="0.01" data-f="cmimi" value="${it.cmimi||''}"></div>`:''}
    ${withPrice?`<div><label>Vlera e rreshtit</label><div class="row-total mono" data-f="row-total">${fmt(rreshtiTotali)}</div></div>`:''}
    <button type="button" class="icon-btn" data-remove-item>${ic('trash','thumb-icon')}</button>
  </div>`;
}
/* Sums sasia for a given productId across all rows in the container (used to catch the
   same product added on more than one row, so stock checks/aggregate correctly). */
function sumSasiaForProduct(cont, productId, excludeRow){
  let sum = 0;
  cont.querySelectorAll('[data-item-row]').forEach(row=>{
    if(row===excludeRow) return;
    const pid = row.querySelector('[data-f="productId"]')?.value;
    if(pid!==productId) return;
    sum += parseFloat(row.querySelector('[data-f="sasia"]')?.value)||0;
  });
  return sum;
}
/* Aggregates an already-read items[] list by productId → total sasia, so validations
   see the true combined quantity even when a product spans multiple rows. */
function aggregateByProduct(items){
  const map = {};
  items.forEach(it=>{ map[it.productId] = (map[it.productId]||0) + it.sasia; });
  return map;
}
function wireItemsPicker(containerId, withPrice, priceKind, stockCheckSys, tvshCheckboxId){
  const cont = document.getElementById(containerId);
  function updateRowTotal(row){
    if(!withPrice) return;
    const sasiaEl = row.querySelector('[data-f="sasia"]');
    const cmimiEl = row.querySelector('[data-f="cmimi"]');
    const totEl = row.querySelector('[data-f="row-total"]');
    if(!totEl) return;
    const sasia = parseFloat(sasiaEl?.value)||0;
    const cmimi = parseFloat(cmimiEl?.value)||0;
    totEl.textContent = fmt(sasia*cmimi);
  }
  function updateGrandTotal(){
    if(!withPrice) return;
    const wrapEl = document.getElementById(containerId+'-grand-total-wrap');
    if(!wrapEl) return;
    let total = 0;
    cont.querySelectorAll('[data-item-row]').forEach(row=>{
      const sasia = parseFloat(row.querySelector('[data-f="sasia"]')?.value)||0;
      const cmimi = parseFloat(row.querySelector('[data-f="cmimi"]')?.value)||0;
      total += sasia*cmimi;
    });
    const ck = tvshCheckboxId ? document.getElementById(tvshCheckboxId) : null;
    const tvshOn = !!(ck && ck.checked);
    const perq = state.config.tvsh||0;
    if(tvshOn && perq>0){
      const netto = total/(1+perq/100);
      const tvshVal = total-netto;
      wrapEl.innerHTML = `
        <div class="items-grand-total" style="border-top:none;padding-bottom:2px;font-size:13px;font-weight:600;color:var(--ink-soft);">Nëntotali (pa TVSH): <span class="gt-val mono" style="font-size:13px;color:var(--ink-soft);">${fmt(netto)}</span></div>
        <div class="items-grand-total" style="border-top:none;padding-bottom:2px;font-size:13px;font-weight:600;color:var(--ink-soft);">TVSH (${perq}%): <span class="gt-val mono" style="font-size:13px;color:var(--ink-soft);">${fmt(tvshVal)}</span></div>
        <div class="items-grand-total">Totali (me TVSH): <span class="gt-val mono">${fmt(total)}</span></div>
      `;
    } else {
      wrapEl.innerHTML = `<div class="items-grand-total">Totali: <span class="gt-val mono">${fmt(total)}</span></div>`;
    }
  }
  function attachTotals(row){
    if(!withPrice) return;
    const sasiaEl = row.querySelector('[data-f="sasia"]');
    const cmimiEl = row.querySelector('[data-f="cmimi"]');
    const recalc = ()=>{ updateRowTotal(row); updateGrandTotal(); };
    if(sasiaEl) sasiaEl.addEventListener('input', recalc);
    if(cmimiEl) cmimiEl.addEventListener('input', recalc);
    recalc();
  }
  function attachUnitAdd(row){
    const sel = row.querySelector('[data-f="njesia"]');
    if(!sel) return;
    let prev = sel.value;
    sel.onchange = async ()=>{
      if(sel.value !== '__add_new__') { prev = sel.value; return; }
      const val = (prompt('Emri i njësisë së re (p.sh. kuti, litër):')||'').trim();
      if(!val){ sel.innerHTML = njesiaOptionsHtml(prev); sel.value = prev; return; }
      if(!allUnits().includes(val)){
        state.config.njesiteCustom = state.config.njesiteCustom||[];
        state.config.njesiteCustom.push(val);
        await saveState();
      }
      sel.innerHTML = njesiaOptionsHtml(val);
      sel.value = val;
      prev = val;
    };
  }
  function updateStockInfo(row){
    if(!stockCheckSys) return;
    const hidden = row.querySelector('[data-f="productId"]');
    const stockEl = row.querySelector('[data-f="stock-info"]');
    const sasiaEl = row.querySelector('[data-f="sasia"]');
    if(!hidden || !stockEl) return;
    if(!hidden.value){ stockEl.textContent=''; stockEl.className='stock-info'; if(sasiaEl) sasiaEl.classList.remove('input-danger'); return; }
    const ref = findVariant(hidden.value);
    const totalStock = stockOf(stockCheckSys, hidden.value);
    const usedElsewhere = sumSasiaForProduct(cont, hidden.value, row);
    const availHere = totalStock - usedElsewhere;
    const sasia = parseFloat(sasiaEl?.value)||0;
    const over = sasia > availHere;
    const sysLbl = sysLabel(stockCheckSys).toLowerCase();
    let msg = `Në stok (${sysLbl}): ${totalStock} ${ref?ref.product.njesia:''}`;
    if(usedElsewhere>0) msg += ` (${usedElsewhere} tashmë të përdorura në rreshta të tjerë më lart)`;
    if(over) msg += ' — kalon stokun!';
    stockEl.textContent = msg;
    stockEl.className = 'stock-info' + (over || totalStock<=0 ? ' stock-bad':'');
    if(sasiaEl) sasiaEl.classList.toggle('input-danger', over);
  }
  function refreshAllStockInfo(){
    if(!stockCheckSys) return;
    cont.querySelectorAll('[data-item-row]').forEach(updateStockInfo);
  }
  function attachSearch(row){
    const inp = row.querySelector('[data-f="search"]');
    const hidden = row.querySelector('[data-f="productId"]');
    const sasiaEl = row.querySelector('[data-f="sasia"]');
    if(!inp || !hidden) return;
    inp.addEventListener('input', ()=>{
      const match = allVariantRows().find(({p,v})=>variantLabel(p,v)===inp.value);
      const unitEl = row.querySelector('[data-f="unit-label"]');
      const unitSel = row.querySelector('[data-f="njesia"]');
      if(match){
        hidden.value = match.v.id;
        if(unitEl) unitEl.textContent = match.p.njesia;
        if(unitSel) unitSel.value = match.p.njesia;
        if(withPrice && priceKind){
          const priceEl = row.querySelector('[data-f="cmimi"]');
          if(priceEl) priceEl.value = priceKind==='shitje'?match.v.cmimiShitje:match.v.cmimiBlerje;
        }
      } else {
        hidden.value = '';
        if(unitEl) unitEl.textContent = '';
      }
      refreshAllStockInfo();
      updateRowTotal(row); updateGrandTotal();
    });
    if(sasiaEl) sasiaEl.addEventListener('input', refreshAllStockInfo);
    updateStockInfo(row);
  }
  function wireRemove(){
    cont.querySelectorAll('[data-remove-item]').forEach(btn=>{
      btn.onclick = ()=>{
        if(cont.querySelectorAll('[data-item-row]').length<=1){
          btn.closest('[data-item-row]').querySelectorAll('input').forEach(i=>i.value='');
          updateRowTotal(btn.closest('[data-item-row]')); updateGrandTotal();
          refreshAllStockInfo();
          return;
        }
        btn.closest('[data-item-row]').remove();
        updateGrandTotal();
        refreshAllStockInfo();
      };
    });
  }
  function addRow(){
    const idx = cont.querySelectorAll('[data-item-row]').length;
    const div = document.createElement('div');
    div.innerHTML = itemRowHtml({}, idx, withPrice);
    cont.insertBefore(div.firstElementChild, document.getElementById(containerId+'-addbtn'));
    wireRemove();
    attachSearch(cont.querySelectorAll('[data-item-row]')[idx]);
    attachUnitAdd(cont.querySelectorAll('[data-item-row]')[idx]);
    attachTotals(cont.querySelectorAll('[data-item-row]')[idx]);
    updateGrandTotal();
  }
  if(tvshCheckboxId){
    const ck = document.getElementById(tvshCheckboxId);
    if(ck) ck.addEventListener('change', updateGrandTotal);
  }
  wireRemove();
  cont.querySelectorAll('[data-item-row]').forEach(row=>{ attachSearch(row); attachUnitAdd(row); attachTotals(row); });
  updateGrandTotal();
  refreshAllStockInfo();
  document.getElementById(containerId+'-addbtn').onclick = addRow;
}
function readItems(containerId){
  const rows = document.querySelectorAll(`#${containerId} [data-item-row]`);
  const items = [];
  rows.forEach(r=>{
    const pid = r.querySelector('[data-f="productId"]').value;
    const sasia = parseFloat(r.querySelector('[data-f="sasia"]').value)||0;
    const cmimiEl = r.querySelector('[data-f="cmimi"]');
    const cmimi = cmimiEl ? (parseFloat(cmimiEl.value)||0) : undefined;
    const njesiaEl = r.querySelector('[data-f="njesia"]');
    if(!pid || sasia<=0) return;
    if(cmimiEl){ items.push({productId:pid,sasia,cmimi}); }
    else if(njesiaEl){ items.push({productId:pid,sasia,njesia:njesiaEl.value}); }
    else { items.push({productId:pid,sasia}); }
  });
  return items;
}

/* =====================================================================
   TRANSFERIME — me autorizim (dërgohet -> pret pranim -> hyn në stok)
   ===================================================================== */
function transferForm(sourceMag, destOptions, titleText){
  const anyStock = state.products.some(p=>(p.variants||[]).some(v=>stockOf(sourceMag,v.id)>0));
  if(!anyStock){
    return `<div class="modal-head"><h3>${titleText}</h3><button class="close-x" id="m-close">✕</button></div>
    <div class="empty">Ky sistem nuk ka stok për t'u transferuar.</div>`;
  }
  return `
    <div class="modal-head"><h3>${titleText}</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="transfer-form">
      <div class="field-row">
        <div class="field"><label>Data</label><input type="date" name="data" value="${today()}" required></div>
        <div class="field"><label>Destinacioni</label>
          <select name="drejtBy">${destOptions.map(d=>`<option value="${d.val}">${d.label}</option>`).join('')}</select>
        </div>
      </div>
      <hr class="stitch">
      <label>Artikujt për transferim</label>
      <div id="transfer-items">
        ${itemsPickerRows(null, false)}
        <button type="button" class="btn btn-ghost btn-sm" id="transfer-items-addbtn">${ic('plus','thumb-icon')}Shto Artikull</button>
      </div>
      ${productSearchDatalist()}
      <p class="hint">Sasia s'mund të kalojë gjendjen aktuale. Malli zbritet menjëherë nga stoku yt dhe pret <b>pranim</b> nga ana tjetër përpara se të hyjë në stokun e saj.</p>
      <hr class="stitch">
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-terra">Dërgo Transferimin</button>
      </div>
    </form>
  `;
}
function transferAcceptConfirmHtml(t){
  const destLbl = sysLabel(t.drejtBy), srcLbl = sysLabel(t.nga);
  const rowsHtml = t.items.map(it=>{
    const ref = findVariant(it.productId);
    const label = ref ? variantLabel(ref.product, ref.variant) : '—';
    const njesia = ref ? ref.product.njesia : (it.njesia||'');
    const before = stockOf(t.drejtBy, it.productId);
    const after = Math.round((before + it.sasia)*1000)/1000;
    return `<tr>
      <td>${label}</td>
      <td class="num">${before} ${njesia}</td>
      <td class="num" style="color:var(--success);font-weight:700;">+${it.sasia} ${njesia}</td>
      <td class="num" style="font-weight:800;color:var(--indigo);">${after} ${njesia}</td>
    </tr>`;
  }).join('');
  return `
    <div class="modal-head"><h3>${ic('check','thumb-icon')}Konfirmo Pranimin — ${t.nr}</h3><button class="close-x" id="m-close">✕</button></div>
    <p class="hint">Mallra nga <b>${srcLbl}</b> do të hyjnë te <b>${destLbl}</b>. Kontrollo llogarinë e re të gjendjes për secilin artikull para se të konfirmosh:</p>
    <table><thead><tr><th>Produkti / Varioni</th><th class="num">Gjendja para (${destLbl})</th><th class="num">Transferuar</th><th class="num">Gjendja pas</th></tr></thead>
    <tbody>${rowsHtml}</tbody></table>
    <hr class="stitch">
    <div style="display:flex;justify-content:flex-end;gap:8px;">
      <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
      <button type="button" class="btn btn-primary" id="btn-confirm-accept">${ic('check','thumb-icon')}Po, pranoje dhe shtoje në stok</button>
    </div>
  `;
}
function statusTag(t){
  if(t.status==='ne_pritje') return `<span class="tag tag-warn">Në pritje</span>`;
  if(t.status==='pranuar') return `<span class="tag tag-ok">U pranua</span>`;
  if(t.status==='anuluar') return `<span class="tag" style="background:#ece7db;color:#6b6459;">Anuluar</span>`;
  return `<span class="tag tag-bad">U refuzua</span>`;
}
function viewTransfer(sys){
  const other = otherSystem(sys);
  const incoming = state.transfers.filter(t=>t.drejtBy===sys && t.status==='ne_pritje').sort((a,b)=>b.data.localeCompare(a.data));
  const outgoingPending = state.transfers.filter(t=>t.nga===sys && t.status==='ne_pritje').sort((a,b)=>b.data.localeCompare(a.data));
  const history = state.transfers.filter(t=>(t.nga===sys||t.drejtBy===sys) && t.status!=='ne_pritje').sort((a,b)=>b.data.localeCompare(a.data)||b.nr.localeCompare(a.nr));
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Lëvizje Malli</div><h1 class="view-title">Transferime — ${sysLabel(sys)}</h1><p class="hint">Malli i dërguar drejt ${sysLabel(other)} pret pranim përpara se të hyjë në stokun e destinacionit.</p></div>
      <button class="btn btn-terra" id="btn-new-transfer">${ic('arrow','thumb-icon')}Transferim i Ri → ${sysLabel(other)}</button>
    </div>
    ${incoming.length? `<div class="card" style="border-color:var(--gold);">
      <p class="card-title">📥 Mall në Pritje për Pranim (${incoming.length})</p>
      ${incoming.map(t=>`
        <div style="border:1px dashed var(--line);border-radius:8px;padding:10px 12px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;align-items:center;">
            <div><b class="mono">${t.nr}</b> · ${t.data} · nga ${sysLabel(t.nga)}</div>
            <div style="display:flex;gap:8px;">
              <button class="btn btn-primary btn-sm" data-accept-transfer="${t.id}">${ic('check','thumb-icon')}U pranua malli</button>
              <button class="btn btn-danger btn-sm" data-reject-transfer="${t.id}">Refuzo</button>
            </div>
          </div>
          <ul style="margin:8px 0 0;padding-left:18px;font-size:12.5px;color:var(--ink-soft);">
            ${t.items.map(it=>{const ref=findVariant(it.productId); return `<li>${ref?variantLabel(ref.product,ref.variant):'—'}: ${it.sasia} ${it.njesia||(ref?ref.product.njesia:'')}</li>`;}).join('')}
          </ul>
        </div>`).join('')}
    </div>` : ''}
    ${outgoingPending.length? `<div class="card">
      <p class="card-title">📤 Dërguar — Në Pritje të Pranimit nga ${sysLabel(other)} (${outgoingPending.length})</p>
      <table><thead><tr><th>Nr</th><th>Data</th><th class="num">Artikuj</th><th></th><th></th></tr></thead><tbody>
      ${outgoingPending.map(t=>`<tr><td class="mono">${t.nr}</td><td>${t.data}</td><td class="num">${t.items.length}</td><td>${statusTag(t)}</td>
        <td><button class="btn btn-danger btn-sm" data-cancel-transfer="${t.id}">${ic('ban','thumb-icon')}Anulo Transferimin</button></td></tr>`).join('')}
      </tbody></table>
    </div>` : ''}
    <div class="card">
      <p class="card-title">Historik Transferimesh</p>
      ${history.length? `<table><thead><tr><th>Nr</th><th>Data</th><th>Drejtimi</th><th class="num">Artikuj</th><th></th></tr></thead><tbody>
      ${history.map(t=>`<tr><td class="mono">${t.nr}</td><td>${t.data}</td><td>${sysLabel(t.nga)} → ${sysLabel(t.drejtBy)}</td><td class="num">${t.items.length}</td><td>${statusTag(t)}</td></tr>`).join('')}
      </tbody></table>` : `<div class="empty">Ende pa transferime të përfunduara.</div>`}
    </div>
  `;
}
function wireTransfer(sys){
  const other = otherSystem(sys);
  document.getElementById('btn-new-transfer').onclick = ()=>{
    openModal(transferForm(sys, [{val:other,label:sysLabel(other)}], `Transferim — ${sysLabel(sys)} → ${sysLabel(other)}`), true);
    document.getElementById('m-close').onclick = closeModal;
    document.getElementById('m-cancel').onclick = closeModal;
    if(!state.products.some(p=>(p.variants||[]).some(v=>stockOf(sys,v.id)>0))) return;
    wireItemsPicker('transfer-items', false, null, sys);
    document.getElementById('transfer-form').onsubmit = async (e)=>{
      e.preventDefault();
      const f = new FormData(e.target);
      const items = readItems('transfer-items');
      if(items.length===0){ alert('Shto të paktën një artikull.'); return; }
      const needed = aggregateByProduct(items);
      for(const pid in needed){
        if(needed[pid] > stockOf(sys, pid)){
          const ref = findVariant(pid);
          alert(`Sasia totale për "${ref?variantLabel(ref.product,ref.variant):'produktin'}" (${needed[pid]}) kalon gjendjen aktuale (${stockOf(sys,pid)}).`);
          return;
        }
      }
      const rec = {id:uid(), nr:nextNr('transferim','TR-'), data:f.get('data'), items, nga:sys, drejtBy:other, status:'ne_pritje'};
      state.transfers.push(rec);
      items.forEach(it=>addStock(sys, it.productId, -it.sasia));
      closeModal();
      await refresh();
    };
  };
  document.querySelectorAll('[data-accept-transfer]').forEach(b=>{
    b.onclick = ()=>{
      const t = state.transfers.find(x=>x.id===b.dataset.acceptTransfer);
      if(!t) return;
      openModal(transferAcceptConfirmHtml(t));
      document.getElementById('m-close').onclick = closeModal;
      document.getElementById('m-cancel').onclick = closeModal;
      document.getElementById('btn-confirm-accept').onclick = async ()=>{
        t.items.forEach(it=>addStock(t.drejtBy, it.productId, it.sasia));
        t.status = 'pranuar';
        t.dataPranimit = today();
        closeModal();
        await refresh();
      };
    };
  });
  document.querySelectorAll('[data-reject-transfer]').forEach(b=>{
    b.onclick = async ()=>{
      if(!confirm('Refuzo këtë transferim? Malli do t\'i kthehet dërguesit.')) return;
      const t = state.transfers.find(x=>x.id===b.dataset.rejectTransfer);
      if(!t) return;
      t.items.forEach(it=>addStock(t.nga, it.productId, it.sasia));
      t.status = 'refuzuar';
      t.dataPranimit = today();
      await refresh();
    };
  });
  document.querySelectorAll('[data-cancel-transfer]').forEach(b=>{
    b.onclick = async ()=>{
      if(!confirm('Anulo këtë transferim? Malli do të kthehet automatikisht te stoku yt dhe transferimi nuk do të presë më pranim.')) return;
      const t = state.transfers.find(x=>x.id===b.dataset.cancelTransfer);
      if(!t) return;
      t.items.forEach(it=>addStock(t.nga, it.productId, it.sasia));
      t.status = 'anuluar';
      t.dataAnulimit = today();
      await refresh();
    };
  });
}

/* =====================================================================
   BLERJE (Hyrje Malli) — të veçanta për secilin sistem
   ===================================================================== */
function purchaseForm(mag, existing){
  const isEdit = !!existing;
  const title = (mag==='madhe' ? 'Hyrje Malli — Magazina e Madhe' : 'Blerje — Dyqan') + (isEdit?' (Modifiko)':'');
  if(state.products.length===0){
    return `<div class="modal-head"><h3>${title}</h3><button class="close-x" id="m-close">✕</button></div>
    <div class="empty">Shto së pari produkte te "${sysLabel(mag)} → Produkte".</div>`;
  }
  const furOpts = state.suppliers.map(s=>`<option value="${s.id}" ${existing&&existing.furnitorId===s.id?'selected':''}>${s.emri}</option>`).join('');
  return `
    <div class="modal-head"><h3>${title}</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="hyrje-form">
      <div class="field-row">
        <div class="field"><label>Data</label><input type="date" name="data" value="${existing?existing.data:today()}" required></div>
        <div class="field"><label>Furnitori</label>
          <select name="furnitorId"><option value="">Furnitor rasti / pa emër</option>${furOpts}</select>
        </div>
      </div>
      <div class="field"><label>Ose shto furnitor të ri</label><input name="furnitorRiEmer" placeholder="Emri i furnitorit (opsionale)"></div>
      <hr class="stitch">
      <label>Artikujt</label>
      <div id="hyrje-items">
        ${itemsPickerRows(existing?existing.items:null, true)}
        <button type="button" class="btn btn-ghost btn-sm" id="hyrje-items-addbtn">${ic('plus','thumb-icon')}Shto Artikull</button>
      </div>
      <div id="hyrje-items-grand-total-wrap"><div class="items-grand-total">Totali: <span class="gt-val mono">0,00</span></div></div>
      <div class="field" style="display:flex;align-items:center;gap:8px;margin:2px 0 0;">
        <input type="checkbox" id="hyrje-tvsh" name="tvshApplied" ${existing&&existing.tvshAplikuar?'checked':''} style="width:16px;height:16px;">
        <label style="margin:0;text-transform:none;font-weight:600;color:var(--ink);font-size:13px;" for="hyrje-tvsh">Apliko TVSH (${state.config.tvsh||0}%) mbi këtë faturë</label>
      </div>
      <p class="hint">Çmimi që shkruan te artikujt konsiderohet çmimi final (me TVSH nëse aplikohet) — nuk shtohet TVSH sipër tij, thjesht ndahet brenda tij.</p>
      ${productSearchDatalist()}
      <hr class="stitch">
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-primary">${isEdit?'Ruaj Ndryshimet':'Regjistro'}</button>
      </div>
    </form>
  `;
}
function viewBlerje(mag){
  const rows = state.purchases.filter(p=>p.magazina===mag).sort((a,b)=>b.data.localeCompare(a.data));
  const title = mag==='madhe' ? 'Blerje — Magazina e Madhe (Hyrje Malli)' : 'Blerje — Dyqan';
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Furnizim</div><h1 class="view-title">${title}</h1></div>
      <button class="btn btn-terra" id="btn-new-blerje">${ic('plus','thumb-icon')}Blerje e Re</button>
    </div>
    <div class="card">
      <table><thead><tr><th>Nr</th><th>Data</th><th>Furnitori</th><th class="num">Artikuj</th><th class="num">Totali</th><th></th></tr></thead><tbody>
      ${rows.length===0?`<tr><td colspan="6"><div class="empty">Ende pa blerje.</div></td></tr>`:
        rows.map(r=>`<tr><td class="mono">${r.nr}</td><td>${r.data}</td><td>${r.furnitorId?(state.suppliers.find(s=>s.id===r.furnitorId)?.emri||'—'):'Furnitor rasti'}</td><td class="num">${r.items.length}</td><td class="num">${fmt(r.totali)}${r.tvshAplikuar?` <span class="tag tag-ok" style="margin-left:4px;">+TVSH</span>`:''}</td>
          <td style="white-space:nowrap;">
            <button class="btn btn-ghost btn-sm" data-print-purchase="${r.id}" data-fmt="pos80">POS80</button>
            <button class="btn btn-ghost btn-sm" data-print-purchase="${r.id}" data-fmt="a4">A4</button>
            <button class="btn btn-ghost btn-sm" data-pdf-purchase="${r.id}">${ic('pdf','thumb-icon')}PDF</button>
            <button class="icon-btn" data-edit-purchase="${r.id}" style="background:#eef1f8;color:var(--indigo)">${ic('edit','thumb-icon')}</button>
            <button class="icon-btn" data-del-purchase="${r.id}">${ic('trash','thumb-icon')}</button>
          </td></tr>`).join('')}
      </tbody></table>
    </div>
  `;
}
function openPurchaseModal(mag, existing){
  openModal(purchaseForm(mag, existing), true);
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  if(state.products.length===0) return;
  wireItemsPicker('hyrje-items', true, 'blerje', null, 'hyrje-tvsh');
  document.getElementById('hyrje-form').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const items = readItems('hyrje-items');
    if(items.length===0){ alert('Shto të paktën një artikull.'); return; }
    let furnitorId = f.get('furnitorId') || null;
    const riEmer = f.get('furnitorRiEmer').trim();
    if(!furnitorId && riEmer){
      furnitorId = uid();
      state.suppliers.push({id:furnitorId, emri:riEmer, telefon:''});
    }
    const totali = Math.round(items.reduce((a,it)=>a+it.sasia*it.cmimi,0)*100)/100;
    const tvshAplikuar = f.get('tvshApplied')==='on';
    const tvshPerqindja = tvshAplikuar ? (state.config.tvsh||0) : 0;
    const nettotali = (tvshAplikuar && tvshPerqindja>0) ? Math.round((totali/(1+tvshPerqindja/100))*100)/100 : totali;
    const tvshVlera = Math.round((totali-nettotali)*100)/100;
    if(existing){
      // Reverse the stock effect of the old items before applying the edited ones.
      existing.items.forEach(it=>addStock(mag, it.productId, -it.sasia));
      Object.assign(existing, {data:f.get('data'), furnitorId, items, nettotali, tvshAplikuar, tvshPerqindja, tvshVlera, totali});
      items.forEach(it=>addStock(mag, it.productId, it.sasia));
      closeModal();
      await refresh();
    } else {
      const rec = {id:uid(), nr:nextNr('blerje', mag==='madhe'?'HM-':'BL-'), data:f.get('data'), furnitorId, items, nettotali, tvshAplikuar, tvshPerqindja, tvshVlera, totali, magazina:mag};
      state.purchases.push(rec);
      items.forEach(it=>addStock(mag, it.productId, it.sasia));
      closeModal();
      await refresh();
      openPrintChoiceModal(`Blerja ${rec.nr} u regjistrua`, (fmt)=> printPurchase(rec, fmt));
    }
  };
}
function wireBlerje(mag){
  document.getElementById('btn-new-blerje').onclick = ()=> openPurchaseModal(mag, null);
  document.querySelectorAll('[data-print-purchase]').forEach(b=>{
    b.onclick = ()=> printPurchase(state.purchases.find(p=>p.id===b.dataset.printPurchase), b.dataset.fmt);
  });
  document.querySelectorAll('[data-pdf-purchase]').forEach(b=>{
    b.onclick = ()=> pdfPurchase(state.purchases.find(p=>p.id===b.dataset.pdfPurchase));
  });
  document.querySelectorAll('[data-edit-purchase]').forEach(b=>{
    b.onclick = ()=> openPurchaseModal(mag, state.purchases.find(p=>p.id===b.dataset.editPurchase));
  });
  document.querySelectorAll('[data-del-purchase]').forEach(b=>{
    b.onclick = async ()=>{
      const rec = state.purchases.find(p=>p.id===b.dataset.delPurchase);
      if(!rec) return;
      if(!confirm(`Fshi blerjen ${rec.nr}? Sasitë e hyra në stok do të hiqen. Nëse malli është përdorur/transferuar tashmë, stoku mund të bjerë nën zero.`)) return;
      rec.items.forEach(it=>addStock(mag, it.productId, -it.sasia));
      state.purchases = state.purchases.filter(p=>p.id!==rec.id);
      await refresh();
    };
  });
}

/* =====================================================================
   SHITJE (Dyqan)
   ===================================================================== */
function viewShitje(){
  const rows = [...state.sales].sort((a,b)=>b.data.localeCompare(a.data)||b.nr.localeCompare(a.nr));
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Pika e Shitjes</div><h1 class="view-title">Shitje</h1></div>
      <button class="btn btn-terra" id="btn-new-sale">${ic('plus','thumb-icon')}Shitje e Re</button>
    </div>
    <div class="card">
      <table><thead><tr><th>Nr</th><th>Data</th><th>Klienti</th><th>Pagesa</th><th class="num">Totali</th><th class="num">Mbetet</th><th style="min-width:210px;"></th></tr></thead><tbody>
      ${rows.length===0?`<tr><td colspan="7"><div class="empty">Ende pa shitje.</div></td></tr>`:
        rows.map(r=>`<tr>
          <td class="mono">${r.nr}</td><td>${r.data}</td><td>${r.klientId?(custById(r.klientId)?.emri||'—'):'Klient rasti'}</td>
          <td><span class="tag ${saleStatusTag(r).cls}">${saleStatusTag(r).label}</span></td>
          <td class="num">${fmt(r.totali)}${r.tvshAplikuar?` <span class="tag tag-ok" style="margin-left:4px;">+TVSH</span>`:''}</td><td class="num">${fmt(r.mbetetFillestar)}</td>
          <td style="white-space:nowrap;">
            <button class="btn btn-ghost btn-sm" data-print-sale="${r.id}" data-fmt="pos80">POS80</button>
            <button class="btn btn-ghost btn-sm" data-print-sale="${r.id}" data-fmt="a4">A4</button>
            <button class="btn btn-ghost btn-sm" data-pdf-sale="${r.id}">PDF</button>
            <button class="icon-btn" data-edit-sale="${r.id}" style="background:#eef1f8;color:var(--indigo)">${ic('edit','thumb-icon')}</button>
            <button class="icon-btn" data-del-sale="${r.id}">${ic('trash','thumb-icon')}</button>
          </td>
        </tr>`).join('')}
      </tbody></table>
    </div>
  `;
}
function saleForm(existing){
  const isEdit = !!existing;
  if(state.products.length===0){
    return `<div class="modal-head"><h3>Shitje e Re</h3><button class="close-x" id="m-close">✕</button></div><div class="empty">Shto produkte së pari.</div>`;
  }
  const klientEmriVal = existing && existing.klientId ? (custById(existing.klientId)?.emri||'') : '';
  const paguarTaniVal = existing && existing.menyraPageses==='pjesshem' ? (existing.totali - existing.mbetetFillestar) : 0;
  return `
    <div class="modal-head"><h3>${isEdit?'Modifiko Shitjen '+existing.nr:'Shitje e Re — Dyqan'}</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="sale-form">
      <div class="field-row">
        <div class="field"><label>Data</label><input type="date" name="data" value="${existing?existing.data:today()}" required></div>
        <div class="field"><label>Klienti</label>
          <input list="customer-suggest" name="klientEmri" value="${klientEmriVal}" placeholder="Shkruaj emrin (ose lëre bosh për klient rasti)..." autocomplete="off">
          <datalist id="customer-suggest">${state.customers.map(c=>`<option value="${c.emri}"></option>`).join('')}</datalist>
        </div>
      </div>
      <p class="hint">Emrat e klientëve ruhen automatikisht — sapo shkruan gërmën e parë do të dalin sugjerime.</p>
      <hr class="stitch">
      <label>Artikujt</label>
      <div id="sale-items">
        ${itemsPickerRows(existing?existing.items:null, true)}
        <button type="button" class="btn btn-ghost btn-sm" id="sale-items-addbtn">${ic('plus','thumb-icon')}Shto Artikull</button>
      </div>
      <div id="sale-items-grand-total-wrap"><div class="items-grand-total">Totali: <span class="gt-val mono">0,00</span></div></div>
      <div class="field" style="display:flex;align-items:center;gap:8px;margin:2px 0 0;">
        <input type="checkbox" id="sale-tvsh" name="tvshApplied" ${existing&&existing.tvshAplikuar?'checked':''} style="width:16px;height:16px;">
        <label style="margin:0;text-transform:none;font-weight:600;color:var(--ink);font-size:13px;" for="sale-tvsh">Apliko TVSH (${state.config.tvsh||0}%) mbi këtë faturë</label>
      </div>
      <p class="hint">Çmimi që shkruan te artikujt konsiderohet çmimi final (me TVSH nëse aplikohet) — nuk shtohet TVSH sipër tij, thjesht ndahet brenda tij.</p>
      ${productSearchDatalist()}
      <p class="hint">Kërko produktin me kod ose emër — çmimi mbushet automatikisht me çmimin e shitjes, mund të ndryshohet. Për metra, shkruaj thjesht formën dhjetore (p.sh. 1.50 = 1m e 50cm).</p>
      <hr class="stitch">
      <div class="field-row">
        <div class="field"><label>Mënyra e Pagesës</label>
          <select name="menyraPageses" id="sale-paymethod">
            <option value="cash" ${existing&&existing.menyraPageses==='cash'?'selected':''}>Cash (i paguar plotësisht)</option>
            <option value="kredi" ${existing&&existing.menyraPageses==='kredi'?'selected':''}>Debitor (borxh i plotë)</option>
            <option value="pjesshem" ${existing&&existing.menyraPageses==='pjesshem'?'selected':''}>Pjesërisht i paguar</option>
          </select>
        </div>
        <div class="field" id="sale-paguar-wrap" style="display:${existing&&existing.menyraPageses==='pjesshem'?'block':'none'};">
          <label>Shuma e Paguar Tani</label><input type="number" step="0.01" name="paguarTani" value="${paguarTaniVal}">
        </div>
      </div>
      ${isEdit?`<p class="hint">⚠ Ndryshimi i shitjes rregullon stokun dhe lëvizjen e arkës lidhur me të. Nëse pagesa është arkëtuar më vonë veç e veç (te Debitorë), kontrollo bilancin e klientit pas ruajtjes.</p>`:''}
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-terra">${isEdit?'Ruaj Ndryshimet':'Regjistro Shitjen'}</button>
      </div>
    </form>
  `;
}
function openSaleModal(existing){
  openModal(saleForm(existing), true);
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  if(state.products.length===0) return;
  wireItemsPicker('sale-items', true, 'shitje', 'dyqan', 'sale-tvsh');
  const pm = document.getElementById('sale-paymethod');
  const wrap = document.getElementById('sale-paguar-wrap');
  pm.onchange = ()=>{ wrap.style.display = pm.value==='pjesshem' ? 'block':'none'; };
  document.getElementById('sale-form').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const items = readItems('sale-items');
    if(items.length===0){ alert('Shto të paktën një artikull.'); return; }
    const needed = aggregateByProduct(items);
    for(const pid in needed){
      const alreadyReserved = existing ? (existing.items.filter(it=>it.productId===pid).reduce((a,it)=>a+it.sasia,0)) : 0;
      if(needed[pid] > stockOf('dyqan', pid) + alreadyReserved){
        const ref = findVariant(pid);
        alert(`Sasia totale për "${ref?variantLabel(ref.product,ref.variant):'produktin'}" (${needed[pid]}) kalon gjendjen në dyqan (${stockOf('dyqan',pid)+alreadyReserved}).`);
        return;
      }
    }
    const clientName = (f.get('klientEmri')||'').trim();
    let klientId = null;
    if(clientName){
      const existingCust = findCustomerByName(clientName);
      if(existingCust) klientId = existingCust.id;
      else { klientId = uid(); state.customers.push({id:klientId, emri:clientName, telefon:'', adresa:''}); }
    }
    const totali = Math.round(items.reduce((a,it)=>a+it.sasia*it.cmimi,0)*100)/100;
    const tvshAplikuar = f.get('tvshApplied')==='on';
    const tvshPerqindja = tvshAplikuar ? (state.config.tvsh||0) : 0;
    const nettotali = (tvshAplikuar && tvshPerqindja>0) ? Math.round((totali/(1+tvshPerqindja/100))*100)/100 : totali;
    const tvshVlera = Math.round((totali-nettotali)*100)/100;
    const menyra = f.get('menyraPageses');
    let mbetetFillestar = 0;
    if(menyra==='cash') mbetetFillestar = 0;
    else if(menyra==='kredi') mbetetFillestar = totali;
    else { const paguarTani = parseFloat(f.get('paguarTani'))||0; mbetetFillestar = Math.max(0, totali-paguarTani); }
    if(menyra==='pjesshem' && !klientId){
      alert('Për shitje pjesërisht të paguar, duhet shkruar emri i klientit.');
      return;
    }
    if(existing){
      // Rikthe stokun e artikujve të vjetër, pastaj apliko ata të rinj.
      existing.items.forEach(it=>addStock('dyqan', it.productId, it.sasia));
      items.forEach(it=>addStock('dyqan', it.productId, -it.sasia));
      // Hiq lëvizjen e vjetër të arkës lidhur me këtë shitje (nëse ekziston) dhe shto të renë.
      state.cashMovements = state.cashMovements.filter(m=>m.saleId!==existing.id);
      Object.assign(existing, {data:f.get('data'), klientId, items, nettotali, tvshAplikuar, tvshPerqindja, tvshVlera, totali, menyraPageses:menyra, mbetetFillestar});
      if(menyra==='pjesshem'){
        const paguarTani = totali - mbetetFillestar;
        if(paguarTani>0) state.cashMovements.push({id:uid(), data:existing.data, lloji:'hyrje', shuma:paguarTani, pershkrim:`Pagesë e pjesshme shitje ${existing.nr}`, saleId:existing.id});
      } else if(menyra==='cash'){
        state.cashMovements.push({id:uid(), data:existing.data, lloji:'hyrje', shuma:totali, pershkrim:`Shitje cash ${existing.nr}`, saleId:existing.id});
      }
      closeModal();
      await refresh();
    } else {
      const rec = {id:uid(), nr:nextNr('shitje','SH-'), data:f.get('data'), klientId, items, nettotali, tvshAplikuar, tvshPerqindja, tvshVlera, totali, menyraPageses:menyra, mbetetFillestar};
      state.sales.push(rec);
      items.forEach(it=>addStock('dyqan', it.productId, -it.sasia));
      if(menyra==='pjesshem'){
        const paguarTani = totali - mbetetFillestar;
        if(paguarTani>0) state.cashMovements.push({id:uid(), data:rec.data, lloji:'hyrje', shuma:paguarTani, pershkrim:`Pagesë e pjesshme shitje ${rec.nr}`, saleId:rec.id});
      } else if(menyra==='cash'){
        state.cashMovements.push({id:uid(), data:rec.data, lloji:'hyrje', shuma:totali, pershkrim:`Shitje cash ${rec.nr}`, saleId:rec.id});
      }
      closeModal();
      await refresh();
      openPrintChoiceModal(`Shitja ${rec.nr} u regjistrua`, (fmt)=> printSale(rec, fmt));
    }
  };
}
function wireShitje(){
  document.getElementById('btn-new-sale').onclick = ()=> openSaleModal(null);
  document.querySelectorAll('[data-print-sale]').forEach(b=>{
    b.onclick = ()=> printSale(state.sales.find(s=>s.id===b.dataset.printSale), b.dataset.fmt);
  });
  document.querySelectorAll('[data-pdf-sale]').forEach(b=>{
    b.onclick = ()=> pdfSale(state.sales.find(s=>s.id===b.dataset.pdfSale));
  });
  document.querySelectorAll('[data-edit-sale]').forEach(b=>{
    b.onclick = ()=> openSaleModal(state.sales.find(s=>s.id===b.dataset.editSale));
  });
  document.querySelectorAll('[data-del-sale]').forEach(b=>{
    b.onclick = async ()=>{
      const rec = state.sales.find(s=>s.id===b.dataset.delSale);
      if(!rec) return;
      if(!confirm(`Fshi shitjen ${rec.nr}? Sasitë do t'i kthehen stokut të dyqanit dhe lëvizjet e arkës lidhur me këtë shitje do të hiqen.`)) return;
      rec.items.forEach(it=>addStock('dyqan', it.productId, it.sasia));
      state.cashMovements = state.cashMovements.filter(m=>m.saleId!==rec.id);
      state.sales = state.sales.filter(s=>s.id!==rec.id);
      await refresh();
    };
  });
}

/* =====================================================================
   KËRKO FATURA — kërkim sipas emrit të furnitorit/klientit
   (Magazina: vetëm blerjet e saj. Dyqani: blerjet + shitjet.)
   ===================================================================== */
function viewKerkoFatura(sys){
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Kërkim</div><h1 class="view-title">Kërko Faturat</h1>
      <p class="hint">Shkruaj emrin e ${sys==='madhe'?'furnitorit':'klientit ose furnitorit'} për të parë të gjitha faturat e tij${sys==='dyqan'?' — blerje dhe shitje —':' (blerje)'} me datë dhe vlerë.</p></div>
    </div>
    <div class="card">
      <div class="toolbar"><input id="kerko-input" placeholder="p.sh. Filan Fisteku..." style="min-width:280px;" autocomplete="off" autofocus></div>
      <div id="kerko-results"><div class="empty">Shkruaj një emër për të kërkuar.</div></div>
    </div>
  `;
}
function wireKerkoFatura(sys){
  const inp = document.getElementById('kerko-input');
  const results = document.getElementById('kerko-results');
  function doSearch(){
    const q = (inp.value||'').trim().toLowerCase();
    if(!q){ results.innerHTML = '<div class="empty">Shkruaj një emër për të kërkuar.</div>'; return; }
    let rows = [];
    state.purchases.filter(p=>p.magazina===sys).forEach(p=>{
      const emri = p.furnitorId ? (state.suppliers.find(s=>s.id===p.furnitorId)?.emri||'') : '';
      if(emri.toLowerCase().includes(q)){
        rows.push({tip:'Blerje', nr:p.nr, data:p.data, emri, vlera:p.totali, tvsh:p.tvshAplikuar, id:p.id});
      }
    });
    if(sys==='dyqan'){
      state.sales.forEach(s=>{
        const emri = s.klientId ? (custById(s.klientId)?.emri||'') : '';
        if(emri.toLowerCase().includes(q)){
          rows.push({tip:'Shitje', nr:s.nr, data:s.data, emri, vlera:s.totali, tvsh:s.tvshAplikuar, id:s.id});
        }
      });
    }
    rows.sort((a,b)=>b.data.localeCompare(a.data)||b.nr.localeCompare(a.nr));
    if(rows.length===0){ results.innerHTML = `<div class="empty">Asnjë faturë e gjetur për "${inp.value}".</div>`; return; }
    const totVlera = rows.reduce((a,r)=>a+r.vlera,0);
    results.innerHTML = `
      <table><thead><tr><th>Lloji</th><th>Nr</th><th>Data</th><th>Emri</th><th class="num">Vlera</th></tr></thead><tbody>
      ${rows.map(r=>`<tr>
        <td><span class="tag ${r.tip==='Blerje'?'tag-madhe':'tag-ok'}">${r.tip}</span></td>
        <td class="mono">${r.nr}</td><td>${r.data}</td><td>${r.emri}</td>
        <td class="num">${fmt(r.vlera)}${r.tvsh?` <span class="tag tag-ok" style="margin-left:4px;">+TVSH</span>`:''}</td>
      </tr>`).join('')}
      </tbody></table>
      <div class="items-grand-total">Totali i gjetur (${rows.length} fatura): <span class="gt-val mono">${fmt(totVlera)}</span></div>
    `;
  }
  inp.addEventListener('input', doSearch);
  doSearch();
}

/* =====================================================================
   DEBITORË (Dyqan)
   ===================================================================== */
function viewDebitore(){
  const list = state.customers.map(c=>({c, bal:custBalance(c.id)})).filter(x=>x.c);
  const withDebt = list.filter(x=>x.bal>0.001).sort((a,b)=>b.bal-a.bal);
  const anonSales = anonymousDebtSales().sort((a,b)=>b.data.localeCompare(a.data));
  const totDebi = withDebt.reduce((a,x)=>a+x.bal,0) + anonymousDebtTotal();
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Arkëtime</div><h1 class="view-title">Debitorë</h1></div>
      <button class="btn btn-ghost" id="btn-new-customer">${ic('plus','thumb-icon')}Klient i Ri</button>
    </div>
    <div class="grid-stats">
      <div class="stat-card s4"><p class="stat-label">Totali për Arkëtim</p><p class="stat-val">${fmt(totDebi)}</p><p class="stat-sub">${state.config.monedha}</p></div>
      <div class="stat-card"><p class="stat-label">Klientë me Borxh</p><p class="stat-val">${withDebt.length + anonSales.length}</p><p class="stat-sub">nga ${state.customers.length} total</p></div>
    </div>
    <div class="card">
      <p class="card-title">Lista e Debitorëve</p>
      <table><thead><tr><th>Klienti</th><th>Telefon</th><th class="num">Borxhi</th><th></th></tr></thead><tbody>
      ${withDebt.length===0?`<tr><td colspan="4"><div class="empty">Asnjë debitor aktualisht.</div></td></tr>`:
        withDebt.map(x=>`<tr><td>${x.c.emri}</td><td>${x.c.telefon||'—'}</td><td class="num">${fmt(x.bal)}</td>
          <td><button class="btn btn-ghost btn-sm" data-pay="${x.c.id}">Regjistro Pagesë</button></td></tr>`).join('')}
      </tbody></table>
    </div>
    ${anonSales.length>0?`
    <div class="card">
      <p class="card-title">Shitje me Borxh — Pa Klient të Caktuar</p>
      <p class="hint">Këto shitje u bënë me pagesë "Debitor" pa u shkruar emri i klientit. Mund t'i shënosh të paguara ose t'u caktosh një klient (nga "Shitje" → modifiko).</p>
      <table><thead><tr><th>Nr</th><th>Data</th><th class="num">Mbetet</th><th></th></tr></thead><tbody>
        ${anonSales.map(s=>`<tr><td class="mono">${s.nr}</td><td>${s.data}</td><td class="num">${fmt(s.mbetetFillestar)}</td>
          <td><button class="btn btn-ghost btn-sm" data-pay-anon="${s.id}">Regjistro Pagesë</button></td></tr>`).join('')}
      </tbody></table>
    </div>`:''}
    <div class="card">
      <p class="card-title">Të Gjithë Klientët</p>
      <table><thead><tr><th>Emri</th><th>Telefon</th><th>Adresa</th><th class="num">Gjendja</th></tr></thead><tbody>
      ${state.customers.length===0?`<tr><td colspan="4"><div class="empty">Ende pa klientë.</div></td></tr>`:
        state.customers.map(c=>`<tr><td>${c.emri}</td><td>${c.telefon||'—'}</td><td>${c.adresa||'—'}</td><td class="num">${fmt(custBalance(c.id))}</td></tr>`).join('')}
      </tbody></table>
    </div>
  `;
}
function wireDebitore(){
  document.getElementById('btn-new-customer').onclick = ()=>{
    openModal(`
      <div class="modal-head"><h3>Klient i Ri</h3><button class="close-x" id="m-close">✕</button></div>
      <form id="cust-form">
        <div class="field"><label>Emri</label><input required name="emri"></div>
        <div class="field-row">
          <div class="field"><label>Telefon</label><input name="telefon"></div>
          <div class="field"><label>Adresa</label><input name="adresa"></div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
          <button type="submit" class="btn btn-primary">Shto Klientin</button>
        </div>
      </form>
    `);
    document.getElementById('m-close').onclick = closeModal;
    document.getElementById('m-cancel').onclick = closeModal;
    document.getElementById('cust-form').onsubmit = async (e)=>{
      e.preventDefault();
      const f = new FormData(e.target);
      state.customers.push({id:uid(), emri:f.get('emri').trim(), telefon:f.get('telefon').trim(), adresa:f.get('adresa').trim()});
      closeModal(); await refresh();
    };
  };
  document.querySelectorAll('[data-pay]').forEach(b=>{
    b.onclick = ()=>{
      const c = custById(b.dataset.pay);
      const bal = custBalance(c.id);
      openModal(`
        <div class="modal-head"><h3>Pagesë nga ${c.emri}</h3><button class="close-x" id="m-close">✕</button></div>
        <p class="hint">Borxhi aktual: <b class="mono">${fmt(bal)} ${state.config.monedha}</b></p>
        <form id="pay-form">
          <div class="field-row">
            <div class="field"><label>Data</label><input type="date" name="data" value="${today()}" required></div>
            <div class="field"><label>Shuma</label><input type="number" step="0.01" name="shuma" max="${bal}" value="${bal}" required></div>
          </div>
          <div class="field"><label>Shënim</label><input name="shenim" placeholder="opsionale"></div>
          <div style="display:flex;justify-content:flex-end;gap:8px;">
            <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
            <button type="submit" class="btn btn-primary">Regjistro Pagesën</button>
          </div>
        </form>
      `);
      document.getElementById('m-close').onclick = closeModal;
      document.getElementById('m-cancel').onclick = closeModal;
      document.getElementById('pay-form').onsubmit = async (e)=>{
        e.preventDefault();
        const f = new FormData(e.target);
        const shuma = parseFloat(f.get('shuma'))||0;
        if(shuma<=0){ alert('Shuma duhet të jetë pozitive.'); return; }
        state.payments.push({id:uid(), data:f.get('data'), klientId:c.id, shuma, shenim:f.get('shenim')});
        state.cashMovements.push({id:uid(), data:f.get('data'), lloji:'hyrje', shuma, pershkrim:`Arkëtim nga ${c.emri}`});
        closeModal(); await refresh();
      };
    };
  });
  document.querySelectorAll('[data-pay-anon]').forEach(b=>{
    b.onclick = ()=>{
      const sale = state.sales.find(s=>s.id===b.dataset.payAnon);
      if(!sale) return;
      openModal(`
        <div class="modal-head"><h3>Pagesë — Shitja ${sale.nr}</h3><button class="close-x" id="m-close">✕</button></div>
        <p class="hint">Mbetet pa u paguar: <b class="mono">${fmt(sale.mbetetFillestar)} ${state.config.monedha}</b></p>
        <form id="pay-anon-form">
          <div class="field-row">
            <div class="field"><label>Data</label><input type="date" name="data" value="${today()}" required></div>
            <div class="field"><label>Shuma</label><input type="number" step="0.01" name="shuma" max="${sale.mbetetFillestar}" value="${sale.mbetetFillestar}" required></div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px;">
            <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
            <button type="submit" class="btn btn-primary">Regjistro Pagesën</button>
          </div>
        </form>
      `);
      document.getElementById('m-close').onclick = closeModal;
      document.getElementById('m-cancel').onclick = closeModal;
      document.getElementById('pay-anon-form').onsubmit = async (e)=>{
        e.preventDefault();
        const f = new FormData(e.target);
        const shuma = Math.min(parseFloat(f.get('shuma'))||0, sale.mbetetFillestar);
        if(shuma<=0){ alert('Shuma duhet të jetë pozitive.'); return; }
        sale.mbetetFillestar = Math.round((sale.mbetetFillestar-shuma)*100)/100;
        state.cashMovements.push({id:uid(), data:f.get('data'), lloji:'hyrje', shuma, pershkrim:`Arkëtim shitje ${sale.nr} (klient rasti)`, saleId:sale.id});
        closeModal(); await refresh();
      };
    };
  });
}

/* =====================================================================
   BILANC (Dyqan)
   ===================================================================== */
function viewBilanc(){
  const rows = allVariantRows();
  const valMadhe = rows.reduce((a,{v})=>a+stockOf('madhe',v.id)*v.cmimiBlerje,0);
  const valDyqan = rows.reduce((a,{v})=>a+stockOf('dyqan',v.id)*v.cmimiBlerje,0);
  const totBlerje = state.purchases.reduce((a,p)=>a+p.totali,0);
  const totShitje = state.sales.reduce((a,s)=>a+s.totali,0);
  const costShitur = state.sales.reduce((a,s)=>a+s.items.reduce((aa,it)=>{
    const ref = findVariant(it.productId); return aa + (ref?ref.variant.cmimiBlerje*it.sasia:0);
  },0),0);
  const fitimi = totShitje - costShitur;
  const totShpenzime = state.expenses.reduce((a,e)=>a+e.shuma,0);
  const fitimiNeto = fitimi - totShpenzime;
  const totDebi = totalDebtAmount();
  const totArke = state.cashMovements.reduce((a,m)=>a + (m.lloji==='hyrje'?m.shuma:-m.shuma),0);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Financa</div><h1 class="view-title">Bilanc i Përgjithshëm</h1></div>
    </div>
    <div class="grid-stats">
      <div class="stat-card"><p class="stat-label">Vlera Stoku — Mag. Madhe</p><p class="stat-val">${fmt(valMadhe)}</p></div>
      <div class="stat-card s2"><p class="stat-label">Vlera Stoku — Dyqan</p><p class="stat-val">${fmt(valDyqan)}</p></div>
      <div class="stat-card s3"><p class="stat-label">Totali Blerjeve</p><p class="stat-val">${fmt(totBlerje)}</p></div>
      <div class="stat-card s4"><p class="stat-label">Totali Shitjeve</p><p class="stat-val">${fmt(totShitje)}</p></div>
      <div class="stat-card s4"><p class="stat-label">Fitimi Bruto</p><p class="stat-val">${fmt(fitimi)}</p><p class="stat-sub">shitje − kosto e mallit</p></div>
      <div class="stat-card"><p class="stat-label">Shpenzime (Dyqan)</p><p class="stat-val">${fmt(totShpenzime)}</p></div>
      <div class="stat-card s2"><p class="stat-label">Fitimi Neto</p><p class="stat-val">${fmt(fitimiNeto)}</p><p class="stat-sub">bruto − shpenzime</p></div>
      <div class="stat-card"><p class="stat-label">Debitorë (pa arkëtuar)</p><p class="stat-val">${fmt(totDebi)}</p></div>
      <div class="stat-card s2"><p class="stat-label">Gjendja e Arkës (kumulative)</p><p class="stat-val">${fmt(totArke)}</p></div>
    </div>
    <div class="card">
      <p class="card-title">Vlera e Stokut sipas Produktit</p>
      <table><thead><tr><th>Produkti</th><th class="num">Mag. Madhe</th><th class="num">Dyqan</th><th class="num">Total Sasi</th><th class="num">Vlera Totale</th></tr></thead><tbody>
      ${rows.length===0?`<tr><td colspan="5"><div class="empty">S'ka produkte.</div></td></tr>`:
        rows.map(({p,v})=>{
          const m = stockOf('madhe',v.id), d = stockOf('dyqan',v.id);
          return `<tr><td>${p.kod} — ${v.emer}${v.masa?' ('+v.masa+')':''}</td><td class="num">${m}</td><td class="num">${d}</td><td class="num">${m+d}</td><td class="num">${fmt((m+d)*v.cmimiBlerje)}</td></tr>`;
        }).join('')}
      </tbody></table>
    </div>
  `;
}
function wireBilanc(){}

/* =====================================================================
   XHIRO DITORE (Dyqan)
   ===================================================================== */
let xhiroDate = today();
let xhiroRepGroup = 'ditor';
let xhiroRepFrom = today().slice(0,8)+'01';
let xhiroRepTo = today();
function monthLabelSq(ym){
  const emrat = ['Janar','Shkurt','Mars','Prill','Maj','Qershor','Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'];
  const [y,m] = ym.split('-');
  return `${emrat[parseInt(m,10)-1]} ${y}`;
}
function buildXhiroReport(from, to, group){
  const cash = state.cashMovements.filter(m=>m.data>=from && m.data<=to);
  const sales = state.sales.filter(s=>s.data>=from && s.data<=to);
  const keyOf = d => group==='mujor' ? d.slice(0,7) : d;
  const map = {};
  cash.forEach(m=>{
    const k = keyOf(m.data);
    map[k] = map[k] || {hyrje:0, dalje:0, nrShitje:0, vleraShitje:0};
    if(m.lloji==='hyrje') map[k].hyrje += m.shuma; else map[k].dalje += m.shuma;
  });
  sales.forEach(s=>{
    const k = keyOf(s.data);
    map[k] = map[k] || {hyrje:0, dalje:0, nrShitje:0, vleraShitje:0};
    map[k].nrShitje += 1;
    map[k].vleraShitje += (s.totali||0);
  });
  return Object.keys(map).sort().map(k=>({period:k, ...map[k], bilanc: map[k].hyrje - map[k].dalje}));
}

/* =====================================================================
   NJOFTIME — mesazhe/kërkesa mes Dyqanit dhe Magazinës së Madhe
   ===================================================================== */
let njoftimeMessages = [];
let njoftimeLoaded = false;
let njoftimeOpenedFor = null;
function njoftimeTimeLabel(iso){
  try{
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }catch(e){ return iso||''; }
}
function viewNjoftime(sys){
  const list = [...njoftimeMessages].reverse(); // më i vjetri lart, më i riu poshtë
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Komunikim</div><h1 class="view-title">Njoftime — ${sysLabel(sys)} ↔ ${sysLabel(otherSystem(sys))}</h1></div>
    </div>
    <div class="card">
      <p class="card-title">Bashkëbisedimi</p>
      <div id="njoftime-list" style="display:flex;flex-direction:column;gap:8px;max-height:420px;overflow-y:auto;padding:4px 2px;">
        ${!njoftimeLoaded ? `<div class="empty">Duke ngarkuar...</div>` :
          list.length===0 ? `<div class="empty">Ende pa mesazhe. Shkruaj i pari.</div>` :
          list.map(m=>{
            const mine = m.nga===sys;
            return `<div style="align-self:${mine?'flex-end':'flex-start'};max-width:75%;">
              <div style="font-size:10.5px;color:var(--ink-soft);margin-bottom:2px;text-align:${mine?'right':'left'};">${mine?'Ti':sysLabel(m.nga)} · ${njoftimeTimeLabel(m.created_at)}</div>
              <div style="background:${mine?'var(--indigo)':'#fbf3de'};color:${mine?'#fff':'#5a4a1a'};padding:8px 12px;border-radius:12px;${mine?'border-bottom-right-radius:3px;':'border-bottom-left-radius:3px;'}font-size:13px;line-height:1.4;white-space:pre-wrap;">${m.teksti}</div>
            </div>`;
          }).join('')}
      </div>
      <form id="njoftime-form" style="display:flex;gap:8px;margin-top:14px;">
        <input type="text" id="njoftime-input" placeholder="Shkruaj një njoftim ose kërkesë p.sh. 'Dërgo 20m kadife blu'..." style="flex:1;" autocomplete="off" required>
        <button type="submit" class="btn btn-terra">Dërgo</button>
      </form>
      <p class="hint">Mesazhi shkon te ${sysLabel(otherSystem(sys))} dhe shfaqet me njoftim (badge të kuq) te menyja "Njoftime" e tyre, brenda ~20 sekondave.</p>
    </div>
  `;
}
async function loadNjoftime(sys){
  njoftimeLoaded = false;
  renderMain();
  njoftimeMessages = (await fetchMessages()).filter(m=>(m.nga===sys && m.drejt===otherSystem(sys)) || (m.nga===otherSystem(sys) && m.drejt===sys));
  njoftimeLoaded = true;
  await markMessagesRead(sys);
  njoftimeUnread[sys] = 0;
  renderMain();
}
function wireNjoftime(sys){
  if(njoftimeOpenedFor !== currentView){
    njoftimeOpenedFor = currentView;
    loadNjoftime(sys);
  }
  const form = document.getElementById('njoftime-form');
  if(form) form.onsubmit = async (e)=>{
    e.preventDefault();
    const input = document.getElementById('njoftime-input');
    const teksti = input.value.trim();
    if(!teksti) return;
    input.value = '';
    input.disabled = true;
    try{
      await sendMessage(sys, otherSystem(sys), teksti);
      njoftimeMessages.push({nga:sys, drejt:otherSystem(sys), teksti, lexuar:true, created_at:new Date().toISOString()});
      renderMain();
    }catch(err){
      alert('Dërgimi dështoi — kontrollo lidhjen me internetin.');
    }
  };
}

function viewXhiro(){
  const dayCash = state.cashMovements.filter(m=>m.data===xhiroDate);
  const hyrje = dayCash.filter(m=>m.lloji==='hyrje').reduce((a,m)=>a+m.shuma,0);
  const dalje = dayCash.filter(m=>m.lloji==='dalje').reduce((a,m)=>a+m.shuma,0);
  const daySales = state.sales.filter(s=>s.data===xhiroDate);
  const report = buildXhiroReport(xhiroRepFrom, xhiroRepTo, xhiroRepGroup);
  const repHyrje = report.reduce((a,r)=>a+r.hyrje,0);
  const repDalje = report.reduce((a,r)=>a+r.dalje,0);
  const repVlera = report.reduce((a,r)=>a+r.vleraShitje,0);
  const repNr = report.reduce((a,r)=>a+r.nrShitje,0);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Arka</div><h1 class="view-title">Xhiro Ditore</h1></div>
      <div style="display:flex;gap:8px;align-items:center;">
        <input type="date" id="xhiro-date" value="${xhiroDate}">
        <button class="btn btn-ghost" id="btn-cash-in">+ Hyrje</button>
        <button class="btn btn-ghost" id="btn-cash-out">− Dalje</button>
      </div>
    </div>
    <div class="grid-stats">
      <div class="stat-card s4"><p class="stat-label">Hyrje Gjithsej</p><p class="stat-val">${fmt(hyrje)}</p></div>
      <div class="stat-card"><p class="stat-label">Dalje Gjithsej</p><p class="stat-val">${fmt(dalje)}</p></div>
      <div class="stat-card s2"><p class="stat-label">Bilanci Ditor</p><p class="stat-val">${fmt(hyrje-dalje)}</p></div>
      <div class="stat-card s3"><p class="stat-label">Nr. Shitjesh</p><p class="stat-val">${daySales.length}</p></div>
    </div>
    <div class="card">
      <p class="card-title">Lëvizjet e Arkës — ${xhiroDate}</p>
      <table><thead><tr><th>Lloji</th><th>Përshkrimi</th><th class="num">Shuma</th></tr></thead><tbody>
      ${dayCash.length===0?`<tr><td colspan="3"><div class="empty">Asnjë lëvizje për këtë datë.</div></td></tr>`:
        dayCash.map(m=>`<tr><td><span class="tag ${m.lloji==='hyrje'?'tag-ok':'tag-bad'}">${m.lloji==='hyrje'?'Hyrje':'Dalje'}</span></td><td>${m.pershkrim}</td><td class="num">${fmt(m.shuma)}</td></tr>`).join('')}
      </tbody></table>
    </div>

    <div class="card">
      <p class="card-title">Raport Xhiro sipas Periudhës</p>
      <div class="field-row" style="align-items:flex-end;">
        <div class="field"><label>Nga data</label><input type="date" id="xrep-from" value="${xhiroRepFrom}"></div>
        <div class="field"><label>Deri në datën</label><input type="date" id="xrep-to" value="${xhiroRepTo}"></div>
        <div class="field">
          <label>Grupimi</label>
          <select id="xrep-group">
            <option value="ditor" ${xhiroRepGroup==='ditor'?'selected':''}>Ditore</option>
            <option value="mujor" ${xhiroRepGroup==='mujor'?'selected':''}>Mujore</option>
          </select>
        </div>
        <button class="btn btn-primary" id="btn-xrep-gjenero">Gjenero</button>
      </div>
      <div class="grid-stats" style="margin-top:14px;">
        <div class="stat-card s4"><p class="stat-label">Hyrje Gjithsej</p><p class="stat-val">${fmt(repHyrje)}</p></div>
        <div class="stat-card"><p class="stat-label">Dalje Gjithsej</p><p class="stat-val">${fmt(repDalje)}</p></div>
        <div class="stat-card s2"><p class="stat-label">Bilanci i Periudhës</p><p class="stat-val">${fmt(repHyrje-repDalje)}</p></div>
        <div class="stat-card s3"><p class="stat-label">Shitje (${repNr})</p><p class="stat-val">${fmt(repVlera)}</p></div>
      </div>
      <table style="margin-top:14px;"><thead><tr><th>${xhiroRepGroup==='mujor'?'Muaji':'Data'}</th><th class="num">Hyrje</th><th class="num">Dalje</th><th class="num">Bilanci</th><th class="num">Nr. Shitjesh</th><th class="num">Vlera Shitjeve</th></tr></thead><tbody>
      ${report.length===0?`<tr><td colspan="6"><div class="empty">S'ka lëvizje në këtë periudhë.</div></td></tr>`:
        report.map(r=>`<tr><td>${xhiroRepGroup==='mujor'?monthLabelSq(r.period):r.period}</td><td class="num">${fmt(r.hyrje)}</td><td class="num">${fmt(r.dalje)}</td><td class="num ${r.bilanc<0?'qty-alert':''}">${fmt(r.bilanc)}</td><td class="num">${r.nrShitje}</td><td class="num">${fmt(r.vleraShitje)}</td></tr>`).join('')}
      </tbody></table>
    </div>
  `;
}
function wireXhiro(){
  document.getElementById('xhiro-date').onchange = (e)=>{ xhiroDate = e.target.value; renderMain(); };
  document.getElementById('btn-cash-in').onclick = ()=> cashMoveForm('hyrje');
  document.getElementById('btn-cash-out').onclick = ()=> cashMoveForm('dalje');
  document.getElementById('btn-xrep-gjenero').onclick = ()=>{
    xhiroRepFrom = document.getElementById('xrep-from').value || xhiroRepFrom;
    xhiroRepTo = document.getElementById('xrep-to').value || xhiroRepTo;
    xhiroRepGroup = document.getElementById('xrep-group').value;
    renderMain();
  };
}
function cashMoveForm(lloji){
  openModal(`
    <div class="modal-head"><h3>${lloji==='hyrje'?'Hyrje në Arkë':'Dalje nga Arka'}</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="cash-form">
      <div class="field-row">
        <div class="field"><label>Data</label><input type="date" name="data" value="${xhiroDate}" required></div>
        <div class="field"><label>Shuma</label><input type="number" step="0.01" name="shuma" required></div>
      </div>
      <div class="field"><label>Përshkrimi</label><input name="pershkrim" required placeholder="p.sh. Pagesë qeraje, avans arke..."></div>
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-primary">Ruaj</button>
      </div>
    </form>
  `);
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('cash-form').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    state.cashMovements.push({id:uid(), data:f.get('data'), lloji, shuma:parseFloat(f.get('shuma'))||0, pershkrim:f.get('pershkrim')});
    closeModal(); await refresh();
  };
}

/* =====================================================================
   SHPENZIME (Dyqan) — kosto operative, jashtë blerjes së mallit
   Çdo shpenzim krijon automatikisht edhe një "Dalje" në Arkë, kështu
   që Xhiro Ditore dhe Bilanci e llogarisin vetë, pa dyfishim manual.
   ===================================================================== */
function expenseCategoryOptions(sel){
  const cats = state.config.shpenzimeKategori||[];
  return cats.map(k=>`<option value="${k}" ${k===sel?'selected':''}>${k}</option>`).join('') + `<option value="__add_new__">+ Kategori e re...</option>`;
}
function viewShpenzime(){
  const rows = [...state.expenses].sort((a,b)=>b.data.localeCompare(a.data));
  const totali = rows.reduce((a,e)=>a+e.shuma,0);
  const thisMonth = today().slice(0,7);
  const totMuaji = rows.filter(e=>e.data.slice(0,7)===thisMonth).reduce((a,e)=>a+e.shuma,0);
  const byCat = {};
  rows.forEach(e=>{ byCat[e.kategori||'Tjetër'] = (byCat[e.kategori||'Tjetër']||0) + e.shuma; });
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Kosto Operative</div><h1 class="view-title">Shpenzime — Dyqan</h1><p class="hint">Qera, rroga, fatura etj. — regjistrohen te dyqani dhe zbriten automatikisht nga arka.</p></div>
      <button class="btn btn-terra" id="btn-new-expense">${ic('plus','thumb-icon')}Shpenzim i Ri</button>
    </div>
    <div class="grid-stats">
      <div class="stat-card"><p class="stat-label">Shpenzime Gjithsej</p><p class="stat-val">${fmt(totali)}</p><p class="stat-sub">${state.config.monedha}</p></div>
      <div class="stat-card s2"><p class="stat-label">Këtë Muaj</p><p class="stat-val">${fmt(totMuaji)}</p><p class="stat-sub">${state.config.monedha}</p></div>
      <div class="stat-card s3"><p class="stat-label">Nr. Shpenzimesh</p><p class="stat-val">${rows.length}</p></div>
    </div>
    ${Object.keys(byCat).length? `<div class="card">
      <p class="card-title">Sipas Kategorisë</p>
      <table><thead><tr><th>Kategoria</th><th class="num">Totali</th></tr></thead><tbody>
      ${Object.entries(byCat).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<tr><td>${k}</td><td class="num">${fmt(v)}</td></tr>`).join('')}
      </tbody></table>
    </div>` : ''}
    <div class="card">
      <p class="card-title">Të Gjitha Shpenzimet</p>
      <table><thead><tr><th>Data</th><th>Kategoria</th><th>Përshkrimi</th><th class="num">Shuma</th><th></th></tr></thead><tbody>
      ${rows.length===0?`<tr><td colspan="5"><div class="empty">Ende pa shpenzime.</div></td></tr>`:
        rows.map(e=>`<tr><td>${e.data}</td><td>${e.kategori||'—'}</td><td>${e.pershkrim||'—'}</td><td class="num">${fmt(e.shuma)}</td>
          <td><button class="icon-btn" data-del-expense="${e.id}">${ic('trash','thumb-icon')}</button></td></tr>`).join('')}
      </tbody></table>
    </div>
  `;
}
function expenseForm(){
  return `
    <div class="modal-head"><h3>Shpenzim i Ri</h3><button class="close-x" id="m-close">✕</button></div>
    <form id="expense-form">
      <div class="field-row">
        <div class="field"><label>Data</label><input type="date" name="data" value="${today()}" required></div>
        <div class="field"><label>Shuma</label><input type="number" step="0.01" name="shuma" required></div>
      </div>
      <div class="field"><label>Kategoria</label><select name="kategori" id="expense-kategori-select">${expenseCategoryOptions(state.config.shpenzimeKategori?.[0])}</select></div>
      <div class="field"><label>Përshkrimi</label><input name="pershkrim" placeholder="p.sh. Qera dyqani muaji Gusht"></div>
      <div style="display:flex;justify-content:flex-end;gap:8px;">
        <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
        <button type="submit" class="btn btn-primary">Ruaj Shpenzimin</button>
      </div>
    </form>
  `;
}
function wireShpenzime(){
  document.getElementById('btn-new-expense').onclick = ()=>{
    openModal(expenseForm());
    document.getElementById('m-close').onclick = closeModal;
    document.getElementById('m-cancel').onclick = closeModal;
    const sel = document.getElementById('expense-kategori-select');
    let prev = sel.value;
    sel.onchange = async ()=>{
      if(sel.value !== '__add_new__'){ prev = sel.value; return; }
      const val = (prompt('Emri i kategorisë së re (p.sh. Sigurime):')||'').trim();
      if(!val){ sel.innerHTML = expenseCategoryOptions(prev); sel.value = prev; return; }
      if(!(state.config.shpenzimeKategori||[]).includes(val)){
        state.config.shpenzimeKategori = state.config.shpenzimeKategori||[];
        state.config.shpenzimeKategori.push(val);
        await saveState();
      }
      sel.innerHTML = expenseCategoryOptions(val);
      sel.value = val;
      prev = val;
    };
    document.getElementById('expense-form').onsubmit = async (e)=>{
      e.preventDefault();
      const f = new FormData(e.target);
      const shuma = parseFloat(f.get('shuma'))||0;
      if(shuma<=0){ alert('Shuma duhet të jetë më e madhe se 0.'); return; }
      const data = f.get('data');
      const kategori = f.get('kategori');
      const pershkrim = f.get('pershkrim').trim();
      const id = uid();
      state.expenses.push({id, data, kategori, pershkrim, shuma});
      state.cashMovements.push({id:uid(), data, lloji:'dalje', shuma, pershkrim:`Shpenzim: ${kategori}${pershkrim?' — '+pershkrim:''}`, expenseId:id});
      closeModal();
      await refresh();
    };
  };
  document.querySelectorAll('[data-del-expense]').forEach(b=>{
    b.onclick = async ()=>{
      if(!confirm('Fshi këtë shpenzim? Do të hiqet edhe lëvizja përkatëse e arkës.')) return;
      const id = b.dataset.delExpense;
      state.expenses = state.expenses.filter(e=>e.id!==id);
      state.cashMovements = state.cashMovements.filter(m=>m.expenseId!==id);
      await refresh();
    };
  });
}

/* =====================================================================
   PËRDORUES (secili sistem më vete)
   ===================================================================== */
function viewPerdorues(sys){
  const list = state.users.filter(u=>u.sistem===sys);
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Stafi</div><h1 class="view-title">Përdorues — ${sysLabel(sys)}</h1></div>
      <button class="btn btn-terra" id="btn-new-user">${ic('plus','thumb-icon')}Përdorues i Ri</button>
    </div>
    <div class="card">
      <table><thead><tr><th>Emri</th><th>Roli</th><th>Telefon</th><th>PIN</th><th></th></tr></thead><tbody>
      ${list.length===0?`<tr><td colspan="5"><div class="empty">Ende pa përdorues.</div></td></tr>`:
        list.map(u=>`<tr><td>${u.emri}</td><td><span class="tag ${CLOSING_ROLES.includes(u.roli)?'tag-madhe':'tag-vogel'}">${u.roli||'—'}</span></td><td>${u.telefon||'—'}</td>
          <td class="mono" data-pin-cell="${u.id}" data-pin-shown="0">${u.pin?`<span class="lock-badge">${ic('lock','thumb-icon')}••••</span>`:`<span class="tag tag-bad">Pa PIN</span>`}</td>
          <td style="white-space:nowrap;">
            ${u.pin?`<button class="icon-btn" style="background:var(--bg);color:var(--indigo);" data-show-pin="${u.id}" title="Shfaq PIN-in">${ic('search','thumb-icon')}</button>`:''}
            <button class="icon-btn" style="background:var(--bg);color:var(--indigo);" data-pin-user="${u.id}" title="Ndrysho PIN-in">${ic('edit','thumb-icon')}</button>
            <button class="icon-btn" data-del-user="${u.id}">${ic('trash','thumb-icon')}</button>
          </td></tr>`).join('')}
      </tbody></table>
      ${sys==='dyqan'?`<p class="hint">Vetëm përdoruesit me rol <b>Admin</b> ose <b>Menaxher</b> mund të mbyllin Xhiron Ditore.</p>`:''}
      <p class="hint">PIN-i personal i çdo përdoruesi mund të përdoret gjithashtu për të hyrë drejtpërdrejt në këtë sistem, në vend të PIN-it të përgjithshëm.</p>
    </div>
  `;
}
function wirePerdorues(sys){
  document.querySelectorAll('[data-show-pin]').forEach(b=>{
    b.onclick = ()=>{
      const u = state.users.find(x=>x.id===b.dataset.showPin);
      if(!u) return;
      const cell = document.querySelector(`[data-pin-cell="${u.id}"]`);
      const shown = cell.dataset.pinShown==='1';
      cell.innerHTML = shown ? `<span class="lock-badge">${ic('lock','thumb-icon')}••••</span>` : `<span class="lock-badge">${ic('lock','thumb-icon')}${u.pin}</span>`;
      cell.dataset.pinShown = shown ? '0' : '1';
    };
  });
  document.getElementById('btn-new-user').onclick = ()=>{
    openModal(`
      <div class="modal-head"><h3>Përdorues i Ri — ${sysLabel(sys)}</h3><button class="close-x" id="m-close">✕</button></div>
      <form id="user-form">
        <div class="field"><label>Emri</label><input required name="emri"></div>
        <div class="field-row">
          <div class="field"><label>Roli</label><select name="roli">${STAFF_ROLES.map(r=>`<option value="${r}">${r}</option>`).join('')}</select></div>
          <div class="field"><label>Telefon</label><input name="telefon"></div>
        </div>
        <div class="field"><label>PIN (min. 4 shifra)</label><input required type="password" inputmode="numeric" name="pin" minlength="4" autocomplete="off" placeholder="p.sh. 1234"></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
          <button type="submit" class="btn btn-primary">Shto</button>
        </div>
      </form>
    `);
    document.getElementById('m-close').onclick = closeModal;
    document.getElementById('m-cancel').onclick = closeModal;
    document.getElementById('user-form').onsubmit = async (e)=>{
      e.preventDefault();
      const f = new FormData(e.target);
      const pin = (f.get('pin')||'').trim();
      if(pin.length<4){ alert('PIN duhet të ketë të paktën 4 shifra.'); return; }
      state.users.push({id:uid(), emri:f.get('emri').trim(), roli:f.get('roli').trim(), telefon:f.get('telefon').trim(), pin, sistem:sys});
      closeModal(); await refresh();
    };
  };
  document.querySelectorAll('[data-pin-user]').forEach(b=>{
    b.onclick = ()=>{
      const u = state.users.find(x=>x.id===b.dataset.pinUser);
      if(!u) return;
      openModal(`
        <div class="modal-head"><h3>Ndrysho PIN — ${u.emri}</h3><button class="close-x" id="m-close">✕</button></div>
        <form id="user-pin-form">
          <div class="field"><label>PIN i Ri (min. 4 shifra)</label><input required type="password" inputmode="numeric" name="newPin" minlength="4" autocomplete="off"></div>
          <div style="display:flex;justify-content:flex-end;gap:8px;">
            <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
            <button type="submit" class="btn btn-primary">Ruaj</button>
          </div>
        </form>
      `);
      document.getElementById('m-close').onclick = closeModal;
      document.getElementById('m-cancel').onclick = closeModal;
      document.getElementById('user-pin-form').onsubmit = async (e)=>{
        e.preventDefault();
        const f = new FormData(e.target);
        const np = (f.get('newPin')||'').trim();
        if(np.length<4){ alert('PIN duhet të ketë të paktën 4 shifra.'); return; }
        u.pin = np;
        closeModal(); await refresh();
      };
    };
  });
  document.querySelectorAll('[data-del-user]').forEach(b=>{
    b.onclick = async ()=>{
      if(!confirm('Fshi këtë përdorues?')) return;
      state.users = state.users.filter(u=>u.id!==b.dataset.delUser);
      await refresh();
    };
  });
}

/* =====================================================================
   KONFIGURIME — Magazina e Madhe
   ===================================================================== */
function viewConfigMadhe(){
  const c = state.config;
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Sistemi</div><h1 class="view-title">Konfigurime — Magazina e Madhe</h1></div>
    </div>
    <div class="card">
      <p class="card-title">Të Dhënat e Magazinës &amp; Printeri</p>
      <p class="hint">Të dhënat e përgjithshme të biznesit (NIPT, TVSH, Monedha) vendosen te Dyqani. Këtu vendos vetëm emrin/adresën/telefonin e Magazinës së Madhe (opsionale — shfaqen në faturat e hyrjes) dhe formatin e printimit të saj.</p>
      <form id="config-form">
        <div class="field-row">
          <div class="field"><label>Emri i Magazinës</label><input name="madheEmri" value="${c.madheEmri||''}" placeholder="p.sh. Fill & Stoff — Magazina e Madhe"></div>
          <div class="field"><label>Telefoni i Magazinës</label><input name="madheTel" value="${c.madheTel||''}" placeholder="p.sh. +355 69 000 0000"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Vendndodhja</label><input name="madheVendndodhja" value="${c.madheVendndodhja||''}" placeholder="p.sh. Rr. Kryesore, Nr. 12, Tiranë"></div>
          <div class="field"><label>Formati i Printimit (parazgjedhur)</label>
            <select name="printFormat">
              <option value="pos80" ${c.printFormat==='pos80'?'selected':''}>POS 80mm</option>
              <option value="a4" ${c.printFormat==='a4'?'selected':''}>A4</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Ruaj Konfigurimet</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">Furnitorët</p>
      <div class="toolbar"><button class="btn btn-ghost btn-sm" id="btn-new-supplier">${ic('plus','thumb-icon')}Furnitor i Ri</button></div>
      <table><thead><tr><th>Emri</th><th>Telefon</th></tr></thead><tbody>
      ${state.suppliers.length===0?`<tr><td colspan="2"><div class="empty">Ende pa furnitorë.</div></td></tr>`:
        state.suppliers.map(s=>`<tr><td>${s.emri}</td><td>${s.telefon||'—'}</td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <p class="card-title">PIN-i i Magazinës së Madhe</p>
      <form id="pin-change-form-madhe" style="display:flex;gap:8px;align-items:end;flex-wrap:wrap;">
        <div class="field" style="margin-bottom:0;"><label>PIN i Ri (min. 4 shifra)</label><input type="password" inputmode="numeric" name="newPin" minlength="4" required></div>
        <button type="submit" class="btn btn-ghost btn-sm">Ruaj PIN-in</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">Të Dhënat — Rezervë &amp; Rikthim</p>
      <p class="hint">Të dhënat ruhen automatikisht. Mund të eksportosh një kopje rezervë JSON, ta rikthesh nga një backup i mëparshëm, ose ta pastrosh sistemin (prek të dyja sistemet — Magazina e Madhe dhe Dyqan).</p>
      <div class="toolbar">
        <button class="btn btn-ghost" id="btn-export">${ic('pdf','thumb-icon')}Eksporto Backup (JSON)</button>
        <button class="btn btn-ghost" id="btn-import">${ic('arrow','thumb-icon')}Importo Backup (JSON)</button>
        <input type="file" id="import-file" accept="application/json,.json" style="display:none;">
        <button class="btn btn-danger" id="btn-reset">Pastro të Gjitha të Dhënat</button>
      </div>
    </div>
  `;
}
function wireBackupImportExport(){
  document.getElementById('btn-export').onclick = ()=>{
    const blob = new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `fill-stoff-backup-${today()}.json`;
    a.click();
  };
  document.getElementById('btn-import').onclick = ()=>{
    document.getElementById('import-file').click();
  };
  document.getElementById('import-file').onchange = async (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    if(!confirm('Importimi i një backup do të MBISHKRUAJË plotësisht të dhënat aktuale (Magazina e Madhe dhe Dyqan). Sigurohu që ke marrë backup të fundit para se të vazhdosh. Vazhdo?')){
      e.target.value=''; return;
    }
    try{
      const text = await file.text();
      const data = JSON.parse(text);
      if(!data || typeof data!=='object' || !Array.isArray(data.products) || !data.config || !data.stock){
        alert('Skedari nuk duket të jetë një backup i vlefshëm i Fill & Stoff.');
        return;
      }
      state = data;
      currentSystem = null; currentView = null; currentLoggedUser = null; clearSession();
      await refresh();
      alert('Backup-i u importua me sukses.');
    }catch(err){
      console.error(err);
      alert('Gabim gjatë leximit të skedarit. Sigurohu që është një JSON i vlefshëm backup i eksportuar nga ky sistem.');
    }finally{
      e.target.value='';
    }
  };
}
function wireConfigMadhe(){
  document.getElementById('config-form').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    Object.assign(state.config, {
      madheEmri: f.get('madheEmri').trim(),
      madheVendndodhja: f.get('madheVendndodhja').trim(),
      madheTel: f.get('madheTel').trim(),
      printFormat: f.get('printFormat')
    });
    await refresh();
  };
  document.getElementById('btn-new-supplier').onclick = ()=>{
    openModal(`
      <div class="modal-head"><h3>Furnitor i Ri</h3><button class="close-x" id="m-close">✕</button></div>
      <form id="sup-form">
        <div class="field"><label>Emri</label><input required name="emri"></div>
        <div class="field"><label>Telefon</label><input name="telefon"></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-ghost" id="m-cancel">Anulo</button>
          <button type="submit" class="btn btn-primary">Shto</button>
        </div>
      </form>
    `);
    document.getElementById('m-close').onclick = closeModal;
    document.getElementById('m-cancel').onclick = closeModal;
    document.getElementById('sup-form').onsubmit = async (e)=>{
      e.preventDefault();
      const f = new FormData(e.target);
      state.suppliers.push({id:uid(), emri:f.get('emri').trim(), telefon:f.get('telefon').trim()});
      closeModal(); await refresh();
    };
  };
  document.getElementById('pin-change-form-madhe').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const np = (f.get('newPin')||'').trim();
    if(np.length<4){ alert('PIN duhet të ketë të paktën 4 shifra.'); return; }
    state.config.pinMadhe = np;
    await refresh();
    alert('PIN-i i Magazinës u ndryshua.');
  };
  wireBackupImportExport();
  document.getElementById('btn-reset').onclick = async ()=>{
    if(!confirm('Je i sigurt? Kjo do të fshijë PËRGJITHMONË të gjitha të dhënat.')) return;
    if(!confirm('Konfirmim final: fshi çdo produkt, stok, shitje, blerje dhe klient?')) return;
    state = defaultState();
    currentSystem = null; currentView = null; currentLoggedUser = null; clearSession();
    await refresh();
  };
}

/* =====================================================================
   KONFIGURIME — Dyqan
   ===================================================================== */
function viewConfigDyqan(){
  const c = state.config;
  return `
    <div class="view-head">
      <div><div class="view-eyebrow">Sistemi</div><h1 class="view-title">Konfigurime — Dyqan</h1></div>
    </div>
    <div class="card">
      <p class="card-title">Emri i Programit</p>
      <p class="hint">Ky emër shfaqet lart në krye të programit (dhe te ekrani i hyrjes), në vend të "Fill & Stoff".</p>
      <form id="config-form-marka" style="display:flex;gap:8px;align-items:end;flex-wrap:wrap;">
        <div class="field" style="margin-bottom:0;flex:1;min-width:200px;"><label>Emri i Dyqanit / Programit</label><input name="markaEmri" value="${c.markaEmri||''}" placeholder="p.sh. Tekstile Bora"></div>
        <button type="submit" class="btn btn-primary btn-sm">Ruaj</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">Të Dhënat e Biznesit (për faturat)</p>
      <form id="config-form-biznes">
        <div class="field-row">
          <div class="field"><label>Emri i Biznesit</label><input name="emri" value="${c.emri}"></div>
          <div class="field"><label>NIPT</label><input name="nipt" value="${c.nipt}"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Adresa</label><input name="adresa" value="${c.adresa}"></div>
          <div class="field"><label>Telefoni</label><input name="tel" value="${c.tel}"></div>
        </div>
        <div class="field-row3">
          <div class="field"><label>TVSH (%)</label><input type="number" step="0.1" name="tvsh" value="${c.tvsh}"></div>
          <div class="field"><label>Monedha</label><input name="monedha" value="${c.monedha}"></div>
          <div class="field"><label>Formati i Printimit (parazgjedhur)</label>
            <select name="printFormat">
              <option value="pos80" ${c.printFormat==='pos80'?'selected':''}>POS 80mm</option>
              <option value="a4" ${c.printFormat==='a4'?'selected':''}>A4</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Ruaj Konfigurimet</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">Të Dhënat e Dyqanit</p>
      <p class="hint">Këto fusha identifikojnë pikën e shitjes (dyqanin) veç e veç — shfaqen te paneli dhe te faturat e shitjes. Lëri bosh nëse do të përdorësh të dhënat e përgjithshme të biznesit.</p>
      <form id="config-form-dyqan-info">
        <div class="field-row">
          <div class="field"><label>Emri i Dyqanit</label><input name="dyqanEmri" value="${c.dyqanEmri||''}" placeholder="p.sh. Fill & Stoff — Dyqani Qendër"></div>
          <div class="field"><label>Nr. i Dyqanit / Pikës</label><input name="dyqanNr" value="${c.dyqanNr||''}" placeholder="p.sh. Dyqan Nr. 1"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Vendndodhja</label><input name="dyqanVendndodhja" value="${c.dyqanVendndodhja||''}" placeholder="p.sh. Rr. Myslym Shyri, Tiranë"></div>
          <div class="field"><label>Telefoni i Dyqanit</label><input name="dyqanTel" value="${c.dyqanTel||''}" placeholder="p.sh. +355 69 111 2222"></div>
        </div>
        <button type="submit" class="btn btn-primary">Ruaj të Dhënat e Dyqanit</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">PIN-i i Dyqanit</p>
      <form id="pin-change-form-dyqan" style="display:flex;gap:8px;align-items:end;flex-wrap:wrap;">
        <div class="field" style="margin-bottom:0;"><label>PIN i Ri (min. 4 shifra)</label><input type="password" inputmode="numeric" name="newPin" minlength="4" required></div>
        <button type="submit" class="btn btn-ghost btn-sm">Ruaj PIN-in</button>
      </form>
    </div>
    <div class="card">
      <p class="card-title">Të Dhënat — Rezervë &amp; Rikthim</p>
      <p class="hint">Të dhënat ruhen automatikisht. Mund të eksportosh një kopje rezervë JSON, ta rikthesh nga një backup i mëparshëm, ose ta pastrosh sistemin (prek të dyja sistemet — Magazina e Madhe dhe Dyqan).</p>
      <div class="toolbar">
        <button class="btn btn-ghost" id="btn-export">${ic('pdf','thumb-icon')}Eksporto Backup (JSON)</button>
        <button class="btn btn-ghost" id="btn-import">${ic('arrow','thumb-icon')}Importo Backup (JSON)</button>
        <input type="file" id="import-file" accept="application/json,.json" style="display:none;">
        <button class="btn btn-danger" id="btn-reset">Pastro të Gjitha të Dhënat</button>
      </div>
    </div>
  `;
}
function wireConfigDyqan(){
  document.getElementById('config-form-marka').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    state.config.markaEmri = (f.get('markaEmri')||'').trim() || 'Fill & Stoff';
    await refresh();
  };
  document.getElementById('config-form-biznes').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    Object.assign(state.config, {
      emri:f.get('emri'), nipt:f.get('nipt'), adresa:f.get('adresa'), tel:f.get('tel'),
      tvsh: parseFloat(f.get('tvsh'))||0, monedha:f.get('monedha'), printFormat:f.get('printFormat')
    });
    await refresh();
  };
  document.getElementById('config-form-dyqan-info').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    Object.assign(state.config, {
      dyqanEmri: f.get('dyqanEmri').trim(),
      dyqanNr: f.get('dyqanNr').trim(),
      dyqanVendndodhja: f.get('dyqanVendndodhja').trim(),
      dyqanTel: f.get('dyqanTel').trim(),
    });
    await refresh();
  };
  document.getElementById('pin-change-form-dyqan').onsubmit = async (e)=>{
    e.preventDefault();
    const f = new FormData(e.target);
    const np = (f.get('newPin')||'').trim();
    if(np.length<4){ alert('PIN duhet të ketë të paktën 4 shifra.'); return; }
    state.config.pinDyqan = np;
    await refresh();
    alert('PIN-i i Dyqanit u ndryshua.');
  };
  wireBackupImportExport();
  document.getElementById('btn-reset').onclick = async ()=>{
    if(!confirm('Je i sigurt? Kjo do të fshijë PËRGJITHMONË të gjitha të dhënat.')) return;
    if(!confirm('Konfirmim final: fshi çdo produkt, stok, shitje, blerje dhe klient?')) return;
    state = defaultState();
    currentSystem = null; currentView = null; currentLoggedUser = null; clearSession();
    await refresh();
  };
}

/* =====================================================================
   PRINTIMI — POS80 / A4 / PDF
   ===================================================================== */
function invoiceLinesHtml(items, pos){
  return items.map(it=>{
    const ref = findVariant(it.productId);
    const emri = ref ? `${ref.product.kod} ${ref.variant.emer}${ref.variant.masa?' ('+ref.variant.masa+')':''}` : '—';
    const cmimi = it.cmimi!==undefined?it.cmimi:0;
    const rresht = it.sasia*cmimi;
    return pos
      ? `<tr><td colspan="2">${emri}</td></tr><tr><td>${it.sasia} x ${fmt(cmimi)}</td><td style="text-align:right">${fmt(rresht)}</td></tr>`
      : `<tr><td>${emri}</td><td class="num">${it.sasia}</td><td class="num">${fmt(cmimi)}</td><td class="num">${fmt(rresht)}</td></tr>`;
  }).join('');
}
function saleInvoiceHtml(sale, format){
  const c = state.config;
  const dEmri = c.dyqanEmri || c.emri;
  const dAdresa = c.dyqanVendndodhja || c.adresa;
  const dTel = c.dyqanTel || c.tel;
  const klient = sale.klientId ? (custById(sale.klientId)?.emri || 'Klient') : 'Klient rasti';
  const pagesaLbl = sale.menyraPageses==='cash'?'Cash':sale.menyraPageses==='kredi'?'Debitor':'Pjesërisht';
  if(format==='pos80'){
    return `<div class="inv-pos">
      <div class="pos-brand">${dEmri}</div>
      <div class="pos-sub">${dAdresa}</div>
      <div class="pos-sub">${dTel} · NIPT ${c.nipt}</div>
      <hr>
      <div>Fatura: ${sale.nr}</div>
      <div>Data: ${sale.data}</div>
      <div>Klienti: ${klient}</div>
      <hr>
      <table>${invoiceLinesHtml(sale.items,true)}</table>
      <hr>
      <table>
        ${sale.tvshAplikuar?`<tr><td>Nëntotali</td><td style="text-align:right;">${fmt(sale.nettotali)} ${c.monedha}</td></tr>
        <tr><td>TVSH (${sale.tvshPerqindja}%)</td><td style="text-align:right;">${fmt(sale.tvshVlera)} ${c.monedha}</td></tr>`:''}
        <tr><td>Totali</td><td style="text-align:right;font-weight:700;">${fmt(sale.totali)} ${c.monedha}</td></tr>
        <tr><td>Pagesa</td><td style="text-align:right;">${pagesaLbl}</td></tr>
        ${sale.mbetetFillestar>0?`<tr><td>Mbetet pa paguar</td><td style="text-align:right;">${fmt(sale.mbetetFillestar)}</td></tr>`:''}
      </table>
      <hr>
      <div class="pos-thanks">Faleminderit për blerjen!</div>
    </div>`;
  }
  return `<div class="inv-a4">
    <div class="inv-a4-head">
      <div>
        <div class="inv-a4-brandmark">${(state.config.markaEmri||'FS').trim().slice(0,2).toUpperCase()}</div>
        <h2>${dEmri}</h2>
        <div class="biz-line">${dAdresa}</div>
        <div class="biz-line">${dTel} · NIPT: ${c.nipt}</div>
      </div>
      <div class="inv-a4-doctype">
        <div class="pill">Faturë Shitje</div>
        <div class="nr">${sale.nr}</div>
        <div class="dt">Data: ${sale.data}</div>
      </div>
    </div>
    <div class="inv-a4-body">
      <div class="inv-a4-partybox">
        <div class="inv-a4-party"><div class="lbl">Klienti</div><div class="val">${klient}</div></div>
        <div class="inv-a4-party"><div class="lbl">Mënyra e Pagesës</div><div class="val">${pagesaLbl}</div></div>
      </div>
      <table><thead><tr><th>Produkti</th><th class="num">Sasia</th><th class="num">Çmimi</th><th class="num">Vlera</th></tr></thead>
      <tbody>${invoiceLinesHtml(sale.items,false)}</tbody></table>
      <div class="inv-tot">
        <div class="inv-tot-box">
          ${sale.tvshAplikuar?`<div class="inv-tot-row"><span>Nëntotali</span><span>${fmt(sale.nettotali)} ${c.monedha}</span></div>
          <div class="inv-tot-row"><span>TVSH (${sale.tvshPerqindja}%)</span><span>${fmt(sale.tvshVlera)} ${c.monedha}</span></div>`:''}
          <div class="inv-tot-row grand"><span>Totali</span><span>${fmt(sale.totali)} ${c.monedha}</span></div>
          ${sale.mbetetFillestar>0?`<div class="inv-tot-row due"><span>Mbetet pa u paguar</span><span>${fmt(sale.mbetetFillestar)} ${c.monedha}</span></div>`:''}
        </div>
      </div>
      <div class="inv-a4-foot">Faleminderit që zgjodhët <b>${dEmri}</b>!</div>
    </div>
  </div>`;
}
function purchaseInvoiceHtml(rec, format){
  const c = state.config;
  const pEmri = rec.magazina==='dyqan' ? (c.dyqanEmri||c.emri) : (c.madheEmri||c.emri);
  const pAdresa = rec.magazina==='dyqan' ? (c.dyqanVendndodhja||c.adresa) : (c.madheVendndodhja||c.adresa);
  const pTel = rec.magazina==='dyqan' ? (c.dyqanTel||c.tel) : (c.madheTel||c.tel);
  const fur = rec.furnitorId ? (state.suppliers.find(s=>s.id===rec.furnitorId)?.emri||'Furnitor') : 'Furnitor rasti';
  if(format==='pos80'){
    return `<div class="inv-pos">
      <div class="pos-brand">${pEmri}</div>
      <div class="pos-sub">${pAdresa}</div>
      <div class="pos-sub">${pTel} · NIPT ${c.nipt}</div>
      <hr>
      <div>Hyrje Malli: ${rec.nr}</div>
      <div>Data: ${rec.data}</div>
      <div>Furnitori: ${fur}</div>
      <div>Sistemi: ${sysLabel(rec.magazina)}</div>
      <hr>
      <table>${invoiceLinesHtml(rec.items,true)}</table>
      <hr>
      <table>
        ${rec.tvshAplikuar?`<tr><td>Nëntotali</td><td style="text-align:right;">${fmt(rec.nettotali)} ${c.monedha}</td></tr>
        <tr><td>TVSH (${rec.tvshPerqindja}%)</td><td style="text-align:right;">${fmt(rec.tvshVlera)} ${c.monedha}</td></tr>`:''}
        <tr><td>Totali</td><td style="text-align:right;font-weight:700;">${fmt(rec.totali)} ${c.monedha}</td></tr>
      </table>
    </div>`;
  }
  return `<div class="inv-a4">
    <div class="inv-a4-head">
      <div>
        <div class="inv-a4-brandmark">${(state.config.markaEmri||'FS').trim().slice(0,2).toUpperCase()}</div>
        <h2>${pEmri}</h2>
        <div class="biz-line">${pAdresa}</div>
        <div class="biz-line">${pTel} · NIPT: ${c.nipt}</div>
      </div>
      <div class="inv-a4-doctype">
        <div class="pill">Hyrje Malli</div>
        <div class="nr">${rec.nr}</div>
        <div class="dt">Data: ${rec.data}</div>
      </div>
    </div>
    <div class="inv-a4-body">
      <div class="inv-a4-partybox">
        <div class="inv-a4-party"><div class="lbl">Furnitori</div><div class="val">${fur}</div></div>
        <div class="inv-a4-party"><div class="lbl">Sistemi</div><div class="val">${sysLabel(rec.magazina)}</div></div>
      </div>
      <table><thead><tr><th>Produkti</th><th class="num">Sasia</th><th class="num">Çmimi</th><th class="num">Vlera</th></tr></thead>
      <tbody>${invoiceLinesHtml(rec.items,false)}</tbody></table>
      <div class="inv-tot">
        <div class="inv-tot-box">
          ${rec.tvshAplikuar?`<div class="inv-tot-row"><span>Nëntotali</span><span>${fmt(rec.nettotali)} ${c.monedha}</span></div>
          <div class="inv-tot-row"><span>TVSH (${rec.tvshPerqindja}%)</span><span>${fmt(rec.tvshVlera)} ${c.monedha}</span></div>`:''}
          <div class="inv-tot-row grand"><span>Totali</span><span>${fmt(rec.totali)} ${c.monedha}</span></div>
        </div>
      </div>
      <div class="inv-a4-foot">Dokument i brendshëm — <b>${pEmri}</b></div>
    </div>
  </div>`;
}
function doPrint(){
  // Siguron që përmbajtja e sapo-vendosur në #print-root të jetë renderuar plotësisht
  // (layout + paint) përpara se të hapet dialogu i printimit — parandalon faturat "bosh".
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      window.print();
    });
  });
}
function printSale(sale, format){
  if(!sale) return;
  const root = document.getElementById('print-root');
  root.innerHTML = saleInvoiceHtml(sale, format);
  root.offsetHeight; // forco reflow para se të printosh
  doPrint();
}
function printPurchase(rec, format){
  if(!rec) return;
  const root = document.getElementById('print-root');
  root.innerHTML = purchaseInvoiceHtml(rec, format);
  root.offsetHeight; // forco reflow para se të printosh
  doPrint();
}
function openPrintChoiceModal(title, onChoose){
  openModal(`
    <div class="modal-head"><h3>${ic('print','thumb-icon')}${title}</h3><button class="close-x" id="m-close">✕</button></div>
    <p class="hint">U ruajt me sukses. Zgjidh formatin e printimit, ose mbylle pa printuar tani.</p>
    <div style="display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;">
      <button type="button" class="btn btn-ghost" id="m-cancel">Mos Printo</button>
      <button type="button" class="btn btn-ghost" id="btn-choice-pos80">${ic('print','thumb-icon')}POS 80mm</button>
      <button type="button" class="btn btn-primary" id="btn-choice-a4">${ic('print','thumb-icon')}A4</button>
    </div>
  `);
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('btn-choice-pos80').onclick = ()=>{ closeModal(); onChoose('pos80'); };
  document.getElementById('btn-choice-a4').onclick = ()=>{ closeModal(); onChoose('a4'); };
}
async function renderInvoiceToPdf(html, filename){
  const root = document.getElementById('print-root');
  root.innerHTML = html;
  root.style.display = 'block';
  root.style.position='fixed'; root.style.left='-9999px'; root.style.top='0';
  await new Promise(r=>setTimeout(r,60));
  try{
    const target = root.firstElementChild;
    const canvas = await html2canvas(target, {scale:2, backgroundColor:'#ffffff'});
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p','mm','a4');
    const pageW = 210, pageH = 297;
    const imgW = pageW;
    const imgH = canvas.height * imgW / canvas.width;
    pdf.addImage(imgData,'PNG',0,0,imgW, Math.min(imgH,pageH));
    pdf.save(filename);
  }catch(err){
    console.error(err);
    alert('PDF-ja nuk u gjenerua dot. Provo printimin A4 dhe zgjidh "Save as PDF" te dialogu i printimit.');
  }finally{
    root.style.display='none'; root.style.position=''; root.style.left=''; root.style.top='';
    root.innerHTML='';
  }
}
async function pdfSale(sale){
  if(!sale) return;
  await renderInvoiceToPdf(saleInvoiceHtml(sale, 'a4'), `fatura-${sale.nr}.pdf`);
}
async function pdfPurchase(rec){
  if(!rec) return;
  await renderInvoiceToPdf(purchaseInvoiceHtml(rec, 'a4'), `hyrje-${rec.nr}.pdf`);
}

/* ---------------- INIT ---------------- */
(async function init(){
  document.getElementById('app').innerHTML = `<div style="padding:60px;text-align:center;color:#6b6459;font-family:Inter;">Duke ngarkuar sistemin…</div>`;
  await loadState();
  restoreSession();
  render();
})();
