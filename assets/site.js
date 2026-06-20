
document.addEventListener('DOMContentLoaded',function(){
  var b=document.getElementById('burger'), n=document.getElementById('mainnav');
  if(b&&n){ b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);document.body.classList.toggle('nav-open',o);});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.classList.remove('nav-open');});}); }
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window && !reduce){
    var secs=[].slice.call(document.querySelectorAll('section')).filter(function(s){return s.id!=='hero'&&s.id!=='configured';});
    secs.forEach(function(s){s.classList.add('reveal');});
    var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ob.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    secs.forEach(function(s){ob.observe(s);});
  }
});
