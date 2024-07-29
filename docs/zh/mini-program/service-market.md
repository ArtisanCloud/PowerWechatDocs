---
title: 服务市场
date: 2021-09-13
description: 使用PowerWeChat来调用小程序服务平台提供的服务
---

# 服务市场

调用服务平台提供的服务。

```go
serviceData := &power.HashMap{
  "img_url":   "http://mmbiz.qpic.cn/mmbiz_jpg/7UFjuNbYxibu66xSqsQqKcuoGBZM77HIyibdiczeWibdMeA2XMt5oibWVQMgDibriazJSOibLqZxcO6DVVcZMxDKgeAtbQ/0",
  "data_type": 3,
  "ocr_type":  1,
}
services.AppMiniProgram.ServiceMarket.InvokeService(ctx, &request.RequestServiceMarket{
  Service:     "SERVICEID",
  Api:         "APINAME",
  ClientMsgID: "CLIENTMSGID",
  Data:        serviceData,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/service-market/serviceMarket.invokeService.html)
