# 天津师范大学 iOS Club 主页

这里是天津师范大学，iOS[官网](https://TJNU-iOS-Club.github.io)的工程仓库页面。本项目使用 [hugo-academic](https://github.com/gcushen/hugo-academic) 作为项目模版，对外观进行了轻微的自定义。此外，本仓库启用了 [Travis-CI 流水线](https://travis-ci.org/c422/c422-src/builds)，，当 master 分支更新后，可以自动部署，无需手动编译。

## 网站介绍

**语言支持**：官网需要支持 **中文** 和 **英文** 两种语言。两种语言的内容，分别依靠  `content/en` 和 `content/zh` 中的 markdown 文件来区分。不同种语言的页面结构和内容不一定要对应，本模版甚至提供不同语言页面完全不同的可行性，但是在内容更新时，建议尽最大可能保证对应。

**内容划分**：官网内容分为 **成员（Member）**，**成果（Accomplishment）** 和 **文章（Post）**。接下来将简单介绍不同的内容在本仓库中的对应位置，具体的写作细节，将在下一章介绍。

- **成员（Member）**：对应 `content/x/author/NAME` 中的文件，每一位成员，应当分别创建自己的 **中英双语** 档案
- **成果（Accomplishment）**：对应 `content/x/accomplishment` 中的文件，每个成员请独立维护 **中英双语** 档案
- **文章（Post）**：对应 `content/x/post` 中的文件，可以只支持中文，但是要复制一份放在英文目录下

## 内容更新与维护

所有的开发工作均是基于 Git 和 GitHub 的，所以请学习好相关基础知识

### 本地开发

首先安装 [hugo](https://github.com/gohugoio/hugo)

获取代码

```bash
git clone https://github.com/TJNU-iOS-Club/BlogSrc-Of-TJNU-iOS-Club.git
cd BlogSrc-Of-TJNU-iOS-Club

# 更新 submodule
git submodule update --init --recursive
```

启动开发服务器

```bash
./view.sh
```

用浏览器打开 http://localhost:1313 可以看到实时更新的页面

### 官网更新

官网内容更新将通过对本仓库 **Pull Request** 来进行，详细的 Pull Request 方案，请查看 [CONTRIBUTING.md](https://github.com/TJUN-iOS-Club/BlogSrc-Of-TJNU-iOS-Club/blob/master/CONTRIBUTING.md)
