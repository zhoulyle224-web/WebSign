
const root=document.documentElement, loader=document.getElementById('loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('done'),1200));
const cursor=document.getElementById('cursor');
window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.panel').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'))});

document.querySelectorAll('[data-theme-btn]').forEach(btn=>btn.addEventListener('click',()=>{
  const theme=btn.dataset.themeBtn;root.dataset.theme=theme;document.querySelectorAll('[data-theme-btn]').forEach(b=>b.classList.toggle('active',b===btn));
  localStorage.setItem('interlinked-theme',theme);
}));
const saved=localStorage.getItem('interlinked-theme');if(saved && ['signal','relic'].includes(saved)){root.dataset.theme=saved;document.querySelectorAll('[data-theme-btn]').forEach(b=>b.classList.toggle('active',b.dataset.themeBtn===saved))}

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const sections=[...document.querySelectorAll('.section')],links=[...document.querySelectorAll('.rail a')];
const sectionIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const i=e.target.dataset.index;links.forEach(a=>a.classList.toggle('active',a.textContent===i))}}),{threshold:.5});sections.forEach(s=>sectionIO.observe(s));

const fig=document.getElementById('heroFigure');window.addEventListener('scroll',()=>{const y=window.scrollY;fig.style.transform=`translate3d(0,${Math.min(y*.055,42)}px,0) rotate(${Math.min(y*.002,1.2)}deg)`;document.querySelectorAll('[data-parallax]').forEach(el=>{const r=el.getBoundingClientRect();const f=parseFloat(el.dataset.parallax);el.style.transform=`translate3d(0,${(innerHeight/2-r.top)*f}px,0)`})},{passive:true});

const wrap=document.getElementById('trackWrap'), track=document.getElementById('track');let tx=0,drag=false,startX=0,startTx=0;
const clamp=()=>Math.max(-(track.scrollWidth-wrap.clientWidth),Math.min(0,tx));const render=()=>{tx=clamp();track.style.transform=`translate3d(${tx}px,0,0)`};
wrap.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();tx-=e.deltaY*.8}else tx-=e.deltaX;render()},{passive:false});
wrap.addEventListener('pointerdown',e=>{drag=true;startX=e.clientX;startTx=tx;wrap.setPointerCapture(e.pointerId)});wrap.addEventListener('pointermove',e=>{if(!drag)return;tx=startTx+(e.clientX-startX);render()});wrap.addEventListener('pointerup',()=>drag=false);wrap.addEventListener('pointercancel',()=>drag=false);
