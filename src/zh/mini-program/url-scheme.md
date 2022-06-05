---
title: URL Scheme
date: 2022-07-06
description: 使用PowerWeChat生成小程序scheme码用于短信、邮件、外部网页等场景。
---

# URL Scheme

## 小程序 scheme 码

获取小程序 scheme 码，适用于短信、邮件、外部网页、微信内等拉起小程序的业务场景。**通过该接口，可以选择生成到期失效和永久有效的小程序码，有数量限制**，目前仅针对国内非个人主体的小程序开放，详见[获取 URL scheme](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)。

``` go
MiniProgramApp.URLLink.Generate(&request.URLLinkGenerate{
	EnvVersion:     "release",
	ExpireInterval: 1606737600,
	Path:           "pages/index/index",
	Query:          "a=1",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)

## 使用示例 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/url-scheme.go)