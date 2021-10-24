---
title: 消息发送
date: 2021-07-06
description: 使用PowerWeChat可以很方便的发送企业微信应用消息（文本、图片、语音、视频、图文等），以及撤回消息。
---



企业微信开放了消息发送接口，企业可以使用这些接口让自定义应用与企业微信后台或用户间进行双向通信。在使用PowerWeChat发送应用消息之前，请先确保你已经初始化过`WeComApp`实例。

## 发送应用消息

### 文本消息

``` go
import "github.com/ArtisanCloud/PowerWeChat/src/work/message/request"

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
  Text: &request.RequestText{
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
  Image: &request.RequestImage{
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
  Voice: &request.RequestVoice{
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
  Video: &request.RequestVideo{
    MediaID:     "MEDIA_ID",
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
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "file",
    AgentID:                1,
    Safe:                   0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  File: &request.RequestFile{
    MediaID: "1Yv-zXfHjSjU-7LH-GwtYqDGS-zz6w22KmWAT5COgP7o",
  },
}
WeComApp.Message.SendFile(messages)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236#%E6%96%87%E4%BB%B6%E6%B6%88%E6%81%AF)

### 文本卡片消息

``` go
messages := &request.RequestMessageSendTextCard{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1 | PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "textcard",
    AgentID:                1,
    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  TextCard: &request.RequestTextCard{
    Title:       "领奖通知",
    Description: "<div class=\"gray\">2016年9月26日</div> <div class=\"normal\">恭喜你抽中iPhone 7一台，领奖码：xxxx</div><div class=\"highlight\">请于2016年10月10日前联系行政同事领取</div>",
    Url:         "URL",
    BtnTXT:      "更多",
  },
}
WeComApp.Message.SendTextCard(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#%E6%96%87%E6%9C%AC%E5%8D%A1%E7%89%87%E6%B6%88%E6%81%AF)

### 图文消息

``` go
messages := &request.RequestMessageSendNews{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:  "UserID1|UserID2|UserID3",
    ToParty: "PartyID1 | PartyID2",
    ToTag:   "TagID1 | TagID2",
    MsgType: "news",
    AgentID: 1,

    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  News: &request.RequestNews{
    Article: []*request.RequestNewsArticle{
      {
        Title:       "中秋节礼品领取",
        Description: "今年中秋节公司有豪礼相送",
        URL:         "URL",
        PicURL:      "http://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png",
        AppId:       "wx123123123123123",
        PagePath:    "pages/index?userid=zhangsan&orderid=123123123",
      },
    },
  },
}
WeComApp.Message.SendNews(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#%E5%9B%BE%E6%96%87%E6%B6%88%E6%81%AF)

### 图文消息 (mpnews)

``` go
messages := &request.RequestMessageSendMPNews{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1 | PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "mpnews",
    AgentID:                1,
    Safe:                   0,
    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  MPNews: &request.RequestMPNews{
    Article: []*request.RequestMPNewsArticle{
      {
        Title:            "Title",
        ThumbMediaID:     "MEDIA_ID",
        Author:           "Author",
        ContentSourceURL: "URL",
        Content:          "Content",
        Digest:           "Digest description",
      },
    },
  },
}
WeComApp.Message.SendMpNews(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#%E5%9B%BE%E6%96%87%E6%B6%88%E6%81%AF%EF%BC%88mpnews%EF%BC%89)

### Markdown消息

``` go
messages := &request.RequestMessageSendMarkdown{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1|PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "markdown",
    AgentID:                1,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  Markdown: &request.RequestMarkdown{
    Content: `"您的会议室已经预定，稍后会同步到邮箱
      >**事项详情**
      >事　项：<font color=\"info\">开会</font>
      >组织者：@miglioguan
      >参与者：@miglioguan、@kunliu、@jamdeezhou、@kanexiong、@kisonwang
      >
      >会议室：<font color=\"info\">广州TIT 1楼 301</font>
      >日　期：<font color=\"warning\">2018年5月18日</font>
      >时　间：<font color=\"comment\">上午9:00-11:00</font>
      >
      >请准时参加会议。
      >
      >如需修改会议信息，请点击：[修改会议信息](https://work.weixin.qq.com)"`,
  },
}
WeComApp.Message.SendMarkdown(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#markdown%E6%B6%88%E6%81%AF)

### 小程序通知消息

``` go
messages := &request.RequestMessageSendMiniProgramNotice{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "zhangsan|lisi",
    ToParty:                "1|2",
    ToTag:                  "1|2",
    MsgType:                "miniprogram_notice",
    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  MiniProgramNotice: &request.MiniProgramNotice{
    Appid:             "wx123123123123123",
    Page:              "pages/index?userid=zhangsan&orderid=123123123",
    Title:             "会议室预订成功通知",
    Description:       "4月27日 16:16",
    EmphasisFirstItem: true,
    ContentItem: []*request.ContentItem{
      {
        Key:   "会议室",
        Value: "402",
      },
      {
        Key:   "会议地点",
        Value: "广州TIT-402会议室",
      },
      {
        Key:   "会议时间",
        Value: "2018年8月1日 09:00-09:30",
      },
      {
        Key:   "参与人员",
        Value: "周剑轩",
      },
    },
  },
}
WeComApp.Message.SendMiniProgramNotice(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%80%9A%E7%9F%A5%E6%B6%88%E6%81%AF)

### 模版卡片消息

#### 文本通知型

``` go
messages := &request.RequestMessageSendTemplateCard{
  RequestMessageSend: request.RequestMessageSend{
    ToUser:                 "UserID1|UserID2|UserID3",
    ToParty:                "PartyID1 | PartyID2",
    ToTag:                  "TagID1 | TagID2",
    MsgType:                "template_card",
    AgentID:                1,
    EnableIDTrans:          0,
    EnableDuplicateCheck:   0,
    DuplicateCheckInterval: 1800,
  },
  TemplateCard: &request.RequestTemplateCard{
    CardType: "text_notice",
    Source: &request.TemplateCardSource{
      IconUrl:   "图片的url",
      Desc:      "企业微信",
      DescColor: 1,
    },
    ActionMenu: &request.TemplateCardActionMenu{
      Desc: "卡片副交互辅助文本说明",
      ActionList: []*request.TemplateCardActionListItem{
        {Text: "接受推送", Key: "A"},
        {Text: "不再推送", Key: "B"},
      },
    },
    TaskID: "task_id",
    MainTitle: &request.TemplateCardMainTitle{
      Title: "欢迎使用企业微信",
      Desc:  "您的好友正在邀请您加入企业微信",
    },
    QuoteArea: &request.TemplateCardQuoteArea{
      Type:      1,
      Url:       "https://work.weixin.qq.com",
      Title:     "企业微信的引用样式",
      QuoteText: "企业微信真好用呀真好用",
    },
    EmphasisContent: &request.TemplateCardEmphasisContent{
      Title: "100",
      Desc:  "核心数据",
    },
    SubTitleText: "下载企业微信还能抢红包！",
    HorizontalContentList: []*request.TemplateCardHorizontalContentListItem{
      {
        Keyname: "邀请人",
        Value:   "张三",
      },
      {
        Type:    1,
        Keyname: "企业微信官网",
        Value:   "点击访问",
        Url:     "https://work.weixin.qq.com",
      },
      {
        Type:    2,
        Keyname: "企业微信下载",
        Value:   "企业微信.apk",
        MediaID: "文件的media_id",
      },
      {
        Type:    3,
        Keyname: "员工信息",
        Value:   "点击查看",
        UserID:  "zhangsan",
      },
    },
    JumpList: []*request.TemplateCardJumpListItem{
      {
        Type:  1,
        Title: "企业微信官网",
        Url:   "https://work.weixin.qq.com",
      },
      {
        Type:     2,
        Title:    "跳转小程序",
        AppID:    "小程序的appid",
        Pagepath: "/index.html",
      },
    },
    CardAction: &request.TemplateCardAction{
      Type:     2,
      Url:      "https://work.weixin.qq.com",
      AppID:    "小程序的appid",
      Pagepath: "/index.html",
    },
  },
}

WeComApp.Message.SendTemplateCard(messages)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90236#%E6%96%87%E6%9C%AC%E9%80%9A%E7%9F%A5%E5%9E%8B)

PowerWeChat还支持`图文展示型`、`按钮交互型`、`投票选择型`、`多项选择型`等，出于篇幅的原因没有一一列出，其他的类型也是在同一个结构体里面有定义，请自行使用。

## 撤回应用消息

``` go
resRecall, err := WeComApp.Message.Recall(msgID)
```

`msgID`是发送消息成功之后得到的，例如: `resSend.MsgID`

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90236)



## 消息回调

由于篇幅问题，放在了[服务端](server.html)
