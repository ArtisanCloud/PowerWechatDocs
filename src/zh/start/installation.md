---
title: 安装
date: 2021-07-06
---

# 安装

请在安装好golang环境后，进入到你到项目目录下

``` bash
> cd {your_project_location}/{project-name}/
```

## 安装 PowerWeChat v3（推荐）

``` bash
> go get -u github.com/ArtisanCloud/PowerWeChat/v3/
```

v3版本已经推出。

* 接口添加context参数
* 解决v2的自动refresh token问题

如果有遇到问题，欢迎点击右上角联系我们。

## 安装 PowerWeChat v2

* 公众号在v2版本提供支持，其他部分V1接口有字段有重新统一风格
* v2版本稳定版本在v2.0.40



``` bash
> go get -u github.com/ArtisanCloud/PowerWeChat/v2/
```

## 安装 PowerWeChat v1

V1版本只包含了小程序、公众号、企业微信、微信支付等模块。除了紧急bug修复，不会再往里面增加新功能，请尽快迁移到V2版本

``` bash
> go get -u github.com/ArtisanCloud/PowerWeChat
```

::: tip

* golang版本 :  >=1.16
* golang官网 :  [国内镜像](https://golang.google.cn/dl/)
* goproxy镜像:  [goproxy.cn](https://goproxy.cn/)

:::
