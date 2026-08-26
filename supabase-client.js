/* =====================================================================
   FILL & STOFF — Lidhja me Supabase
   Vendos këtu URL-në dhe Anon Key të projektit tënd Supabase.
   (Anon Key është publik/e sigurt për t'u përdorur në frontend — akses-i
   real kontrollohet nga RLS policy-t e vendosura te supabase-schema.sql)
   ===================================================================== */
const SUPABASE_URL = 'https://vwfoimlqtsrykinebigp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_x3CwCCRmyqZiuqrcioUVNw_dtEq6xd1';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Fshin të gjitha rreshtat e një tabele dhe fut sërish rreshtat aktualë
   (sinkronizim i plotë — i thjeshtë dhe i sigurt për shkallën e këtij aplikacioni). */
async function mirrorTable(table, rows, matchCol){
  const { error: delErr } = await sb.from(table).delete().not(matchCol, 'is', null);
  if(delErr) throw delErr;
  if(rows.length){
    const { error: insErr } = await sb.from(table).insert(rows);
    if(insErr) throw insErr;
  }
}

/* ---------------- STATE -> SUPABASE ---------------- */
async function saveStateToSupabase(state){
  const c = state.config;

  const configP = sb.from('app_config').upsert({
    id: 1,
    marka_emri: c.markaEmri, emri: c.emri, adresa: c.adresa, nipt: c.nipt, tel: c.tel,
    tvsh: c.tvsh, monedha: c.monedha, print_format: c.printFormat,
    pin_madhe: c.pinMadhe, pin_dyqan: c.pinDyqan, njesite_custom: c.njesiteCustom||[],
    dyqan_emri: c.dyqanEmri, dyqan_vendndodhja: c.dyqanVendndodhja, dyqan_nr: c.dyqanNr, dyqan_tel: c.dyqanTel,
    madhe_emri: c.madheEmri, madhe_vendndodhja: c.madheVendndodhja, madhe_tel: c.madheTel,
    shpenzime_kategori: c.shpenzimeKategori||[]
  });

  const countersP = sb.from('counters').upsert({
    id: 1, blerje: state.counters.blerje, transferim: state.counters.transferim, shitje: state.counters.shitje
  });

  const suppliersP = mirrorTable('suppliers', state.suppliers.map(s=>({id:s.id, emri:s.emri, telefon:s.telefon||''})), 'id');
  const customersP = mirrorTable('customers', state.customers.map(c=>({id:c.id, emri:c.emri, telefon:c.telefon||'', adresa:c.adresa||''})), 'id');
  const usersP = mirrorTable('app_users', state.users.map(u=>({id:u.id, emri:u.emri, roli:u.roli, telefon:u.telefon||'', pin:u.pin, sistem:u.sistem})), 'id');

  /* Produktet -> Stoku (varen njëri nga tjetri, kështu mbeten në zinxhir) */
  const productsChain = (async()=>{
    await mirrorTable('products', state.products.map(p=>({
      id:p.id, kod:p.kod, kategori:p.kategori||'', emri:p.emri||'', masa:p.masa||'',
      njesia:p.njesia, min_stok:p.minStok||0, cmimi_blerje:p.cmimiBlerje||0, cmimi_shitje:p.cmimiShitje||0
    })), 'id');

    const stockRows = [];
    ['madhe','dyqan'].forEach(mag=>{
      Object.entries(state.stock[mag]||{}).forEach(([productId, sasia])=>{
        stockRows.push({magazina:mag, product_id:productId, sasia});
      });
    });
    await sb.from('stock').delete().not('product_id','is',null);
    if(stockRows.length) await sb.from('stock').insert(stockRows);
  })();

  /* Blerjet -> Zërat e blerjes */
  const purchasesChain = (async()=>{
    await mirrorTable('purchases', state.purchases.map(r=>({
      id:r.id, nr:r.nr, data:r.data, furnitor_id:r.furnitorId||null, magazina:r.magazina,
      nettotali:r.nettotali||0, tvsh_aplikuar:!!r.tvshAplikuar, tvsh_perqindja:r.tvshPerqindja||0,
      tvsh_vlera:r.tvshVlera||0, totali:r.totali||0
    })), 'id');
    const purchaseItems = [];
    state.purchases.forEach(r=>(r.items||[]).forEach(it=>purchaseItems.push({
      purchase_id:r.id, product_id:it.productId, sasia:it.sasia, cmimi:it.cmimi
    })));
    await sb.from('purchase_items').delete().not('id','is',null);
    if(purchaseItems.length) await sb.from('purchase_items').insert(purchaseItems);
  })();

  /* Transferimet -> Zërat e transferimit */
  const transfersChain = (async()=>{
    await mirrorTable('transfers', state.transfers.map(r=>({
      id:r.id, nr:r.nr, data:r.data, nga:r.nga, drejt_by:r.drejtBy, status:r.status
    })), 'id');
    const transferItems = [];
    state.transfers.forEach(r=>(r.items||[]).forEach(it=>transferItems.push({
      transfer_id:r.id, product_id:it.productId, sasia:it.sasia
    })));
    await sb.from('transfer_items').delete().not('id','is',null);
    if(transferItems.length) await sb.from('transfer_items').insert(transferItems);
  })();

  /* Shitjet -> Zërat e shitjes */
  const salesChain = (async()=>{
    await mirrorTable('sales', state.sales.map(r=>({
      id:r.id, nr:r.nr, data:r.data, klient_id:r.klientId||null, nettotali:r.nettotali||0,
      tvsh_aplikuar:!!r.tvshAplikuar, tvsh_perqindja:r.tvshPerqindja||0, tvsh_vlera:r.tvshVlera||0,
      totali:r.totali||0, menyra_pageses:r.menyraPageses, mbetet_fillestar:r.mbetetFillestar||0
    })), 'id');
    const saleItems = [];
    state.sales.forEach(r=>(r.items||[]).forEach(it=>saleItems.push({
      sale_id:r.id, product_id:it.productId, sasia:it.sasia, cmimi:it.cmimi
    })));
    await sb.from('sale_items').delete().not('id','is',null);
    if(saleItems.length) await sb.from('sale_items').insert(saleItems);
  })();

  const paymentsP = mirrorTable('payments', state.payments.map(r=>({
    id:r.id, data:r.data, klient_id:r.klientId||null, shuma:r.shuma, shenim:r.shenim||''
  })), 'id');

  const cashP = mirrorTable('cash_movements', state.cashMovements.map(r=>({
    id:r.id, data:r.data, lloji:r.lloji, shuma:r.shuma, pershkrim:r.pershkrim||'',
    sale_id:r.saleId||null, expense_id:r.expenseId||null
  })), 'id');

  const expensesP = mirrorTable('expenses', state.expenses.map(r=>({
    id:r.id, data:r.data, kategori:r.kategori, pershkrim:r.pershkrim||'', shuma:r.shuma
  })), 'id');

  const xhiroP = mirrorTable('xhiro_closures', state.xhiroClosures.map(r=>({
    id:r.id, data:r.data, payload:r
  })), 'id');

  /* Të gjitha "zinxhirët" e pavarur ekzekutohen njëkohësisht (paralel), jo njëri
     pas tjetrit — kjo e ul ndjeshëm kohën e ruajtjes (p.sh. krijimi i një fature). */
  await Promise.all([
    configP, countersP, suppliersP, customersP, usersP,
    productsChain, purchasesChain, transfersChain, salesChain,
    paymentsP, cashP, expensesP, xhiroP
  ]);
}

