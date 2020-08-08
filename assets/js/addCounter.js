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

const dateTime=document.createElement('p')
footer.insertBefore(dateTime,counter)
dateTime.style.margin=0
function runtime(){
  // 初始时间，日/月/年 时:分:秒
  X = new Date("10/10/2019 00:00:00");
  Y = new Date();
  T = (Y.getTime()-X.getTime());
  M = 24*60*60*1000;
  a = T/M;
  A = Math.floor(a);
  b = (a-A)*24;
  B = Math.floor(b);
  c = (b-B)*60;
  C = Math.floor((b-B)*60);
  D = Math.floor((c-C)*60);
  //信息写入到DIV中
  dateTime.innerHTML = "本站已经运行:  "+A+" 天 "+B+" 小时 "+C+" 分 "+D+" 秒"
}
setInterval(runtime, 1000);

