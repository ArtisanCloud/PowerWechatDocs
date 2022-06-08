---
title: 应用管理
date: 2021-09-29
---

# 应用管理

## 获取应用

### 获取指令的应用详情

``` go
agentID := 100003
WeComApp.Agent.Get(agentID)
```

### 获取access_token对应的应用列表

``` go
WeComApp.Agent.List()
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90227)

## 设置应用

``` go
options := &request.RequestAgentSet{
  AgentID:              100003,
  ReportLocationFlag:  0,
  LogoMediaID:         "j5Y8X5yocspvBHcgXMSS6z1Cn9RQKREEJr4ecgLHi4YHOYP-plvom-yD9zNI0vEl",
  Name:                 "财经助手",
  Description:          "内部财经服务平台",
  RedirectDomain:      "open.work.weixin.qq.com",
  IsReportEnter:        0,
  HomeUrl:             "https://open.work.weixin.qq.com",
}
WeComApp.Agent.Set(options)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90227)

## 自定义菜单

### 创建菜单

``` go
options := &request.RequestMenuSet{
  Button: []request.RequestMenuSetButton{
    {
      Type: "click",
      Name: "今日歌曲",
      Key:  "V1001_TODAY_MUSIC",
    },
    {
      Name: "菜单",
      SubButton: []request.RequestMenuSetButton{
        {
          Type: "view",
          Name: "搜索",
          Url:  "http://www.soso.com/",
        },
        {
          Type: "click",
          Name: "赞一下我们",
          Key:  "V1001_GOOD",
        },
      },
    },
  },
}
WeComApp.Menu.Create(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90231)

### 获取菜单

``` go
WeComApp.Menu.Get()
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90232)

### 删除菜单

``` go
agentID := 100003
WeComApp.Menu.Delete(agentID)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90233)

## 设置工作台自定义展示

### 设置应用在工作台展示的模版

``` go
options := &request.RequestSetWorkbenchTemplate{
  AgentID: agentID,
  Type:    "image",
  Image: request.WorkBenchImage{
    Url:      "xxxx",
    JumpUrl:  "http://www.qq.com",
    PagePath: "pages/index",
  },
  ReplaceUserData: true,
}
WeComApp.AgentWorkbench.SetWorkbenchTemplate(options)
```



### 获取应用在工作台展示的模版

``` go
agentID := 1000005
WeComApp.AgentWorkbench.GetWorkbenchTemplate(agentID)
```



### 设置应用在用户工作台展示的数据

``` go
options := &request.RequestSetWorkBenchData{
  AgentID: 1000005,
  UserID:  "test",
  Type:    "keydata",
  KeyData: request.WorkBenchKeyData{
    Items: []request.WorkBenchKeyDataItem{
      {
        Key:      "待审批",
        Data:     "2",
        JumpUrl:  "http://www.qq.com",
        PagePath: "pages/index",
      },
      {
        Key:      "带批阅作业",
        Data:     "4",
        JumpUrl:  "http://www.qq.com",
        PagePath: "pages/index",
      },
      {
        Key:      "成绩录入",
        Data:     "45",
        JumpUrl:  "http://www.qq.com",
        PagePath: "pages/index",
      },
      {
        Key:      "综合评价",
        Data:     "98",
        JumpUrl:  "http://www.qq.com",
        PagePath: "pages/index",
      },
    },
  },
}
WeComApp.AgentWorkbench.SetWorkbenchData(options)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92535)

### 修改设置工作台自定义开关事件推送

管理员在管理端应用详情页的自定义工作台页面启用或者停用自定义工作台模式时，会推送接收修改设置工作台自定义开关事件推送到应用的回调url上（如果是第三方应用为数据回调url）。事件推送处理过程详见[接收消息与事件](https://work.weixin.qq.com/api/doc/90000/90135/92535#90000/90135/90237)。(TODO：需要修改成docs url)

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92535)


## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/agent.go)