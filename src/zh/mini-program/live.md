---
title: 直播
date: 2021-07-06
description: 使用PowerWeChat可以方便的管理小程序直播，包含直播间、商品、主播、副手等管理
---

# 直播

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



### 获取直播间回放

``` go
MiniProgramApp.Broadcast.GetLiveReplay(&request.RequestBroadcastGetLiveReplay{
  Action: "get_replay",
  RoomID: 4,
  Start: 0,
  Limit: 0,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#3)



### 直播间导入商品

``` go
MiniProgramApp.Broadcast.AddGoods(&request.RequestBroadcastAddGoods{
  IDs:    []int{6, 7},
  RoomID: 3,
})
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

## 删除管理直播间小助手

``` go
MiniProgramApp.Broadcast.RemoveAssistant(&request.RequestBroadcastRemoveAssistant{
  RoomID:   4,
  UserName: "walle1",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#11)

### 查询管理直播间小助手

``` go
MiniProgramApp.Broadcast.GetAssistantList(4) // roomId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#12)

### 添加主播副号

``` go
MiniProgramApp.Broadcast.AddSubAnchor(3, "WalleAI") // roomId, wechatId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#13)

### 修改主播副号

``` go
MiniProgramApp.Broadcast.ModifySubAnchor(3, "WalleAI") // roomId, wechatId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#14)

### 删除主播副号

``` go
MiniProgramApp.Broadcast.DeleteSubAnchor(1) // roomId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#14)

### 获取主播副号

``` go
MiniProgramApp.Broadcast.GetSubAnchor(1) // roomId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#16)

###  开启/关闭直播间官方收录

``` go
MiniProgramApp.Broadcast.UpdateFeedPublic(2, 0) // roomID, isFeedsPublic
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#17)

### 开启/关闭回放功能

``` go
MiniProgramApp.Broadcast.UpdateReplay(1, 1) // roomID, closeReplay
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#18)

### 开启/关闭客服功能

``` go
MiniProgramApp.Broadcast.UpdateKF(2,1) // roomID, closeKF
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#19)

### 开启/关闭直播间全局禁言

``` go
MiniProgramApp.Broadcast.UpdateComment(2, 1) // roomID, banComment
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#20)

### 上下架商品

``` go
MiniProgramApp.Broadcast.GoodsSale(1, 7, 1) // roomID, goodsID, onSale
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#21)

### 删除直播间商品

``` go
MiniProgramApp.Broadcast.GoodsDeleteInRoom(3, 1) // roomdID, goodsId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#22)

### 推送商品

``` go
MiniProgramApp.Broadcast.GoodsPush(1, 1) // roomdID, goodsId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#23)

###  商品排序

``` go
MiniProgramApp.Broadcast.GoodsSort(1, []request.RequestBroadcastGoodsSort{
  {
    GoodsId: "7",
  },
  {
    GoodsId: "5",
  },
  {
    GoodsId: "6",
  }, 
}) // roomID, goods: 商品ID列表
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#24)

###  下载商品讲解视频

``` go
MiniProgramApp.Broadcast.GoodsVideo(1, 1) // roomId, goodsId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/studio-api.html#25)



## 商品管理接口

### 商品添加并提审

``` go
MiniProgramApp.Broadcast.GoodsAdd(&request.RequestBroadcastGoodsAdd{
  GoodsInfo: &request.RequestBroadcastGoodsAddInfo{
    CoverImgUrl: "PZjGoGn7b27AahidBpD-UwJ9823ayNlJ2qliDcU9uQMFSpYkRLxmx_RK0F-iBKj5",
    Name:        "TIT茶杯",
    PriceType:   1,
    Price:       99.5,
    //Price2:    150.5, // priceType为2或3时必填
    Url:             "pages/index/index",
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#1)

### 撤回商品审核

``` go
MiniProgramApp.Broadcast.GoodsResetAudit(&request.RequestBroadcastGoodsResetAudit{
  AuditID: 450889673,
  GoodsID: 7,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#2)

### 重新提交商品审核

``` go
MiniProgramApp.Broadcast.GoodsAudit(7) // goodsId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#3)

### 删除商品

``` go
MiniProgramApp.Broadcast.GoodsDelete(1) // goodsId
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#4)

### 更新商品

调用此接口可以更新商品信息，审核通过的商品仅允许更新价格类型与价格，审核中的商品不允许更新，未审核的商品允许更新所有字段， 只传入需要更新的字段。

``` go
MiniProgramApp.Broadcast.GoodsUpdate(&request.RequestBroadcastGoodsUpdate{
  GoodsInfo: &request.RequestBroadcastGoodsUpdateInfo{
    GoodsId:         1,
    CoverImgUrl:     "PZjGoGn7b27AahidBpD-UwJ9823ayNlJ2qliDcU9uQMFSpYkRLxmx_RK0F-iBKj5",
    Name:            "TIT茶杯",
    PriceType:       1,
    Price:           99.5,
    //Price2:        150.5, // priceType为2或3时必填
    Url:             "pages/index/index",
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#5)

### 获取商品状态

``` go
MiniProgramApp.Broadcast.GoodsInfo([]int{6, 7}) // goods_ids 最多支持一次获取20个商品状态
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#6)

### 获取商品列表

``` go
// offset 分页条数起点
// limit 分页大小。默认30，不超过100
// status 商品状态。0：未审核。1：审核中，2：审核通过，3：审核驳回
MiniProgramApp.Broadcast.GoodsList("[offset]", "[count]", "[status]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/commodity-api.html#7)



## 成员管理接口

### 设置成员角色

``` go
MiniProgramApp.Broadcast.AddRole("Walle1", 1) // username, role
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/role-manage.html#1)

### 解除成员角色

``` go
MiniProgramApp.Broadcast.DeleteRole("Walle1", 1) // username, role
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/role-manage.html#2)

### 查询成员列表

``` go
MiniProgramApp.Broadcast.GetRoleList(&request.RequestBroadcastGetRoleList{
  Role:    1,
  Offset:  0,
  Limit:   10,
  Keyword: "",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/role-manage.html#3)



## 长期订阅相关接口

### 长期订阅状态同步接口(TODO)

用户订阅小程序直播后会触发事件通知

``` go

```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/subscribe-api.html#长期订阅状态同步接口)

### 获取长期订阅用户

``` go
// limit 获取长期订阅用户的个数限制，默认200，最大2000
// page_break 翻页标记，获取第一页时不带，第二页开始需带上上一页返回结果中的page_break
MiniProgramApp.Broadcast.GetFollowers(1, 10)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/subscribe-api.html#1)

### 长期订阅群发接口

``` go
// roomID, openID array
MiniProgramApp.Broadcast.PushMessage(2, []string{"oC-vT5KfvgxATPoVl88oeTE-hnfE"})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/subscribe-api.html#2)

### 长期订阅群发结果回调

#### 回调说明

异步返回长期订阅群发最终结果

#### 回调URL配置

【mp.weixin.qq.com】->【小程序】->【开发】->【开发管理】->【开发设置】->【消息推送】

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/subscribe-api.html#3)
