---
title: 动态消息
date: 2021-09-13
---

## 创建活动ID

创建被分享动态消息或私密消息的 activity_id。。

```go
openID := "OPENID"
unionID := "UNIONID"
services.AppMiniProgram.UpdatableMessage.CreateActivityID(unionID, openID)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html)

## 更新活动消息

修改被分享的动态消息。

```go
activityID := "activityID"

MiniprogramApp.UpdatableMessage.SetUpdatableMsg(activityID, 0, &power.HashMap{
  "parameter_list": []power.StringMap{
    power.StringMap{
      "name": "member_count",
      "value": "2",
    },
    power.StringMap{
      "name":  "room_limit",
      "value": "5",
    },
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.setUpdatableMsg.html)