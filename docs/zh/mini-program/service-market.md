---
title: 服务市场
date: 2021-09-13
---

调用服务平台提供的服务。

```go
serviceID := "SERVICEID"
apiName := "APINAME"
clientMsgID := "CLIENTMSGID"
serviceData := &power.HashMap{
  "img_url":   "http://mmbiz.qpic.cn/mmbiz_jpg/7UFjuNbYxibu66xSqsQqKcuoGBZM77HIyibdiczeWibdMeA2XMt5oibWVQMgDibriazJSOibLqZxcO6DVVcZMxDKgeAtbQ/0",
  "data_type": 3,
  "ocr_type":  1,
}

services.AppMiniProgram.ServiceMarket.InvokeService(serviceID, apiName, serviceData, clientMsgID)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/service-market/serviceMarket.invokeService.html)
