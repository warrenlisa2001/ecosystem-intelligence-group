
const AR_SHARED = {
  'blog.healthcare':'نقطة تحول الذكاء الاصطناعي في الرعاية الصحية',
  'nav.home':'الرئيسية',
  'nav.intel':'الذكاء ▾',
  'nav.practices':'الممارسات',
  'nav.allareas':'جميع مجالات الذكاء ←',
  'nav.insights':'الرؤى ▾',
  'nav.briefing':'إحاطة تنفيذية',
  'nav.leadership':'القيادة',
  'nav.about':'من نحن',
  'nav.contact':'تواصل معنا',
  'nav.reqbrief':'اطلب إحاطة',
  'blog.esg':"تقارير الاستدامة ليست إجراءً شكليًا",
  'blog.supply':'الذكاء الاصطناعي الوكيل ومستقبل سلسلة التوريد',
  'blog.edu':'الاعتماد الأكاديمي ليس أوراقًا — بل إثبات',
  'blog.jobs':'حوكمة وتدريب الذكاء الاصطناعي: وظائف جديدة',
  'blog.agi':'الذكاء الاصطناعي الوكيل مقابل الذكاء العام',
  'd.agentic':'الذكاء الاصطناعي الوكيل',
  'd.sustain':'الاستدامة',
  'd.supply':'سلسلة التوريد والعمليات',
  'd.arch':'العمارة والتصميم الداخلي',
  'd.edu':'التعليم',
  'd.health':'الرعاية الصحية',
  'd.it':'تقنية المعلومات والرقمنة',
  'd.strategy':'التخطيط الاستراتيجي',
  'd.gov':'حوكمة الذكاء الاصطناعي',
  'd.train':'تدريب الذكاء الاصطناعي',
  'pill.supply':'سلسلة التوريد',
  'pill.arch':'العمارة',
  'footer.tag':'حيث يصنع الذكاء القيمة. الذكاء الاستراتيجي والتحول عبر عشرة مجالات. الإمارات · دول الخليج · الشرق الأوسط وشمال أفريقيا.',
  'footer.h.intel':'الذكاء',
  'footer.h.company':'الشركة',
  'footer.h.legal':'قانوني',
  'footer.aboutsib':'عن SIB',
  'footer.privacy':'سياسة الخصوصية',
  'footer.terms':'الشروط والأحكام',
};
const AR = Object.assign({}, AR_SHARED, (typeof AR_PAGE!=='undefined'?AR_PAGE:{}));

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==='ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ik]').forEach(el=>{
    const k = el.getAttribute('data-ik');
    if(el.dataset.enText===undefined) el.dataset.enText = el.textContent;
    el.textContent = (lang==='ar' && AR[k]) ? AR[k] : el.dataset.enText;
  });
  document.querySelectorAll('[data-ik-html]').forEach(el=>{
    const k = el.getAttribute('data-ik-html');
    if(el.dataset.enHtml===undefined) el.dataset.enHtml = el.innerHTML;
    el.innerHTML = (lang==='ar' && AR[k]) ? AR[k] : el.dataset.enHtml;
  });
  document.querySelectorAll('.lang-toggle-label').forEach(b=>{ b.textContent = lang==='ar' ? 'English' : 'العربية'; });
  window.SIB_LANG = lang;
  try{ localStorage.setItem('sib-lang', lang); }catch(e){}
}
function toggleLang(){ applyLang((window.SIB_LANG||'en')==='ar' ? 'en' : 'ar'); }

(function(){
  let saved = 'en';
  try{ saved = localStorage.getItem('sib-lang') || 'en'; }catch(e){}
  applyLang(saved);
})();
