
function openMob(){ document.getElementById('mobNav').classList.add('open'); }
function closeMob(){ document.getElementById('mobNav').classList.remove('open'); }
window.addEventListener('scroll',()=>{
  document.getElementById('nav').style.borderBottomColor = scrollY>20?'rgba(232,24,74,0.3)':'rgba(255,255,255,0.08)';
},{passive:true});
