---
title: URL Scheme
date: 2021-07-06
---



## 小程序 scheme 码

获取小程序 scheme 码，适用于短信、邮件、外部网页、微信内等拉起小程序的业务场景。**通过该接口，可以选择生成到期失效和永久有效的小程序码，有数量限制**，目前仅针对国内非个人主体的小程序开放，详见[获取 URL scheme](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)。

``` go
MiniProgramApp.URLScheme.Generate(
  &power.HashMap{
    "path":  "[path]", // 已经发布的小程序存在的页面。例如：pages/home/home
    "query": "",  // 通过 scheme 码进入小程序时的 query
  },
  true, // 生成的 scheme 码类型，到期失效：true，永久有效：false。
  1, // 到期失效的 scheme 码失效类型，失效时间：0，失效间隔天数：1
  1606737600, // 到期失效的 scheme 码的失效时间，为 Unix 时间戳。
  30, // 到期失效的 scheme 码的失效间隔天数。
)

// output:
//{
//  "errcode": 0,
//  "errmsg": "ok",
//  "openlink": "weixin://dl/business/?t=NdQL2LeEQum"
//}

```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)
