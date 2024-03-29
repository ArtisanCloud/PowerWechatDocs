---
title: 微信客服
date: 2021-09-27
---

# 微信客服

## 概述
## 客服帐号管理
### 添加客服帐号 
``` go
mediaID := "294DpAog3YA5b9rT`K4PjjfRfYLO0L5qpDHAJIzhhQ2jAEWjb9i661Q4lk8oFnPtmj"
WeComApp.AccountService.Add(ctx,"新建的客服帐号", mediaID)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94662)

### 删除客服帐号 
``` go
openKFID := "wkAJ2GCAAAZSfhHCt7IFSvLKtMPxyJTw"
WeComApp.AccountService.Del(ctx,openKFID)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94663)

### 修改客服帐号 
``` go
options := &request.RequestAccountUpdate{
  ctx,
  OpenKFID: "wkAJ2GCAAAZSfhHCt7IFSvLKtMPxyJTw",
  Name:     "修改客服名",
  MediaID:  "294DpAog3YA5b9rTK4PjjfRfYLO0L5qpDHAJIzhhQ2jAEWjb9i661Q4lk8oFnPtmj",
}
WeComApp.AccountService.Update(ctx,options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94664)

### 获取客服帐号列表 
``` go
WeComApp.AccountService.List(ctx)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94661)

### 获取客服帐号链接 
``` go
openKFID := "wkAJ2GCAAAZSfhHCt7IFSvLKtMPxyJTw"
scene := "1234"
WeComApp.AccountService.AddContactWay(openKFID, scene)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94665)

## 接待人员管理
### 添加接待人员 
``` go
openKFID := "kfxxxxxxxxxxxxxx"
userIDList := []string{"zhangsan", "lisi"}
WeComApp.AccountServiceServicer.Add(ctx,openKFID, userIDList)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94646)

### 删除接待人员 
``` go
openKFID := "kfxxxxxxxxxxxxxx"
userIDList := []string{"zhangsan", "lisi"}
WeComApp.AccountServiceServicer.Del(ctx,openKFID, userIDList)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94647)

### 获取接待人员列表 
``` go
openKFID := "kfxxxxxxxxxxxxxx"
WeComApp.AccountServiceServicer.List(ctx,openKFID)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94645)

## 会话分配与消息收发
### 分配客服会话 

#### 获取会话状态

``` go
openKFID := "kfxxxxxxxxxxxxxx"
externalUserID := "wmxxxxxxxxxxxxxxxxxx"
WeComApp.AccountServiceState.Get(ctx,openKFID, externalUserID)
```
#### 变更会话状态

``` go
openKFID := "wkxxxxxxxxxxxxxxxxxx"
externalUserID := "wmxxxxxxxxxxxxxxxxxx"
serviceState := 3
servicerUserID := "zhangsan"

WeComApp.AccountServiceState.Trans(ctx,openKFID, externalUserID,serviceState,servicerUserID)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94669)

### 接收消息和事件 

当微信客户、接待人员发消息或有行为动作时，企业微信后台会将事件的回调数据包发送到企业指定URL；企业收到请求后，再通过读取消息接口主动读取具体的消息内容。

#### 回调事件 

接收并解析事件的方法见：[接收事件](https://work.weixin.qq.com/api/doc/90000/90135/94670#12977) （TODO: 这里需要改成docs的连接）。

#### 读取消息 

``` go
cursor := "4gw7MepFLfgF2VC5npN"
token := "ENCApHxnGDNAVNY4AaSJKj4Tb5mwsEMzxhFmHVGcra996NR"
limit := 1000

WeComApp.AccountServiceMessage.SyncMsg(ctx,cursor, token, limit)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94670)

### 发送消息 
``` go
options := &request.RequestAccountServiceSendMsg{
  ctx,
  ToUser:    "EXTERNAL_USERID",
  OpenKfid:  "kfxxxxxxxxxxxxxx",
  MsgID:     "MSGID",
  MsgType:   "text",
  Text: request.RequestAccountServiceMsgText{
    Content: "你购买的物品已发货，可点击链接查看物流状态http://work.weixin.qq.com/xxxxxx",
  },
}
WeComApp.AccountServiceMessage.SendMsg(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94677)

### 发送事件响应消息 
``` go
options := &request.RequestAccountServiceSendMsgOnEvent{
  ctx,
  Code:    "CODE",
  MsgID:   "MSG_ID",
  MsgType: "text", // 对应的消息体字段，目前支持文本与菜单消息，详见下文
  Text: request.RequestAccountServiceMsgText{
    Content: "欢迎咨询",
  },
}
WeComApp.AccountServiceMessage.SendMsgOnEvent(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/95122)

## 「升级服务」配置 

### 获取配置的专员与客户群 

``` go
WeComApp.AccountServiceCustomer.GetUpgradeServiceConfig(ctx)
```

### 为客户升级为专员或客户群服务 

``` go
options := &request.RequestUpgradeService{
  ctx,
  OpenKFID:       c.DefaultQuery("openKFID", "kfxxxxxxxxxxxxxx"),
  ExternalUserID: c.DefaultQuery("externalUserID", "wmxxxxxxxxxxxxxxxxxx"),
  Type:           2, 
  Member: &request.RequestUpgradeServiceMember{
    UserID:  c.DefaultQuery("member", "matrix-x"),
    Wording: "你好，我是你的专属服务专员zhangsan",
  }, // 推荐的服务专员，type等于1时有效
  GroupChat: &request.RequestUpgradeServiceGroupChat{
    ChatID:  "wraaaaaaaaaaaaaaaa",
    Wording: "欢迎加入你的专属服务群",
  }, // 推荐的客户群，type等于2时有效
}
WeComApp.AccountServiceCustomer.UpgradeService(options)
```

### 为客户取消推荐

``` go
openKFID := "kfxxxxxxxxxxxxxx"
externalUserID := "wmxxxxxxxxxxxxxxxxxx"
WeComApp.AccountServiceCustomer.CancelUpgradeService(openKFID, externalUserID)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94674)

## 其他基础信息获取

### 获取客户基础信息 
``` go
externalUserIDList := []string{"externalUserIDList", "matrix-x"}
WeComApp.AccountServiceCustomer.BatchGet(externalUserIDList)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/95159)


## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/tree/master/controllers/wecom/account-service)
