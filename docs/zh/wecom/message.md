---
title: 消息发送
date: 2021-07-06
---



企业微信开放了消息发送接口，企业可以使用这些接口让自定义应用与企业微信后台或用户间进行双向通信。



## 发送应用文本消息

``` go
resSend, err := WeComApp.Message.Send(&power.HashMap{
  "touser"  : "walle",
  "msgtype" : "text",
  "agentid" : 1000004,
  "text" : &power.StringMap{
    "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。",
  },
  "safe":0,
  "enable_id_trans": 0,
  "enable_duplicate_check": 0,
  "duplicate_check_interval": 1800,
})
```



## 撤回应用消息

``` go
resRecall, err := WeComApp.Message.Recall(msgID)
```

`msgID`是发送消息成功之后得到的，例如: `resSend.MsgID`



---

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236)
