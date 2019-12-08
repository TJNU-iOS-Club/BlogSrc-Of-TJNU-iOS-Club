---
title: 用 Hexo 和 GitHub Pages 搭建个人博客的分享
summary: 对于一个计算机专业学生来说，写博客可以加深对技术的理解，记录自己的成长经历，可以结交更多志同道合的朋友。
tags:
- Sharing
date: "2019-11-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Hexo
  focal_point: Smart

links:
- icon: bold
  icon_pack: fas
  name: Follow
  url: https://space.bilibili.com/472731247?from=search&seid=18104912749018562379
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---
27日周三晚上，成员们如约来到博A106准备开始本周的分享会，本周的分享会是由范嘉文学长主讲，主要内容是用Hexo和GitHub Pages来搭建个人的博客~




## 写在前面



搭建个人博客，一般有三种方法：

- Wordpress：70%的网站都采用这个方法，商业化成熟，简单门槛低；
- 静态网页+博客框架：代表是Github Page+Hexo，有一定的技术门槛；
- 自己编写一个网站：前后端都自己实现。

为什么不用Wordpress？
钱！
为什么不自己编写？
难！

所以，第二种方法用**静态网页+博客框架**来搭建博客成了我们的最佳选择！

>Hexo 是一个简单、快速、强大的基于 Github Pages 的博客发布工具，支持Markdown格式，有众多优秀插件和主题。

而且使用 GitHub Pages 服务搭建博客有众多的好处：

- 全是静态文件，访问速度快；
- 免费方便，不用花一分钱就可以搭建一个自由的个人博客，不需要服务器不需要后台；
- 可以随意绑定自己的域名，不仔细看的话根本看不出来你的网站是基于 GitHub 的；
- 数据绝对安全，基于 GitHub 的版本管理，想恢复到哪个历史版本都行；
- 博客内容可以轻松打包、转移、发布到其它平台；



是不是迫不及待了呢？马上开始今天的分享~



## 搭建步骤



#### 1.安装 Git 、Node.js

Hexo 基于 Node.js，搭建过程中还需要使用 npm（Node.js 已带）和 git，因此先搭建本地操作环境，安装 Node.js 和 Git。

点击下载
[Node.js](https://nodejs.org/zh-cn)、[Git](https://git-scm.com/downloads)

#### 2.安装 Hexo

在合适位置新建文件夹，用来存放博客文件。在该⽬录下右键点击Git Bash Here，定位到该文件夹。

在该文件夹中使用 npm 一键安装 Hexo 博客程序：

    npm install -g hexo-cli

Mac 用户需要管理员权限（sudo），运行这条命令：

    sudo npm install -g hexo-cli

安装时耐心等待即可~

#### 3.连接 GitHub 仓库与本地

在 GitHub 上创建 GitHub pages 项，新建一个名为 username.github.io 的仓库。
博客文件夹下输⼊命令⽣成SSH Key：

    ssh-keygen -t rsa -C “user’s email"

在 GitHub 中建⽴SSH，将本地SSH输入到 GitHub 的SSH选项⾥即可建立连接~

#### 4.部署 Hexo 到 GitHub

修改 _conﬁg.yml ⽂件最后⼀⾏配置为：

    deploy:
      type: git  repository: https://github.com/username/username.github.io  
      branch: master

完成后运行

    hexo d 

将网站上传部署到 GitHub Pages。这时访问我们的 GitHub 域名 <https://username.github.io> 就可以看到 Hexo 网站了~

#### 5.发布文章

博客知名度想提高，内容的质量是不可或缺的一环。

进入博客所在目录，右键打开 Git Bash Here，创建博文：

    hexo new "My New Post"

然后 source 文件夹中会出现一个 My New Post.md 文件，就可以使用 Markdown 编辑器在该文件中撰写文章了。

写完后运行下面代码将文章渲染并部署到 GitHub Pages 上完成发布。以后每次发布文章都是这三条命令。

    hexo g   # 生成页面
    hexo s   # 本地预览
    hexo d   # 部署发布

#### 6.个性化

Hexo 官方提供的主题[下载](https://hexo.io/themes/)。

知乎上一些美化的方法[点击这里](https://zhuanlan.zhihu.com/p/69211731)。




***
**具体的步骤**[点击这里](https://godweiyang.com/2018/04/13/hexo-blog/)或者大家自行寻找资源，这里不多赘述~
**注**：搬运自韦阳大大的blog~
***



## 博客效果



分享一下学长的博客：

![QizBgP.png](https://s2.ax1x.com/2019/11/28/QizBgP.png)



同学们的：

![Qiq1eA.png](https://s2.ax1x.com/2019/11/28/Qiq1eA.png)


![QibwUx.md.png](https://s2.ax1x.com/2019/11/28/QibwUx.md.png)




## 总结



紧张的分享会很快就结束了，许多同学在学长的帮助下已经搭建好了属于自己的博客。个性化的主题固然必不可少，最重要的还是要不断去丰富自己博客的内容。**让其拥有更多有深度的内容，学习更多的专业知识**，才是我们作为一名计算机专业学生，作为一名准程序员更应该去做的事情，也是我们**iOS club**的初衷。希望同学们不断学习，不断丰富自己的博客，我们下次分享会再见~

---
<span style="color:#949494;font-size:16px">文章撰写：牛佳辉</span>

<span style="color:#949494;font-size:16px">内容排版：牛佳辉</span>

<span style="color:#949494;font-size:16px">全文校准：杨金</span>

---
