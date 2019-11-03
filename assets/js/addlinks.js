let links=document.querySelectorAll(".col-12.col-sm-4")

let address =[
  'https://www.apple.com/cn/',
  'https://developer.apple.com/',
  'https://space.bilibili.com/472731247?from=search&seid=18104912749018562379'
]

for (let i = 0; i < links.length; i++) {
  links[i].onclick=function (){window.location=address[i];}
}

