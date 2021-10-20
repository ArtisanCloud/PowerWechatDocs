---
title: 动态消息
date: 2021-09-13
description: 创建或者分享动态/私密消息
---

## 创建活动ID

创建被分享动态消息或私密消息的 activity_id。

```go
services.AppMiniProgram.UpdatableMessage.CreateActivityID("[unionID]", "[openID]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html)

## 更新活动消息

修改被分享的动态消息。

```go
MiniProgramApp.UpdatableMessage.SetUpdatableMsg(&request.RequestSetUpdatableMsg{
  ActivityID:  "[activityID]",
  TargetState: 0,
  TemplateInfo: &request.TemplateInfo{
    ParameterList: []*request.ParameterListItem{
      {
        Name:  "member_count",
        Value: "2",
      },
      {
        Name:  "room_limit",
        Value: "5",
      },
    },
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.setUpdatableMsg.html)