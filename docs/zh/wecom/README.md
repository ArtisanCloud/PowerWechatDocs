---
title: 入门
date: 2020-05-29
---

## 使用之前

在使用之前，先按照下面方法初始化一个实例：

``` go
WeComApp, err := work.NewWork(&work.UserConfig{
  CorpID:  os.Getenv("app_id"),       // 企业微信的app id，所有企业微信共用一个。
  AgentID: AgentID,                   // 内部应用的app id
  Secret:  os.Getenv("wecom_secret"), // 内部应用的app secret
  OAuth: work.OAuth{
    Callback: "https://wecom.artisan-cloud.com/callback", //
    Scopes:   nil,
  },
  HttpDebug: true,
})
```

同时因为企业微信secret需要配置非常多个（`自建应用secret`、`基础应用secret`、`通讯录管理secret`、`外部联系人管理secret`等等），所以建议一个模块就初始化一个实例。

## UserConfig参数说明

### CorpID

- 类型: `string`
- 必传: `是`
- 示例: `ww16143ea0101327cc` 

每个企业都拥有唯一的corpid，获取此信息可在管理后台“我的企业”－“企业信息”下查看“企业ID”（需要有管理员权限）

### Secret

- 类型: `string`
- 必传: `是`
- 示例: `1e116d3db6d32322d3b1d8666232b097` 

secret是企业应用里面用于保障数据安全的“钥匙”，每一个应用都有一个独立的访问密钥，为了保证数据的安全，secret务必不能泄漏。

目前secret有：

- 自建应用secret。在管理后台->“应用与小程序”->“应用”->“自建”，点进某个应用，即可看到。
- 基础应用secret。某些基础应用（如“审批”“打卡”应用），支持通过API进行操作。在管理后台->“应用与小程序”->“应用->”“基础”，点进某个应用，点开“API”小按钮，即可看到。
- 通讯录管理secret。在“管理工具”-“通讯录同步”里面查看（需开启“API接口同步”）；
- 外部联系人管理secret。在“客户联系”栏，点开“API”小按钮，即可看到。

### Log （TODO）

- 类型: `miniProgram.Log`
- 必传: `否`
- 示例: 

``` go
miniProgram.Log{
  Level: "debug",  // 输出日志等级
  File:  "./wechat.log", //  输出日志文件
}
```

输出日志到指定文件。

### HttpDebug

- 类型: `bool`
- 必传: `否`
- 默认值：`false`

是否开启打印SDK调用微信API接口时候的日志，开启之后会显示出提交的参数和微信详情的数据，对于排查问题时候非常有帮助。

[微信官方文档](