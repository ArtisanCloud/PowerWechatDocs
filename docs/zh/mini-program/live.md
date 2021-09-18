---
title: 直播
date: 2021-07-06
---

## 直播间接口



### 创建直播间

``` go
MiniProgramApp.Broadcast.CreateRoom(&request.RequestBroadcastCreateRoom{
    Name:          "直播测试3",
    CoverImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
    StartTime:     1631923200,
    EndTime:       1631928200,
    AnchorName:    "Ange",
    AnchorWechat:  "WalleAI",
    ShareImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
    CloseLike:     0,
    CloseGoods:    0,
    CloseComment:  0,
    IsFeedsPublic: 0,
    CloseReplay:   0,
    CloseShare:    0,
    FeedsImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#1)

### 直播间列表

```go
MiniProgramApp.Broadcast.GetLiveInfo(&request.RequestBroadcastGetLiveInfo{
  Start: 0,
  Limit: 0,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#2)



### 获取直播间回放（TODO）

``` go

```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#3)



### 直播间导入商品 (TODO)

``` go
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#4)



### 删除直播间

``` go
MiniProgramApp.Broadcast.DeleteRoom(1)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#5)

### 编辑直播间

``` go
MiniProgramApp.Broadcast.EditRoom(&request.RequestBroadcastEditRoom{
    Id:            2,
    Name:          "直播测试",
    CoverImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
    StartTime:     1631923200,
    EndTime:       1631928200,
    AnchorName:    "Ange",
    AnchorWechat:  "WalleAI",
    ShareImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
    CloseLike:     0,
    CloseGoods:    0,
    CloseComment:  0,
    IsFeedsPublic: 0,
    CloseReplay:   0,
    CloseShare:    0,
    CloseKF:       0,
    FeedsImg:      "xisnqd5vEly5mjX9r3VjW1XGinnZjyEHcv0czEKYw8SBff7lixnbCIrE0QkgStj4",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#6)



### 获取直播间推流地址

``` go
MiniProgramApp.Broadcast.GetPushUrl(3)
```

[微信官方地址](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#7)



### 获取直播间分享二维码

``` go
MiniProgramApp.Broadcast.GetSharedCode(2, "a=1&b=2")
```

::: tip
第二个参数`params`如果存在特殊字符需要使用`encodeURIComponent`编码
:::

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#8)



### 添加管理直播间小助手

``` go
MiniProgramApp.Broadcast.AddAssistant(&request.RequestBroadcastAddAssistant{
  RoomID: 4,
  Users: []request.RequestBroadcastAddAssistantUser{
    {
      Username: "walle1",
      Nickname: "robot1",
    },
    {
      Username: "walle2",
      Nickname: "root2",
    },
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#9)

## 修改管理直播间小助手

``` go
MiniProgramApp.Broadcast.ModifyAssistant(&request.RequestBroadcastModifyAssistant{
  RoomID:   4,
  UserName: "walle1",
  NickName: "robot3",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#10)

