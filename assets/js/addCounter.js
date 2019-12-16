//引入
const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  document.body.appendChild(s);

  
//显示

const footer =document.getElementsByClassName('site-footer')[0]
console.log(footer);
const counter =document.createElement('p')
const poweredBy=document.getElementsByClassName('powered-by')[0]
console.log(poweredBy)
counter.innerHTML += '<span id="busuanzi_container_site_pv"> 本站访客数<span id="busuanzi_value_site_uv"></span>人次  本文总阅读量<span id="busuanzi_value_page_pv"></span>次</span>'
footer.insertBefore(counter,poweredBy)
counter.style.margin=0

