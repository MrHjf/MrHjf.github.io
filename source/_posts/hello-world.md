---
title: 快速搭建Github Pages博客
tags:
 - hexo
 - git
---
前期环境准备, 下载`git` 和 `node`, 并在github上创建`***.github.io`仓库名。

## 快速开始

### 安装Hexo

``` bash
$ npm install -g hexo-cli
$ hexo init <folder>
$ cd <folder>
$ npm install
```

### 创建文章

``` bash
$ hexo new "My New Post"
```

[更多信息](https://hexo.io/docs/writing.html)

### 启动本地服务

``` bash
$ hexo server
```

[hexo server](https://hexo.io/docs/server.html)

### 静态文件生成

``` bash
$ hexo generate
```

[Generating](https://hexo.io/docs/generating.html)

### 部署到远程仓库

以git为例，需要先配置_config.yml
```
deploy:
  type: git
  repo: https://github.com/<username>/<username>.github.io.git
  branch: master
```

部署的过程会生成静态文件，放在public文件夹下，并把public下的文件发送到前面配置的远程仓库中。

``` bash
$ hexo deploy
```

[Deployment](https://hexo.io/docs/deployment.html)
