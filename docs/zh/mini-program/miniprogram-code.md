---
title: 小程序码
date: 2021-07-06
---



## 永久小程序二维码

获取小程序二维码，适用于需要的码数量较少的业务场景。**通过该接口生成的小程序码，永久有效，有数量限制**，详见[获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

``` go
services.MiniProgramApp.WXACode.CreateQRCode("/pages/index/index", 430)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.createQRCode.html)

## 永久小程序码

获取小程序码，适用于需要的码数量较少的业务场景。**通过该接口生成的小程序码，永久有效，有数量限制**，详见[获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.get.html)

``` go
MiniProgramApp.WXACode.Get(
  "/pages/index/index", // 扫码进入的小程序页面路径，最大长度 128 字节，不能为空；对于小游戏，可以只传入 query 部分。
  430, // 二维码的宽度，单位 px。最小 280px，最大 1280px
  false, // auto_color 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
  &power.HashMap{
    "r": 0,
    "g": 0,
    "b": 0,
  },  // auto_color 为 false 时生效，使用 rgb 设置颜色
  false, // 是否需要透明底色，为 true 时，生成透明底色的小程序码
)
```



## 临时小程序码

获取小程序码，适用于需要的码数量极多的业务场景。**通过该接口生成的小程序码，永久有效，数量暂无限制。** 更多用法详见 [获取二维码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)。

``` go
MiniProgramApp.WXACode.GetUnlimited(
  "a=1", // scene 字段的值会作为 query 参数传递给小程序/小游戏。
  "/pages/index/index", // 字段说明参考上面获取永久小程序码
  430,
  false,
  &power.HashMap{
    "r": 0,
    "g": 0,
    "b": 0,
  },
  false,
)
```
