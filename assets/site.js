
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

/* CLIENTSEITIGE SUCHE */
(function(){
  var lang=(document.documentElement.lang||'de').slice(0,2);
  var logo=document.querySelector('a.logo');
  var prefix=logo?logo.getAttribute('href').replace(/index\.html$/,''):'';
  var DE=[
   {u:'index.html',t:'Startseite',k:'home start leadership change human empowerment'},
   {u:'about/wer-wir-sind.html',t:'Wer wir sind',k:'ueber uns about purpose methode methodik warum synk haltung'},
   {u:'about/team.html',t:'Team',k:'team geschaeftsfuehrung gesellschafter trainer netzwerk menschen krauss krauter kuebler'},
   {u:'about/25-jahre.html',t:'25 Jahre SYNK',k:'25 jahre jubilaeum forum zukunft fuehren 2001 event spark'},
   {u:'about/aktuelles.html',t:'Aktuelles &amp; Veranstaltungen',k:'events termine forum zukunft fuehren news'},
   {u:'about/karriere.html',t:'Karriere',k:'jobs trainer associate freie mitarbeit bewerbung festanstellung'},
   {u:'leistungen/index.html',t:'Leistungen',k:'services beratung training coaching'},
   {u:'leistungen/leadership.html',t:'Leadership',k:'fuehrung leadership coaching einzelcoaching house of leadership'},
   {u:'leistungen/change.html',t:'Change',k:'transformation wandel change agents kultur'},
   {u:'leistungen/collaboration.html',t:'Collaboration',k:'teams zusammenarbeit diversity inclusion human empowerment vielfalt'},
   {u:'leistungen/digitale-loesungen.html',t:'Digitale L&ouml;sungen',k:'ki ai digital vr e-learning leada kuenstliche intelligenz fuehrung'},
   {u:'qualifizierung/index.html',t:'Qualifizierung',k:'programme ausbildung vergleich coach'},
   {u:'qualifizierung/european-business-coach.html',t:'European Business Coach',k:'ebc coaching ausbildung icf din zertifiziert foerderung'},
   {u:'qualifizierung/staerken-coach.html',t:'St&auml;rkenCoach',k:'staerken clifton charakterstaerken positive psychologie'},
   {u:'qualifizierung/systemischer-business-coach.html',t:'Systemischer Business Coach',k:'systemisch online fernstudium coach'},
   {u:'qualifizierung/future-leadership-reset.html',t:'Future Leadership Reset',k:'reset online foerderung foerderfaehig'},
   {u:'qualifizierung/young-women-leadership.html',t:'Young Women Leadership',k:'frauen women stipendium mentoring diversity'},
   {u:'qualifizierung/e-learning-ki.html',t:'E-Learning KI',k:'ki ai grundlagen eu ai act onboarding zertifikat'},
   {u:'wissen/leada.html',t:'Leada App',k:'leada ki app assistent datenschutz technik dsgvo'},
   {u:'wissen/buecher-artikel.html',t:'B&uuml;cher &amp; Artikel',k:'buecher artikel publikationen agile power guide fuehrung 2030 fachartikel'},
   {u:'wissen/podcast.html',t:'Podcast &bdquo;Every Day Counts&ldquo;',k:'podcast every day counts hoeren folgen'},
   {u:'projekte/index.html',t:'Projekte &amp; Kunden',k:'referenzen cases kunden filter impact wirkung'},
   {u:'projekte/bayer.html',t:'Bayer',k:'bayer lessons learned pharma'},
   {u:'projekte/deutsche-bahn.html',t:'Deutsche Bahn',k:'bahn db transition fuehrungskraft'},
   {u:'projekte/lufthansa.html',t:'Lufthansa Group',k:'lufthansa airline leadership starter'},
   {u:'projekte/stuttgart-airport.html',t:'Stuttgart Airport',k:'stuttgart airport house of leadership flughafen'},
   {u:'kontakt/index.html',t:'Kontakt',k:'kontakt anfrage telefon email termin'},
   {u:'impressum.html',t:'Impressum',k:'impressum legal'}
  ];
  var EN=[
   {u:'index.html',t:'Home',k:'home leadership change human empowerment'},
   {u:'about/wer-wir-sind.html',t:'Who we are',k:'about purpose method why synk attitude'},
   {u:'about/team.html',t:'Team',k:'team management partners trainers network people'},
   {u:'about/25-jahre.html',t:'25 Years of SYNK',k:'25 years anniversary forum future leadership 2001 event spark'},
   {u:'about/aktuelles.html',t:'News &amp; Events',k:'events forum future leadership news'},
   {u:'about/karriere.html',t:'Careers',k:'jobs trainer associate freelance application'},
   {u:'leistungen/index.html',t:'Services',k:'services consulting training coaching'},
   {u:'leistungen/leadership.html',t:'Leadership',k:'leadership coaching individual house of leadership'},
   {u:'leistungen/change.html',t:'Change',k:'transformation change agents culture'},
   {u:'leistungen/collaboration.html',t:'Collaboration',k:'teams diversity inclusion human empowerment'},
   {u:'leistungen/digitale-loesungen.html',t:'Digital Solutions',k:'ai digital vr e-learning leada artificial intelligence'},
   {u:'qualifizierung/index.html',t:'Qualification',k:'programmes training compare coach'},
   {u:'qualifizierung/european-business-coach.html',t:'European Business Coach',k:'ebc coaching training icf certified funding'},
   {u:'qualifizierung/staerken-coach.html',t:'StrengthsCoach',k:'strengths clifton positive psychology'},
   {u:'qualifizierung/systemischer-business-coach.html',t:'Systemic Business Coach',k:'systemic online distance coach'},
   {u:'qualifizierung/future-leadership-reset.html',t:'Future Leadership Reset',k:'reset online funding'},
   {u:'qualifizierung/young-women-leadership.html',t:'Young Women Leadership',k:'women scholarship mentoring diversity'},
   {u:'qualifizierung/e-learning-ki.html',t:'E-Learning AI',k:'ai fundamentals eu ai act onboarding certificate'},
   {u:'wissen/leada.html',t:'Leada App',k:'leada ai app assistant data protection gdpr'},
   {u:'wissen/buecher-artikel.html',t:'Books &amp; Articles',k:'books articles publications agile power guide fuehrung 2030'},
   {u:'wissen/podcast.html',t:'Podcast &bdquo;Every Day Counts&ldquo;',k:'podcast listen episodes'},
   {u:'projekte/index.html',t:'Projects &amp; Clients',k:'references cases clients filter impact'},
   {u:'projekte/bayer.html',t:'Bayer',k:'bayer lessons learned'},
   {u:'projekte/deutsche-bahn.html',t:'Deutsche Bahn',k:'db transition'},
   {u:'projekte/lufthansa.html',t:'Lufthansa Group',k:'lufthansa airline'},
   {u:'projekte/stuttgart-airport.html',t:'Stuttgart Airport',k:'stuttgart airport house of leadership'},
   {u:'kontakt/index.html',t:'Kontakt',k:'contact request phone email'},
   {u:'impressum.html',t:'Imprint',k:'imprint legal'}
  ];
  var PAGES=lang==='en'?EN:DE;
  var T=lang==='en'?{btn:'Search',ph:'Search the site ...',none:'No results',close:'Close'}:{btn:'Suche',ph:'Seite durchsuchen ...',none:'Keine Treffer',close:'Schließen'};
  var nav=document.getElementById('mainnav');if(!nav)return;
  var lens='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.5" y2="16.5"></line></svg>';
  var btn=document.createElement('button');btn.type='button';btn.className='nav-search';btn.setAttribute('aria-label',T.btn);btn.setAttribute('aria-haspopup','dialog');btn.innerHTML=lens+'<span>'+T.btn+'</span>';
  nav.insertBefore(btn,nav.firstChild);
  var ov=document.createElement('div');ov.className='search-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label',T.btn);
  ov.innerHTML='<div class="search-box"><input type="search" class="search-in" placeholder="'+T.ph+'" aria-label="'+T.ph+'" autocomplete="off"><button type="button" class="search-x" aria-label="'+T.close+'">&times;</button><ul class="search-res" role="listbox"></ul></div>';
  document.body.appendChild(ov);
  var input=ov.querySelector('.search-in'),res=ov.querySelector('.search-res');
  function draw(q){q=(q||'').trim().toLowerCase();var list;if(!q){list=PAGES.slice(0,8);}else{var terms=q.split(/\s+/);list=PAGES.map(function(p){var hay=(p.t+' '+p.k).toLowerCase();var sc=0;terms.forEach(function(tm){if(hay.indexOf(tm)>-1)sc++;if(p.t.toLowerCase().indexOf(tm)>-1)sc++;});return{p:p,sc:sc};}).filter(function(x){return x.sc>0;}).sort(function(a,b){return b.sc-a.sc;}).slice(0,8).map(function(x){return x.p;});}if(!list.length){res.innerHTML='<li class="search-none">'+T.none+'</li>';return;}res.innerHTML=list.map(function(p){return '<li role="option"><a href="'+prefix+p.u+'">'+p.t+'</a></li>';}).join('');}
  function open(){ov.classList.add('open');document.body.style.overflow='hidden';input.value='';draw('');setTimeout(function(){input.focus();},30);}
  function close(){ov.classList.remove('open');document.body.style.overflow='';btn.focus();}
  btn.addEventListener('click',open);
  ov.querySelector('.search-x').addEventListener('click',close);
  ov.addEventListener('click',function(e){if(e.target===ov)close();});
  input.addEventListener('input',function(){draw(input.value);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('open'))close();});
})();
