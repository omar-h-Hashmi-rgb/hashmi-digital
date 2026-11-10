/* premium pass 19: fluid typography, motion, micro-interactions */
(function(){
  var st=document.createElement('style');st.id='pp19';
  st.textContent=[
    ':root{--pp-accent:#7c5cff;--pp-accent2:#00d4ff;--pp-ease:cubic-bezier(.19,1,.22,1)}',
    'body{-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}',
    'h1,h2{font-size:clamp(2.2rem,5.2vw,4.6rem);letter-spacing:-.03em;line-height:1.03}',
    'h3{letter-spacing:-.015em}',
    'h1,h2,h3,.pp-grad{background:linear-gradient(100deg,#fff 30%,var(--pp-accent) 65%,var(--pp-accent2) 90%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}',
    '.pp-reveal{opacity:0;transform:translateY(28px) scale(.985);transition:opacity .9s var(--pp-ease),transform .9s var(--pp-ease)}',
    '.pp-in{opacity:1;transform:none}',
    'img,.card,.project-card,a[class*=card]{transition:transform .5s var(--pp-ease),box-shadow .5s var(--pp-ease)}',
    '.card:hover,.project-card:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(124,92,255,.18)}',
    'a,button{transition:color .3s var(--pp-ease),transform .3s var(--pp-ease)}',
    'a:hover{transform:translateY(-1px)}',
    'html{scroll-behavior:smooth}',
    '::selection{background:var(--pp-accent);color:#fff}',
    '@media (prefers-reduced-motion:reduce){.pp-reveal{opacity:1;transform:none;transition:none}}'
  ].join('\n');
  document.head.appendChild(st);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('pp-in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('section>*,.card,.project-card,h1,h2').forEach(function(el){el.classList.add('pp-reveal');io.observe(el)});
  setTimeout(function(){document.querySelectorAll('.pp-reveal').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('pp-in')})},300);
})();
