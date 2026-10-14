document.querySelectorAll('[data-tabs]').forEach(g=>{const b=g.querySelectorAll('.tabs button');b.forEach(x=>x.onclick=()=>{b.forEach(y=>y.classList.remove('on'));x.classList.add('on');g.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('on',p.id===x.dataset.t))})});
const eur=n=>'€ '+Math.round(n).toLocaleString('nl-NL');
function toolTotal(){let t=0;document.querySelectorAll('input[data-cost]').forEach(c=>{if(c.checked)t+=+c.dataset.cost});const o=document.getElementById('toolsum');if(o)o.textContent=eur(t);return t}
document.querySelectorAll('input[data-cost]').forEach(c=>c.onchange=()=>{toolTotal();roi()});
function roi(){const f=id=>+(document.getElementById(id)||{value:0}).value||0;if(!document.getElementById('fws'))return;
const cost=document.getElementById('toolsum')?toolTotal():f('kosten');const ki=document.getElementById('kosten');const c=ki?f('kosten'):cost;
const opbrengst=f('fws')*747+f('dbs')*497;const net=opbrengst-c;
document.getElementById('r-op').textContent=eur(opbrengst);document.getElementById('r-net').textContent=eur(net);
document.getElementById('r-roi').textContent=c>0?Math.round(net/c*100).toLocaleString('nl-NL')+'%':'–';
document.getElementById('r-be').textContent=Math.ceil(c/747)+' klant(en) Freelancer Website Service'}
document.querySelectorAll('.calc input').forEach(i=>i.oninput=roi);toolTotal();roi();
