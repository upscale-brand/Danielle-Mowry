(function(){
  "use strict";
  var sections=document.querySelectorAll('[data-motion-section]');
  if(!('IntersectionObserver' in window)){sections.forEach(function(s){s.classList.add('is-visible')});return;}
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){sections.forEach(function(s){s.classList.add('is-visible')});return;}
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  sections.forEach(function(section){observer.observe(section)});
})();
