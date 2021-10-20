---
title: URL Scheme
date: 2021-07-06
description: 使用PowerWeChat生成小程序scheme码用于短信、邮件、外部网页等场景。
---



## 小程序 scheme 码

获取小程序 scheme 码，适用于短信、邮件、外部网页、微信内等拉起小程序的业务场景。**通过该接口，可以选择生成到期失效和永久有效的小程序码，有数量限制**，目前仅针对国内非个人主体的小程序开放，详见[获取 URL scheme](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)。

``` go
MiniProgramApp.URLLink.Generate(&request.URLSchemeGenerate{
  JumpWxa: &request.JumpWxa{
    Path:  "/pages/publishHomework/publishHomework",
    Query: "from=powerwechat&author=artisancloud",
  },
  IsExpire:   true,
  ExpireTime: 1606737600,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)

