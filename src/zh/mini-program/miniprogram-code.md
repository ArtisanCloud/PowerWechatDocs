---
title: 小程序码
date: 2021-07-06
description: 使用PowerWeChat生成小程序二维码、永久小程序码、临时小程序码等
---

# 小程序码


## 永久小程序二维码

获取小程序二维码，适用于需要的码数量较少的业务场景。**通过该接口生成的小程序码，永久有效，有数量限制**，详见[获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

``` go
services.MiniProgramApp.WXACode.CreateQRCode(&request.RequestQRCodeCreate{
  Path: "/page/index/index",
  Width: 300,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.createQRCode.html)

## 永久小程序码

获取小程序码，适用于需要的码数量较少的业务场景。**通过该接口生成的小程序码，永久有效，有数量限制**，详见[获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

``` go
MiniProgramApp.WXACode.Get(&request.RequestQRCodeGet{
  Path:      path,
  Width:     300,
  AutoColor: false,
  LineColor: []int{255, 0, 0},
  IsHyaLine: false,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.get.html)

## 临时小程序码

获取小程序码，适用于需要的码数量极多的业务场景。**通过该接口生成的小程序码，永久有效，数量暂无限制。** 更多用法详见 [获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

``` go
MiniProgramApp.WXACode.GetUnlimited(&request.RequestQRCodeGetUnlimited{
  Scene: "a=1",
  Page: page,
  Width: 430,
  AutoColor: false,
  LineColor: []int{0, 0, 0},
  IsHyaLine: false,
})
```



## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/wxacode.go)

