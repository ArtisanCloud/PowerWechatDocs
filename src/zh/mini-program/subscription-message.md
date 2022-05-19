---
title: 订阅消息
date: 2021-07-06
description: 使用PowerWeChat发送订阅消息、对小程序模版增删改查等等
---

# 订阅消息

## 发送订阅消息

``` go
data := &power.HashMap{
  "phrase1": power.StringMap{
    "value": "已预约",
  },
  "thing2": power.StringMap{
    "value": "Cycle",
  },
  "time3": power.StringMap{
    "value": "15:30",
  },
  "thing4": power.StringMap{
    "value": "兴业太古汇",
  },
  "thing5": power.StringMap{
    "value": "开课3小时前",
  },
}
MiniProgramApp.SubscribeMessage.Send(&request.RequestSubscribeMessageSend{
  ToUser:           "OPENID",
  TemplateID:       "Y1471771tIQyEogSHjqCgD1P7iy52N_JYH-q0Sw7EvQ",
  Page:             "/pages/index/index",
  MiniProgramState: "developer",
  Lang:             "zh_CN",
  Data:             data,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)



## 获取小程序账号的类目

``` go
MiniProgramApp.SubscribeMessage.GetCategory()
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getCategory.html)

## 组合并添加至个人模板库

组合模板并添加至帐号下的个人模板库

``` go
MiniProgramApp.SubscribeMessage.AddTemplate('[tid]', []int{1, 2}, "测试数据")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.addTemplate.html)

## 删除账号下的个人模版

``` go
// priTmplID示例： MTvUCMmZfl-Dv66C5fVWdSP-HLWr_Eq-OPATYJW33BQ
MiniProgramApp.SubscribeMessage.DeleteTemplate("[priTmplID]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.deleteTemplate.html)

## 个人模板列表

当前帐号下的个人模板列表

``` go
MiniProgramApp.SubscribeMessage.GetTemplateList()
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getTemplateList.html)

## 获取所属类目公共模板标题

获取帐号所属类目下的公共模板标题

``` go
// ids。类目id，多个用逗号隔开。 例如：2,676
// start。 用于分页，表示从 start 开始。从 0 开始计数。
// limit。 用于分页，表示拉取 limit 条记录。最大为 30。
MiniProgramApp.SubscribeMessage.GetPubTemplateTitleList("[ids]", 0, 5)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getPubTemplateTitleList.html)

## 获取模板关键词列表

获取模板标题下的关键词列表

``` go
MiniProgramApp.SubscribeMessage.GetPubTemplateKeyWordsByID("[tid]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getPubTemplateKeyWordsById.html)
