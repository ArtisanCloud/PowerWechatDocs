---
title: 插件管理
date: 2021-09-13
---


## 申请插件

向插件开发者发起使用插件的申请。

```go
openID := "openID"
rs, err := MiniProgramApp.CustomerServiceMessage.Send(openID, "text", &power.HashMap{
  "content": "Hello World",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.send.html)
