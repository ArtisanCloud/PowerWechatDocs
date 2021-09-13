---
title: 入门
date: 2020-05-29
---

企业微信使用非常简单， 使用下面示例就可以初始化。

``` go

WeComApp, err := work.NewWork(&work.UserConfig{
  CorpID: "[corpId]", // 企业微信的app id
  AgentID:  "[agentId]", // 内部应用的app id
  Secret: "[app secret]", // 内部应用的app secret
  OAuth: work.OAuth{
    Callback: "https://wecom.artisan-cloud.com/callback",
    Scopes:   nil,
  },
  HttpDebug: true,
})

```



## UserConfig参数说明：

### CorpID

- 类型: `string`
- 必传: `是`
- 示例: `ww16143ea0101327cc` 

每个企业都拥有唯一的corpid，获取此信息可在管理后台“我的企业”－“企业信息”下查看“企业ID”（需要有管理员权限）。

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90665#corpid)

### AgentID

- 类型: `int`
- 必传: `是`
- 示例: `1000173` 

每个应用都有唯一的agentid。在管理后台->“应用与小程序”->“应用”，点进某个应用，即可看到agentid。

### Secret

- 类型: `string`
- 必传: `是`
- 示例: `Dv0oBVNA9pDdf1Ibf8Vnd7zUS7r69ToBL0CE9v5SA` 

secret是企业应用里面用于保障数据安全的“钥匙”，每一个应用都有一个独立的访问密钥，为了保证数据的安全，secret务必不能泄漏。
目前secret有：

- 自建应用secret。在管理后台->“应用与小程序”->“应用”->“自建”，点进某个应用，即可看到。
- 基础应用secret。某些基础应用（如“审批”“打卡”应用），支持通过API进行操作。在管理后台->“应用与小程序”->“应用->”“基础”，点进某个应用，点开“API”小按钮，即可看到。
- 通讯录管理secret。在“管理工具”-“通讯录同步”里面查看（需开启“API接口同步”）；
- 外部联系人管理secret。在“客户联系”栏，点开“API”小按钮，即可看到。

### OAuth.Callback

- 类型: `string`
- 必传: `是`
- 示例: `https://wecom.artisan-cloud.com/wecom/callback` 

使用企业微信OAuth2登录的回调地址。具体可以参考： [构造网页授权链接](https://open.work.weixin.qq.com/api/doc/90000/90135/91022) 和 [构造扫码登录链接](https://open.work.weixin.qq.com/api/doc/90000/90135/91019)。



---

更多配置说明请参考：

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90665)