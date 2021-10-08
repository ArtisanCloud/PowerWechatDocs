---
title: 消息发送
date: 2021-07-06
---



企业微信开放了消息发送接口，企业可以使用这些接口让自定义应用与企业微信后台或用户间进行双向通信。

## 发送应用消息

### 文本消息

``` go
messages := &request.RequestMessageSendText{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "text",
    AgentID:                1,
    Safe:                   0,
    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  Text: request.RequestText{
    Content: "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。",
  },
}
WeComApp.Message.SendText(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E6%96%87%E6%9C%AC%E6%B6%88%E6%81%AF)

### 图片消息

``` go
messages := &request.RequestMessageSendImage{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "image",
    AgentID:                1,
    Safe:                   0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  Image: request.RequestImage{
    MediaID: "MEDIA_ID",
  },
}
WeComApp.Message.SendImage(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E5%9B%BE%E7%89%87%E6%B6%88%E6%81%AF)

### 语音消息

``` go
messages := &request.RequestMessageSendVoice{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "voice",
    AgentID:                1,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  Voice: request.RequestVoice{
    MediaId: "MEDIA_ID",
  },
}
WeComApp.Message.SendVoice(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E8%AF%AD%E9%9F%B3%E6%B6%88%E6%81%AF)

### 视频消息

``` go
messages := &request.RequestMessageSendVideo{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "video",
    AgentID:                1,
    Safe:                   0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  Video: request.RequestVideo{
    MediaID:    "MEDIA_ID",
    Title:       "Title",
    Description: "Description",
  },
}
WeComApp.Message.SendVideo(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E8%A7%86%E9%A2%91%E6%B6%88%E6%81%AF)

### 文件消息

``` go
messages := &request.RequestMessageSendFile{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:  "UserID1|UserID2|UserID3",
    ToParty: "PartyID1|PartyID2",
    ToTag:   "TagID1 | TagID2",
    MsgType: "file",
    AgentID: 1,
    Safe:                     0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  File: request.RequestFile{
    MediaID: "1Yv-zXfHjSjU-7LH-GwtYqDGS-zz6w22KmWAT5COgP7o",
  },
}
WeComApp.Message.SendFile(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E6%96%87%E4%BB%B6%E6%B6%88%E6%81%AF)



## 撤回应用消息

``` go
resRecall, err := WeComApp.Message.Recall(msgID)
```

`msgID`是发送消息成功之后得到的，例如: `resSend.MsgID`



---

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236)