/* ---------------- SUPABASE -> STATE ---------------- */
async function loadStateFromSupabase(){
  const [
    { data: configRow }, { data: countersRow },
    { data: suppliers }, { data: customers }, { data: users },
    { data: products }, { data: stockRows },
    { data: purchases }, { data: purchaseItems },
    { data: transfers }, { data: transferItems },
    { data: sales }, { data: saleItems },
    { data: payments }, { data: cashMovements },
    { data: expenses }, { data: xhiroClosures }
  ] = await Promise.all([
    sb.from('app_config').select('*').eq('id',1).maybeSingle(),
    sb.from('counters').select('*').eq('id',1).maybeSingle(),
    sb.from('suppliers').select('*'),
    sb.from('customers').select('*'),
    sb.from('app_users').select('*'),
    sb.from('products').select('*'),
    sb.from('stock').select('*'),
    sb.from('purchases').select('*'),
    sb.from('purchase_items').select('*'),
    sb.from('transfers').select('*'),
    sb.from('transfer_items').select('*'),
    sb.from('sales').select('*'),
    sb.from('sale_items').select('*'),
    sb.from('payments').select('*'),
    sb.from('cash_movements').select('*'),
    sb.from('expenses').select('*'),
    sb.from('xhiro_closures').select('*'),
  ]);

  // Nëse s'ka fare të dhëna te Supabase ende (projekt i ri), sinjalizo null
  if(!configRow && (!products || products.length===0) && (!sales || sales.length===0)){
    return null;
  }

  const c = configRow || {};
  const config = {
    markaEmri: c.marka_emri||'Fill & Stoff', emri: c.emri||'', adresa: c.adresa||'', nipt: c.nipt||'',
    tel: c.tel||'', tvsh: c.tvsh||0, monedha: c.monedha||'Lekë', printFormat: c.print_format||'pos80',
    pinMadhe: c.pin_madhe||'1234', pinDyqan: c.pin_dyqan||'1111', njesiteCustom: c.njesite_custom||[],
    dyqanEmri: c.dyqan_emri||'', dyqanVendndodhja: c.dyqan_vendndodhja||'', dyqanNr: c.dyqan_nr||'', dyqanTel: c.dyqan_tel||'',
    madheEmri: c.madhe_emri||'', madheVendndodhja: c.madhe_vendndodhja||'', madheTel: c.madhe_tel||'',
    shpenzimeKategori: c.shpenzime_kategori||['Qera','Rrogë','Faturë (energji/ujë)','Transport','Mirëmbajtje','Tjetër']
  };

  const productsOut = (products||[]).map(p=>({
    id:p.id, kod:p.kod, kategori:p.kategori, emri:p.emri||'', masa:p.masa||'',
    njesia:p.njesia, minStok:p.min_stok, cmimiBlerje:p.cmimi_blerje||0, cmimiShitje:p.cmimi_shitje||0
  }));

  const stock = { madhe:{}, dyqan:{} };
  (stockRows||[]).forEach(r=>{ stock[r.magazina] = stock[r.magazina]||{}; stock[r.magazina][r.product_id] = r.sasia; });

  const purchasesOut = (purchases||[]).map(r=>({
    id:r.id, nr:r.nr, data:r.data, furnitorId:r.furnitor_id, magazina:r.magazina,
    items:(purchaseItems||[]).filter(it=>it.purchase_id===r.id).map(it=>({productId:it.product_id, sasia:it.sasia, cmimi:it.cmimi})),
    nettotali:r.nettotali, tvshAplikuar:r.tvsh_aplikuar, tvshPerqindja:r.tvsh_perqindja, tvshVlera:r.tvsh_vlera, totali:r.totali
  }));

  const transfersOut = (transfers||[]).map(r=>({
    id:r.id, nr:r.nr, data:r.data, nga:r.nga, drejtBy:r.drejt_by, status:r.status,
    items:(transferItems||[]).filter(it=>it.transfer_id===r.id).map(it=>({productId:it.product_id, sasia:it.sasia}))
  }));

  const salesOut = (sales||[]).map(r=>({
    id:r.id, nr:r.nr, data:r.data, klientId:r.klient_id,
    items:(saleItems||[]).filter(it=>it.sale_id===r.id).map(it=>({productId:it.product_id, sasia:it.sasia, cmimi:it.cmimi})),
    nettotali:r.nettotali, tvshAplikuar:r.tvsh_aplikuar, tvshPerqindja:r.tvsh_perqindja, tvshVlera:r.tvsh_vlera,
    totali:r.totali, menyraPageses:r.menyra_pageses, mbetetFillestar:r.mbetet_fillestar
  }));

  return {
    products: productsOut,
    suppliers: (suppliers||[]).map(s=>({id:s.id, emri:s.emri, telefon:s.telefon})),
    customers: (customers||[]).map(c=>({id:c.id, emri:c.emri, telefon:c.telefon, adresa:c.adresa})),
    users: (users||[]).map(u=>({id:u.id, emri:u.emri, roli:u.roli, telefon:u.telefon, pin:u.pin, sistem:u.sistem})),
    stock,
    purchases: purchasesOut,
    transfers: transfersOut,
    sales: salesOut,
    payments: (payments||[]).map(r=>({id:r.id, data:r.data, klientId:r.klient_id, shuma:r.shuma, shenim:r.shenim})),
    cashMovements: (cashMovements||[]).map(r=>({id:r.id, data:r.data, lloji:r.lloji, shuma:r.shuma, pershkrim:r.pershkrim, saleId:r.sale_id, expenseId:r.expense_id})),
    expenses: (expenses||[]).map(r=>({id:r.id, data:r.data, kategori:r.kategori, pershkrim:r.pershkrim, shuma:r.shuma})),
    xhiroClosures: (xhiroClosures||[]).map(r=>r.payload||{id:r.id, data:r.data}),
    counters: countersRow ? {blerje:countersRow.blerje, transferim:countersRow.transferim, shitje:countersRow.shitje} : {blerje:0, transferim:0, shitje:0},
    config
  };
}

