# 如何更新官网内容

本文档将介绍如何通过 Pull Request 的形式对官网进行更新。

## 写作规范

**在开始写作之前请务必阅读：[中文排版指南](https://zhuanlan.zhihu.com/p/20506092)**

### 文字与排版

1. 中英文混排时，中英文之间需要有空格，例如：**Hello 世界**
1. 本模版的 markdown 文件开头的两个 `+++` 内部的内容，为 `toml` 格式的配置文件，这是 markdown 通用的添加配置文件的方案

### 图片使用

1. 如果需要使用图片，可以放置在 `static/img` 下，在引用时，可以通过 `/static/img/xxx.png` 这样的路径进行引用。

### 外部资源

1. 外部资源，如大型文件，请尽量保证放在能长期保存的地方，并且存留备份。

## 内容管理

### 成员（Member）

对应 `content/x/author/NAME` 中的文件。其中 `_index.md` 为个人基本信息，关键字段：

- `name`: 姓名，英文以 **FirstName LastName** 的格式编辑，中文以 **姓名** 的格式进行
- `authors`: 本文编辑者，在此只填一项，即自己的用户名，对应 `author` 目录下的子目录名
- `bio`: 个人简介，字符串格式
- `orgnizations`: 统一填写
    ```
    organizations = [ { name = "Tianjin Normal University", url = "http://www.tjnu.edu.cn" } ]
    ```
- `email`: 个人常用邮箱
- `user_group`: 当前工作室的成员，请在此处填写 `["Current Members"]`，指导教师请填写 `["Advising Professors"]`，往届成员请填写 `["Former"]`。这里的内容对应 `member.md` 中的 `user_groups` 的定义

### 成果（Accomplishment）

1. **命名规则**: **名-类型-简述**，例如：**zhaoyiqin-awd-cccc2017**，表示本文件为 **zhaoyiqin** 的 **获奖** 成果，获奖项目的简述为 **cccc2017**。所有文件命名，统一使用 **小写英文**
    1. 类型枚举：
        1. **awd**：获奖（Award），如比赛奖项。在官网只统计校级以上的获奖
        1. **pro**：项目（Project），例如大创立项。
        1. **pub**：论文（Publication），中英文论文均接受。
        1. **sch**：奖学金（Scholarship），只记录 **特等奖学金** 和 **专项奖学金**，例如王克昌奖学金。
1. **配置字段**:
    1. `title`: 标题，格式：**[类型全称] 标题**
    1. `summary`: 简述，只在首页显示
    1. `date`: RFC 3339 格式的日期
    1. `tags`: 标签数组，第一个位置是类型全称，第二个位置开始，添加相应标签
    1. `authors`: 相关人员，如多人获奖，则需写多人名字
    1. `[header]`: 此处用于添加图片
    1. `正文`: 用于描述成果相关的内容，例如论文需要写 abstract 和下载地址，这部分只会在成果详情页显示。

**注意**: 如果某项目由多人完成，则只需建立一个项目，使用负责人名字命名。在项目的 `authors` 字段中填写其他成员。

### 文章（Post）

1. 建议收录每周分享的笔记和 ppt，编写格式类似于成果页面。

## Git 操作

1. 推荐使用 [gitmoji](https://github.com/carloscuesta/gitmoji/) 工具来进行 commit，这样可以很好的添加直观的 commit message
1. Pull Request 工作流：
    1. **fork** `c422/c422-src`
    1. 在本机 clone 你 fork 后的仓库，然后 **新建新分支**，命名规则：**名/功能**，例如：**zhaoyiqin/awd-cccc2017**
    1. 在 `c422/c422-src` 中发起 pull request
    1. 更多内容，请参考 [Github - Pull Request](https://help.github.com/en/articles/about-pull-requests)
1. PR 过程中，管理员有义务保证每一个人的 PR 内容是完整的，其中包括：中英文是否齐全，所添加的外链是否可用，图片是否可见。