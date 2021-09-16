---
title: 订阅消息
date: 2021-07-06
---



## 发送订阅消息

``` go
data := &power.HashMap{
  "number01": power.StringMap{
    "value": "339208499",
  },
  "date01": power.StringMap{
    "value": "2015年01月05日",
  },
  "site01": power.StringMap{
    "value": "TIT创意园",
  },
  "site02": power.StringMap{
    "value": "广州市新港中路397号",
  },
}

MiniprogramApp.SubscribeMessage.Send("[touser]", "[templateId]", "[page]", "[miniprogramState]", "[lang]", data)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)



## 获取小程序账号的类目

``` go
MiniprogramApp.SubscribeMessage.GetCategory()
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getCategory.html)

## 组合并添加至个人模板库

组合模板并添加至帐号下的个人模板库

``` go
MiniprogramApp.SubscribeMessage.AddTemplate('[tid]', []int{1, 2}, "测试数据")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.addTemplate.html)

## 删除账号下的个人模版

``` go
// priTmplID示例： MTvUCMmZfl-Dv66C5fVWdSP-HLWr_Eq-OPATYJW33BQ
MiniprogramApp.SubscribeMessage.DeleteTemplate("[priTmplID]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.deleteTemplate.html)

## 个人模板列表

当前帐号下的个人模板列表

``` go
MiniprogramApp.SubscribeMessage.GetTemplateList()
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getTemplateList.html)

## 获取所属类目公共模板标题

获取帐号所属类目下的公共模板标题

``` go
// ids。类目id，多个用逗号隔开。 例如：2,676
// start。 用于分页，表示从 start 开始。从 0 开始计数。
// limit。 用于分页，表示拉取 limit 条记录。最大为 30。
MiniprogramApp.SubscribeMessage.GetPubTemplateTitleList("[ids]", 0, 5)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getPubTemplateTitleList.html)

## 获取模板关键词列表

获取模板标题下的关键词列表

``` go
MiniprogramApp.SubscribeMessage.GetPubTemplateKeyWordsByID("[tid]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.getPubTemplateKeyWordsById.html)



