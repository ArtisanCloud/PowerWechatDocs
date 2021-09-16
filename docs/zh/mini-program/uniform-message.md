---
title: 统一服务消息
date: 2021-09-13
---

下发小程序和公众号统一的服务消息。

```go
openID := "OPENID"

mpTemplateMsg := &request.MPTemplateMsg{
  AppID:       MiniProgramApp.GetConfig().GetString("app_id","xxxxxxx"),
  TemplateID:  "XXXXmZfl-Dv66C5fVWdf4zPJkYSaRbnrtk6DXIfTQ",
  URL:         "",
  MiniProgram: "",
  Data:        nil,
}

MiniProgramApp.UniformMessage.Send(openID, nil, mpTemplateMsg)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/uniform-message/uniformMessage.send.html)