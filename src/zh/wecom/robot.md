---
title: 群机器人
date: 2021-09-29
description: 使用PowerWechat可以快速的配置群聊机器人发送文本、图片、Mardown等消息到企业内部群聊消息里面
---

# 群机器人

在使用之前，请确认你已经配置过了企业内部群聊机器人，并且获得了`webhookurl`里面的`key`参数。

## 消息发送

### 文本类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := &request.GroupRobotMsgText{
  Content:             "广州今日天气：29度，大部分多云，降雨概率：60%",
  MentionedList:       []string{"wangqing", "@all"},
  MentionedMobileList: []string{"13800001111", "@all"},
}
WeComApp.GroupRobot.SendText(key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#文本类型)

### Markdown类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := &request.GroupRobotMsgMarkdown{
  Content: `实时新增用户反馈<font color=\"warning\">132例</font>，请相关同事注意。\n
    >类型:<font color=\"comment\">用户反馈</font>
    >普通用户反馈:<font color=\"comment\">117例</font>
    >VIP用户反馈:<font color=\"comment\">15例</font>`,
}
WeComApp.GroupRobot.SendMarkdown(ctx,key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#markdown类型)

### 图片类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := &request.GroupRobotMsgImage{
  Base64: "DATA",
  Md5:    "MD5",
}
WeComApp.GroupRobot.SendImage(ctx,key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#图片类型)

### 图文类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := []*request.GroupRobotMsgNewsArticles{
  {
    Title:       "中秋节礼品领取",
    Description: "今年中秋节公司有豪礼相送",
    Url:         "www.qq.com",
    PicUrl:      "https://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png",
  },
}
WeComApp.GroupRobot.SendNewsArticles(ctx,key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#图片类型)

### 文件类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := &request.GroupRobotMsgFile{
  MediaID: "3a8asd892asd8asd",
}
WeComApp.GroupRobot.SendFile(ctx,key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#文件类型)

### 模版卡片类型 (TODO)

``` go
key := "693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"
msg := &request.GroupRobotMsgTemplateCard{
  CardType: "text_notice",
  Source: request.TemplateCardSource{
    IconUrl: "https://wework.qpic.cn/wwpic/252813_jOfDHtcISzuodLa_1629280209/0",
    Desc:    "企业微信",
  },
  MainTitle: request.TemplateCardMainTitle{
    Title: "欢迎使用企业微信",
    Desc:  "您的好友正在邀请您加入企业微信",
  },
  EmphasisContent: request.TemplateCardEmphasisContent{
    Title: "100",
    Desc:  "数据含义",
  },
  SubTitleText: "下载企业微信还能抢红包！",
  HorizontalContentList: []request.TemplateCardHorizontalContentListItem{
    {
      KeyName: "邀请人",
      Value:   "张三",
    },
    {
      KeyName: "企微官网",
      Value:   "点击访问",
      Type:    1,
      Url:     "https://work.weixin.qq.com/?from=openApi",
    },
    {
      KeyName: "企微下载",
      Value:   "企业微信.apk",
      Type:    2,
      MediaID: "MEDIAID",
    },
  },
  JumpList: []request.TemplateCardJumpListItem{
    {
      Type:  1,
      Url:   "https://work.weixin.qq.com/?from=openApi",
      Title: "企业微信官网",
    },
    {
      Type:     2,
      AppID:    "APPID",
      PagePath: "PAGEPATH",
      Title:    "跳转小程序",
    },
  },
  CardAction: request.TemplateCardCardAction{
    Type:     1,
    Url:      "https://work.weixin.qq.com/?from=openApi",
    AppID:    "APPID",
    PagePath: "PAGEPATH",
  },
}
WeComApp.GroupRobot.SendTemplateCard(ctx,key, msg)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91770#模版卡片类型)



::: warning

每个机器人发送的消息不能超过20条/分钟。

:::

##  文件上传接口

```go 

path:="D:/test.jpg"
WeComApp.GroupRobot.UploadMedia(ctx,key, path)

```



> 素材上传得到media_id，该media_id仅三天内有效
> media_id只能是对应上传文件的机器人可以使用



## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/group-robot.go)