/* ---------------- NJOFTIME / KËRKESA (Dyqan <-> Magazina e Madhe) ----------------
   Këto NUK kalojnë nëpër mirror-in e plotë të state-it (për të mos rrezikuar
   fshirjen e mesazheve të anës tjetër nëse dikush ka state lokal të vjetëruar).
   Lexohen/shkruhen direkt te Supabase, sa herë hapet faqja ose çdo pak sekonda. */
async function fetchMessages(){
  const { data, error } = await sb.from('messages').select('*').order('created_at', { ascending:false }).limit(200);
  if(error){ console.error('fetchMessages', error); return []; }
  return data||[];
}
async function sendMessage(nga, drejt, teksti){
  const { error } = await sb.from('messages').insert({ nga, drejt, teksti, lexuar:false });
  if(error){ console.error('sendMessage', error); throw error; }
}
async function markMessagesRead(sys){
  const { error } = await sb.from('messages').update({ lexuar:true }).eq('drejt', sys).eq('lexuar', false);
  if(error){ console.error('markMessagesRead', error); }
}
async function fetchUnreadCount(sys){
  const { count, error } = await sb.from('messages').select('id', { count:'exact', head:true }).eq('drejt', sys).eq('lexuar', false);
  if(error){ console.error('fetchUnreadCount', error); return 0; }
  return count||0;
}
async function clearMessages(sysA, sysB){
  const { error } = await sb.from('messages').delete().or(`and(nga.eq.${sysA},drejt.eq.${sysB}),and(nga.eq.${sysB},drejt.eq.${sysA})`);
  if(error){ console.error('clearMessages', error); throw error; }
}
