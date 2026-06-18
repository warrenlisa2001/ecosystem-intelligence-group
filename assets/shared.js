// EIG Shared JavaScript
(function(){
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mnClose = document.querySelector('.mn-close');
  if(hamburger && mobileNav){
    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
    mnClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  document.querySelectorAll('.nav-item>button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.parentElement;
      document.querySelectorAll('.nav-item.open').forEach(i => {
        if(i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
  });
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('on');
    });
  }, {threshold: 0.1});
  reveals.forEach(el => observer.observe(el));
})();
