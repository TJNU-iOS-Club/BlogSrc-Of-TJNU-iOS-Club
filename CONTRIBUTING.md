# 如何更新官网内容

本文档将介绍如何通过 Pull Request 的形式对官网进行更新。

## 写作规范

**在开始写作之前请务必阅读：[中文排版指南](https://zhuanlan.zhihu.com/p/20506092)**

### 文字与排版

1. 中英文混排时，中英文之间需要有空格，例如：**Hello 世界**
1. 本模版的 markdown 文件开头的两个 `+++` 内部的内容，为 `toml` 格式的配置文件，这是 markdown 通用的添加配置文件的方案

### 图片使用

1. 所有需要放在**源码**中的图片，必须经过[图片压缩](https://tinypng.com/) 网站压缩之后才可放在源码中！切记，切记！
1. 所有 markdown 文章中需要用到的图片必须使用图床进行外链，此处推荐一个免费图床 [imgchr](https://imgchr.com/), 其无须注册即可使用；备选免费图床：[奕奕图床](https://img.eebk.com/)。
1. 关于图片备份，所有使用图床外链的图片，须放置 [Pic_Storage](https://github.com/TJNU-iOS-Club/Pic_Storage) 进行备份，仓库主页有详细的备份指南。

### 外部资源

1. 外部资源，如大型文件，请尽量保证放在能长期保存的地方，并且存留备份。
1. 视屏类资源可考虑上传至社团 [bilibili 官号](https://space.bilibili.com/472731247?from=search&seid=18104912749018562379)，然后进行外链至此官页。
1. 源码类资源可上传至 [TJUN iOS Club](https://github.com/TJNU-iOS-Club) 组织，然后外链至此官页。

## 内容管理

**所有内容可以只支持中文，但是要复制一份中文文档放在英文目录下，以确保中英文内容完全一致**

### 成员（Members）

对应 `content/x/authors/NAME` 中的文件。其中 `_index.md` 为个人基本信息，关键字段：

- `name`: 姓名，英文以 **FirstName LastName** 的格式编辑，中文以 **姓名** 的格式进行
- `authors`: 本文编辑者，在此只填一项，即自己的用户名，对应 `author` 目录下的子目录名
- `bio`: 个人简介，字符串格式
- `orgnizations`: 统一填写
    ```
    organizations = [ { name = "Tianjin Normal University", url = "http://www.tjnu.edu.cn" } ]
    ```
- `email`: 个人常用邮箱
- `user_group`: 当前社团的成员，请在此处填写 `["Current Members"]`，往届成员请填写 `["Former"]`。这里的内容对应 `member.md` 中的 `user_groups` 的定义

#### 新成员添加要求
新加入成员需满足四项成果之一，即获奖（Award），项目（Project），论文（Publication），奖学金（Scholarship）：

1. 拥有至少校级及以上的竞赛奖项
2. 拥有至少校级及以上的奖学金奖项
3. 成立校级及以上的项目，例如大创项目。
4. 发表学术论文，中英文论文都可收录
5. 拥有开源项目及并获得1千以上Stars

满足以上5点中的任意一点均可将个人信息发布在官网。新加入成员提交个人信息并申请加入Pr时，需同时提交并完善相关成果信息，一同提交以供考核相关信息的真实性。

### 历史（History）
对应 `content/x/home/history.md` 文件，每一个历史节点，对应 markdown 文件中的一个 `[[experience]]`，博客系统将自动将其按填写时间排序，关键字段：

- `title`：历史节点名称
- `location`：历史发生地点
- `date_start`：历史节点的开始时间
- `date_end`：历史节点的结束时间
- `description`：历史节点中的主要事迹描述

### 成果（Accomplishment）

1. **命名规则**: **名-类型-简述**，例如：**yangjin-awd-soiec2018**，表示本文件为 **yangjin** 的 **获奖** 成果，获奖项目的简述为 **soiec2018**。所有文件命名，统一使用 **小写英文**
    1. 类型枚举：
        1. **awd**：获奖（Award），如比赛奖项。在官网只统计校级以上的获奖。
        1. **pro**：项目（Project），例如大创立项。只统计校级及以上的项目。
        1. **pub**：论文（Publication），中英文论文均接受。
        1. **sch**：奖学金（Scholarship），记录校级即以上的奖学金，**特等奖学金** 和 **专项奖学金**等等，例如王克昌奖学金。
1. **配置字段**:
    1. `title`: 标题，格式：**[类型全称] 标题**
    1. `summary`: 简述，只在首页显示
    1. `date`: RFC 3339 格式的日期
    1. `tags`: 标签数组，第一个位置是类型全称，第二个位置开始，添加相应标签
    1. `authors`: 相关人员，如多人获奖，则需写多人名字
    1. `[header]`: 此处用于添加图片
    1. `正文`: 用于描述成果相关的内容，例如论文需要写 abstract 和下载地址，这部分只会在成果详情页显示。

**注意**: 如果某项目由多人完成，则只需建立一个项目，使用负责人名字命名。在项目的 `authors` 字段中填写其他成员。

### 活动（Activities）

对应 `content/x/project` 中的文件夹，一个活动对应一个文件夹。`featured.jpg` 为活动封面图，`index.md` 文件为活动的描述文件，其中填写的关键字为：

- `title`：活动标题
- `summary`: 显示在首页上的活动总结语
- `tags`: 活动类型，

    活动类型枚举：
    
    -  `Sharing`: 分享会
    -  `Apple Store`: Apple Store 线下授课活动
    -  `Camp`: 冬/夏令营
    -  `CCCC`: 移动应用创新赛
- `image` 选项下的 `caption` 是对封面解读语
- `image` 选项下的 `focal_point` 默认 `Smart` 就好
- `links` 选项默认填写如下内容：
    ```bash
       - icon: bold
         icon_pack: fas
         name: Follow
         url: https://space.bilibili.com/472731247?from=search&seid=18104912749018562379
    ```
- 剩余的四个选项 `url_code`、`url_pdf`、`url_slides` 和 `url_video` 分别选填文中涉及的源码、PDF、PPT 和 视频链接

### 文章（Post）

1. 收录每周分享会的笔记和 ppt，编写格式类似于成果页面。
1. 建议将每周分享会的 PPT 或者 keynote 转为多图，然后使用[图床](https://imgchr.com/)外链至文章中, 并在 [Pic_Storage](https://github.com/TJNU-iOS-Club/Pic_Storage) 进行备份。

## Git 操作

1. 推荐使用 [gitmoji](https://github.com/carloscuesta/gitmoji/) 工具来进行 commit，这样可以很好的添加直观的 commit message
1. Pull Request 工作流：
    1. **fork** `TJNU-iOS-Club/BlogSrc-Of-TJNU-iOS-Club`
    1. 在本机 clone 你 fork 后的仓库，然后 **新建新分支**，命名规则：**名/功能**，例如：**yangjin/awd-soiec2017**
    1. 在 `TJNU-iOS-Club/BlogSrc-Of-TJNU-iOS-Club` 中发起 pull request
    1. 更多内容，请参考 [Github - Pull Request](https://help.github.com/en/articles/about-pull-requests)
1. PR 过程中，管理员有义务保证每一个人的 PR 内容是完整的，其中包括：中英文是否齐全，所添加的外链是否可用，图片是否可见。
