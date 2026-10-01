const $ = id => document.getElementById(id);
const eur = (n, d = 2) => n.toLocaleString('pt-PT', { minimumFractionDigits: d, maximumFractionDigits: d }) + ' €';
const num = (n, d = 2) => n.toLocaleString('pt-PT', { minimumFractionDigits: d, maximumFractionDigits: d });
function pickMiner() {
  const key = $('miner').value;
  if (key !== 'custom') { const m = SolarMining.MINERS[key]; $('th').value = m.th; $('watts').value = m.w; $('minerLink').href = m.url; $('minerLink').textContent = 'Ficha do ' + m.name + ' ↗'; $('minerLink').hidden = false; }
  else $('minerLink').hidden = true;
}
function render() {
  try {
    if (!$('form').checkValidity()) throw new Error('Há valores em falta ou fora dos limites indicados.');
    const p = Object.fromEntries(['surplusKwh','surplusHours','compPrice','th','watts','networkEh','reward','btcEur','poolFee'].map(k => [k, Number($(k).value)]));
    const r = SolarMining.evaluate(p);
    const price = ' preço de venda (' + num(p.compPrice, 3) + ' €/kWh)';
    $('perKwh').textContent = num(r.eurPerKwhMining, 3);
    $('vsComp').textContent = r.eurPerKwhMining > p.compPrice ? 'superior ao' + price : r.eurPerKwhMining < p.compPrice ? 'inferior ao' + price : 'igual ao' + price;
    $('energy').textContent = num(r.energy) + ' kWh/dia (' + num(r.hours, 1) + ' h)';
    $('unused').textContent = num(r.unusedSurplus) + ' kWh/dia';
    $('mineMonth').textContent = eur(r.mineEurDay * 30) + ' (' + Math.round(r.satsDay * 30).toLocaleString('pt-PT') + ' sats)';
    $('compMonth').textContent = eur(r.compEurDay * 30);
    $('diffMonth').textContent = (r.diffEurDay >= 0 ? '+' : '') + eur(r.diffEurDay * 30);
    $('solo').textContent = num(r.soloMonthChance * 100, 4) + ' % por mês';
    $('error').textContent = '';
  } catch (e) { ['perKwh','energy','unused','mineMonth','compMonth','diffMonth','solo'].forEach(id => $(id).textContent = '—'); $('vsComp').textContent = ''; $('error').textContent = e.message; }
}
$('miner').addEventListener('change', () => { pickMiner(); render(); });
$('form').addEventListener('input', e => { if (['th','watts'].includes(e.target.id)) { $('miner').value = 'custom'; $('minerLink').hidden = true; } render(); });
$('form').addEventListener('submit', e => e.preventDefault());
pickMiner(); render();
