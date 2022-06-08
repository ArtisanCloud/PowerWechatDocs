---
title: 客户联系
date: 2021-09-25
---

# 客户联系

## 企业服务人员管理

### 获取配置了客户联系功能的成员列表 

``` go
WeComContactApp.ExternalContact.GetFollowUsers()
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92571)

### 客户联系「联系我」管理 

#### 配置客户联系「联系我」方式

``` go
options := &request.RequestAddContactWay{
  Type:          1,
  Scene:         1,
  Style:         1,
  Remark:        "渠道客户",
  SkipVerify:    true,
  State:         "teststate",
  User:          []string{"zhangsan", "lisi", "wangwu"},
  Party:         []int{2, 3},
  IsTemp:        true,
  ExpiresIn:     86400,
  ChatExpiresIn: 86400,
  UnionID:       "oxTWIuGaIt6gTKsQRLau2M0AAAA",
  Conclusions: &power.HashMap{
    "text": power.HashMap{
      "content": "文本消息内容",
    },
    "image": power.HashMap{
      "media_id": "MEDIA_ID",
    },
    "link": power.HashMap{
      "title":  "消息标题",
      "picurl": "https://example.pic.com/path",
      "desc":   "消息描述",
      "url":    "https://example.link.com/path",
    },
    "miniprogram": power.HashMap{
      "title":        "消息标题",
      "pic_media_id": "MEDIA_ID",
      "appid":        "wx8bd80126147dfAAA",
      "page":         "/path/index.html",
    },
  },
}

WeComContactApp.ExternalContactContactWay.Add(options)
```
#### 获取企业已配置的「联系我」方式

``` go
WeComContactApp.ExternalContactContactWay.Get("[config_id]")
```

#### 获取企业已配置的「联系我」列表

``` go
options := &request.RequestListContactWay{
  1622476800,
  1625068800,
  "CURSOR",
  1000,
}
WeComContactApp.ExternalContactContactWay.List(options)
```

#### 更新企业已配置的「联系我」方式

``` go
configID := c.DefaultQuery("configID", "42b34949e138eb6e027c123cba77fAAA")
options := &request.RequestUpdateContactWay{
  ConfigID: configID,
  RequestAddContactWay: request.RequestAddContactWay{
    Type:          1,
    Scene:         1,
    Style:         1,
    Remark:        "渠道客户",
    SkipVerify:    true,
    State:         "teststate",
    User:          []string{"zhangsan", "lisi", "wangwu"},
    Party:         []int{2, 3},
    IsTemp:        true,
    ExpiresIn:     86400,
    ChatExpiresIn: 86400,
    UnionID:       "oxTWIuGaIt6gTKsQRLau2M0AAAA",
    Conclusions: &power.HashMap{
      "text": power.HashMap{
        "content": "文本消息内容",
      },
      "image": power.HashMap{
        "media_id": "MEDIA_ID",
      },
      "link": power.HashMap{
        "title":  "消息标题",
        "picurl": "https://example.pic.com/path",
        "desc":   "消息描述",
        "url":    "https://example.link.com/path",
      },
      "miniprogram": power.HashMap{
        "title":        "消息标题",
        "pic_media_id": "MEDIA_ID",
        "appid":        "wx8bd80126147dfAAA",
        "page":         "/path/index.html",
      },
    },
  },
}

WeComContactApp.ExternalContactContactWay.Update(options)
```

#### 删除企业已配置的「联系我」方式

``` go
WeComContactApp.ExternalContactContactWay.Delete("[configID]")
```

#### 结束临时会话

``` go
WeComContactApp.ExternalContactContactWay.CloseTempChat("[userid]", "[external_userid]")
```

**客户联系「联系我」管理**的官方文档是同一页面

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92572)



## 客户管理

### 获取客户列表 

企业可通过此接口获取指定成员添加的客户列表。客户是指[配置了客户联系功能的成员](https://work.weixin.qq.com/api/doc/90000/90135/92113#13473/配置可使用客户联系功能的成员)所添加的外部联系人。没有配置客户联系功能的成员，所添加的外部联系人将不会作为客户返回。

``` go
WeComContactApp.ExternalContact.List("[userid]")
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92113)

### 获取客户详情 

企业可通过此接口，根据外部联系人的userid（[如何获取?](https://work.weixin.qq.com/api/doc/90000/90135/92114#15445)），拉取客户详情。

``` go
cursor := "" // 上次请求返回的next_cursor
WeComContactApp.ExternalContact.Get("[userid]", cursor)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92114)

### 批量获取客户详情 
``` go
userIDs := []string{c.DefaultQuery("walle", "matrix-x")}
cursor := "" // 上次请求返回的next_cursor
WeComContactApp.ExternalContact.BatchGet(userIDs, cursor, 100)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92994)

### 修改客户备注信息 
``` go
options := &request.RequestExternalContactRemark{
  UserID:         "matrix-x",
  ExternalUserID: "woAJ2GCAAAd1asdasdjO4wKmE8Aabj9AAA",
  Remark:         "备注信息",
  Description:    "描述信息",
  RemarkCompany:  "腾讯科技",
  RemarkMobiles:  []string{
    "13800000001",
    "13800000002",
  },
  RemarkPicMediaID: "MEDIAID",
}

WeComContactApp.ExternalContact.Remark(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92115)

### 客户联系规则组管理 

#### 获取规则组列表

``` go
cursor := "" // 上次请求返回的next_cursor
limit  := 1000
WeComContactApp.ExternalContactCustomerStrategy.List(cursor, limit)
```
#### 获取规则组详情

``` go
WeComContactApp.ExternalContactCustomerStrategy.Get(1) // strategy_id: 规则组id
```

#### 获取规则组管理范围

``` go
// strategy_id: 规则组id
// cursor: 分页游标，可为空
// limit: 每个分页的成员/部门节点数，默认为1000，最大为1000
WeComContactApp.ExternalContactCustomerStrategy.GetRange(1, cursor, 1000)
```

#### 创建新的规则组

``` go
options := &request2.RequestCustomerStrategyCreate{
  ParentID:     0,
  StrategyName: "NAME",
  AdminList: []string{
    "zhangsan",
    "lisi",
  },
  Privilege: request2.RequestCustomerStrategyCreatePrivilege{
    ViewCustomerList:        true,
    ViewCustomerData:        true,
    ViewRoomList:            true,
    ContactMe:               true,
    JoinRoom:                true,
    ShareCustomer:           true,
    OperResignCustomer:      true,
    SendCustomerMsg:         true,
    EditWelcomeMsg:          true,
    ViewBehaviorData:        true,
    ViewRoomData:            true,
    SendGroupMsg:            true,
    RoomDeduplication:       true,
    RapidReply:              true,
    OnjobCustomerTransfer:   true,
    EditAntiSpamRule:        true,
    ExportCustomerList:      true,
    ExportCustomerData:      true,
    ExportCustomerGroupList: true,
    ManageCustomerTag:       true,
  },
  Range: []request2.RequestCustomerStrategyCreateRange{
    {
      Type:   1,
      UserID: "zhangsan",
    },
    {
      Type:    2,
      PartyID: 1,
    },
  },
}
WeComContactApp.ExternalContactCustomerStrategy.Create(options)
```

#### 编辑规则组及其管理范围

``` go
options := &request2.RequestCustomerStrategyEdit{
  StrategyID:   1,
  StrategyName: "NAME",
  AdminList: []string{
    "zhangsan",
    "lisi",
  },
  Privilege: request2.RequestCustomerStrategyPrivilege{
    ViewCustomerList:        true,
    ViewCustomerData:        true,
    ViewRoomList:            true,
    ContactMe:               true,
    JoinRoom:                true,
    ShareCustomer:           true,
    OperResignCustomer:      true,
    SendCustomerMsg:         true,
    EditWelcomeMsg:          true,
    ViewBehaviorData:        true,
    ViewRoomData:            true,
    SendGroupMsg:            true,
    RoomDeduplication:       true,
    RapidReply:              true,
    OnjobCustomerTransfer:   true,
    EditAntiSpamRule:        true,
    ExportCustomerList:      true,
    ExportCustomerData:      true,
    ExportCustomerGroupList: true,
    ManageCustomerTag:       true,
  },
  RangeAdd: []request2.RequestCustomerStrategyRange{
    {
      Type:   1,
      UserID: "zhangsan",
    },
    {
      Type:    2,
      PartyID: 1,
    },
  },
  RangeDel: []request2.RequestCustomerStrategyRange{
    {
      Type:   1,
      UserID: "lisi",
    },
    {
      Type:    2,
      PartyID: 2,
    },
  },
}

WeComContactApp.ExternalContactCustomerStrategy.Edit(options)
```

#### 删除规则组

``` go
WeComContactApp.ExternalContactCustomerStrategy.Del(1) // strategy_id
```

客户联系规则组的官方文档都在同一页面

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94883)

## 客户标签管理
### 管理企业标签 

#### 获取企业标签库

``` go
tagIDs := []string{
  "etXXXXXXXXXX",
  "etYYYYYYYYYY",
}
groupIDs := []string{
  "etZZZZZZZZZZZZZ",
  "etYYYYYYYYYYYYY",
}
WeComContactApp.ExternalContactTag.GetCorpTagList(tagIDs, groupIDs)
```
#### 添加企业客户标签

``` go
options := &request.RequestTagAddCorpTag{
  GroupID:   "GROUP_ID",
  GroupName: "GROUP_NAME",
  Order:     1,
  Tag:       []request.RequestTagAddCorpTagFieldTag{
    {
      Name:  "TAG_NAME_1",
      Order: 1,
    },
    {
      Name:  "TAG_NAME_2",
      Order: 2,
    },
  },
}
WeComContactApp.ExternalContactTag.AddCorpTag(options)
```

#### 编辑企业客户标签

``` go
options := &request.RequestTagEditCorpTag{
  ID:        "TAG_ID",
  GroupName: "NEW_TAG_NAME",
  Order:     1,
  AgentID:   1000014, // 授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数
}
WeComContactApp.ExternalContactTag.EditCorpTag(options)
```

#### 删除企业客户标签

``` go
options := &request.RequestTagDelCorpTag{
  TagID: []string{"TAG_ID_1", "TAG_ID_2"},
  GroupID: []string{"GROUP_ID_1", "GROUP_ID_2"},
  AgentID: 1000014, // 授权方安装的应用agentid。仅旧的第三方多应用套件需要填此参数
}

WeComContactApp.ExternalContactTag.DelCorpTag(options)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92117)



### 管理企业规则组下的客户标签 

#### 获取指定规则组下的企业客户标签

``` go
options := &request.RequestTagGetStrategyTagList{
  TagID: []string{
    "etXXXXXXXXXX",
    "etYYYYYYYYYY"
  },
  GroupID: []string{
     "etZZZZZZZZZZZZZ",
     "etYYYYYYYYYYYYY"
  },
  StrategyID: 1,
}

WeComContactApp.ExternalContactTag.GetStrategyTagList(options)
```
#### 为指定规则组创建企业客户标签

``` go
options := &request.RequestTagAddStrategyTag{
  StrategyID: 1,
  GroupID:    "GROUP_ID",
  GroupName:  "GROUP_NAME",
  Order:      1,
  Tag: []request.RequestTagAddStrategyTagFieldTag{
    {
      Name:  "TAG_NAME_1",
      Order: 1,
    },
    {
      Name:  "TAG_NAME_2",
      Order: 2,
    },
  },
}

WeComContactApp.ExternalContactTag.AddStrategyTag(options)
```

#### 编辑指定规则组下的企业客户标签

``` go
options := &request.RequestTagEditStrategyTag{
  ID:    "GROUP_ID",
  Name:  "GROUP_NAME",
  Order: 1,
}
WeComContactApp.ExternalContactTag.EditStrategyTag(options)
```

#### 删除指定规则组下的企业客户标签

``` go
options := &request.RequestTagDelStrategyTag{
  TagID: []string{
    "TAG_ID_1",
    "TAG_ID_2",
  },
  GroupID: []string{
    "GROUP_ID_1",
    "GROUP_ID_2",
  },
}
WeComContactApp.ExternalContactTag.DelStrategyTag(options)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94882)



### 编辑客户企业标签 

``` go
options := &request.RequestTagMarkTag{
  UserID: "",
  ExternalUserID: "",
  AddTag: []string{
    "TAG_ID_1",
    "TAG_ID_2",
  },
  RemoveTag: []string{
    "GROUP_ID_3",
    "GROUP_ID_4",
  },
}

WeComContactApp.ExternalContactTag.MarkTag(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92118)

## 在职继承
### 分配在职成员的客户 
``` go
options := &request.RequestTransferCustomer{
  HandoverUserID:     "walle", // 原跟进成员的userid
  TakeoverUserID:     "matrix-x", // 接替成员的userid
  ExternalUserID:     []string{"woAJ2GCAAAXtWyujaWJHDDGi0mACAAAA"},
  TransferSuccessMsg: "您好，您的服务已升级，后续将由我的同事李四@腾讯接替我的工作，继续为您服务。",
}
WeComContactApp.ExternalContactTransfer.TransferCustomer(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92125)

### 查询客户接替状态 
``` go
options := &request.RequestTransferResult{
  HandoverUserID: "walle",
  TakeoverUserID: "matrix-x",
  Cursor:         "",
}
WeComContactApp.ExternalContactTransfer.TransferResult(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94088)

## 离职继承
### 获取待分配的离职成员列表 
``` go
pageID := 1
pageSize := 1000
cursor := ""
WeComContactApp.ExternalContactTransfer.GetUnassignedList(pageID, cursor, pageSize)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92124)

### 分配离职成员的客户 
``` go
options := &request.RequestResignedTransferCustomer{
  HandoverUserID: "walle",
  TakeoverUserID: "matrix-x",
  ExternalUserID: []string{"woAJ2GCAAAXtWyujaWJHDDGi0mACBBBB"},
}
WeComContactApp.ExternalContactTransfer.ResignedTransferCustomer(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94081)

### 查询客户接替状态 
``` go
options := &request.RequestResignedTransferResult{
  HandoverUserID: "walle",
  TakeoverUserID: "matrix-x",
  Cursor:         "",
}
WeComContactApp.ExternalContactTransfer.ResignedTransferResult(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94082)

### 分配离职成员的客户群 
``` go
options := &request.RequestGroupChatTransfer{
  ChatIDList: []string{
    "wrOgQhDgAAcwMTB7YmDkbeBsgT_AAAA",
    "wrOgQhDgAAMYQiS5ol9G7gK9JVQUAAAA"
  },
  NewOwner:   "walle",
}
WeComContactApp.ExternalContactTransfer.GroupChatTransfer(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92127)

## 客户群管理
### 获取客户群列表 

``` go
options := &request.RequestGroupChatList{
  StatusFilter: 0,
  OwnerFilter: &power.HashMap{
    "userid_list": []string{"abel"},
  },
  Cursor: "r9FqSqsI8fgNbHLHE5QoCP50UIg2cFQbfma3l2QsmwI",
  Limit:  10,
}
WeComContactApp.ExternalContactGroupChat.List(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92120)

### 获取客户群详情 
``` go
chatID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
bNeedName := true
WeComContactApp.ExternalContactGroupChat.Get(chatID, bNeedName)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92122)

### 客户群opengid转换 
``` go
openID := "oAAAAAAA"
WeComContactApp.ExternalContactGroupChat.OpenGIDToChatID(openID)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94822)

## 客户朋友圈
### 概述

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93506)

### 获取客户朋友圈全部的发表记录 

#### 获取企业全部的发表列表

``` go
options := &request.RequestGetMomentList{
  StartTime:  1605000000,
  EndTime:    1605172726,
  Creator:    "walle",
  FilterType: 1,
  Cursor:     "",
  Limit:      10,
}
WeComContactApp.ExternalContactMoment.GetMomentList(options)
```
#### 获取客户朋友圈企业发表的列表

``` go
momentID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
cursor := ""
limit := 100
WeComContactApp.ExternalContactMoment.GetMomentTask(momentID, cursor, limit)
```

#### 获取客户朋友圈发表时选择的可见范围

``` go
momentID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
cursor := ""
limit := 100
userID := "matrix-x"
WeComContactApp.ExternalContactMoment.GetMomentCustomerList(momentID, userID, cursor, limit)
```

#### 获取客户朋友圈发表后的可见客户列表

``` go
momentID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
cursor := ""
limit := 100
userID := "matrix-x"
WeComContactApp.ExternalContactMoment.GetMomentCustomerList(momentID, userID, cursor, limit)
```

#### 获取客户朋友圈的互动数据

``` go
momentID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
userID := "matrix-x"
WeComContactApp.ExternalContactMoment.GetMomentComments(momentID, userID)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93333)

### 客户朋友圈规则组管理 

#### 获取规则组列表

``` go
cursor := ""
limit := 100
WeComContactApp.ExternalContactMomentStrategy.List(cursor, limit)
```

#### 获取规则组详情

``` go
strategyID := 0
WeComContactApp.ExternalContactMomentStrategy.Get(strategyID)
```

#### 获取规则组管理范围

``` go
strategyID := 0
cursor := ""
limit := 100
WeComContactApp.ExternalContactMomentStrategy.GetRange(strategyID, cursor, limit)
```

#### 创建新的规则组

``` go
options := &request2.RequestMomentStrategyCreate{
  ParentID:     0,
  StrategyName: "NAME",
  AdminList: []string{
    "zhangsan",
    "lisi",
  },
  Privilege: &power.HashMap{
    "send_moment":                  true,
    "view_moment_list":             true,
    "manage_moment_cover_and_sign": true,
  },
  Range: []*power.HashMap{
    &power.HashMap{
      "type":   1,
      "userid": "zhangsan",
    },
    &power.HashMap{
      "type":    2,
      "partyid": 1,
    },
  },
}
WeComContactApp.ExternalContactMomentStrategy.Create(options)
```

#### 编辑规则组及其管理范围

``` go
options := &request2.RequestMomentStrategyEdit{
  StrategyID:   1,
  StrategyName: "NAME",
  AdminList: []string{
    "zhangsan",
    "lisi",
  },
  Privilege: &power.HashMap{
    "send_moment":                  true,
    "view_moment_list":             true,
    "manage_moment_cover_and_sign": true,
  },
  RangeAdd: []*power.HashMap{
    &power.HashMap{
      "type":   1,
      "userid": "zhangsan",
    },
    &power.HashMap{
      "type":    2,
      "partyid": 1,
    },
  },
  RangeDel: []*power.HashMap{
    &power.HashMap{
      "type":   1,
      "userid": "lisi",
    },
    &power.HashMap{
      "type":    2,
      "partyid": 2,
    },
  },
}
WeComContactApp.ExternalContactMomentStrategy.Edit(options)
```

#### 删除规则组

``` go
strategyID := 0
WeComContactApp.ExternalContactMomentStrategy.Del(strategyID)
```



[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/94890)

## 消息推送
### 创建企业群发 
``` go
options := &request.RequestSendWelcomeMsg{
  WelcomeCode: c.DefaultQuery("welcomeCode", "CALLBACK_CODE"),
  Text: &request.TextOfMessage{
    "文本消息内容",
  },
  Attachments: []*power.HashMap{
    &power.HashMap{
      "msgtype": "image",
      "image": power.HashMap{
        "media_id": "MEDIA_ID",
        "pic_url":  "http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0",
      },
    }, &power.HashMap{
      "msgtype": "link",
      "link": power.HashMap{
        "title":  "消息标题",
        "picurl": "https://example.pic.com/path",
        "desc":   "消息描述",
        "url":    "https://example.link.com/path",
      },
    }, &power.HashMap{
      "msgtype": "miniprogram",
      "miniprogram": power.HashMap{
        "title":        "消息标题",
        "pic_media_id": "MEDIA_ID",
        "appid":        "wx8bd80126147dfAAA",
        "page":         "/path/index.html",
      },
    }, &power.HashMap{
      "msgtype": "video",
      "video": power.HashMap{
        "media_id": "MEDIA_ID",
      },
    }, &power.HashMap{
      "msgtype": "file",
      "file":
      power.HashMap{
        "media_id": "MEDIA_ID",
      },
    },
  },
}
WeComContactApp.ExternalContactMessageTemplate.SendWelcomeMsg(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92135)

### 获取企业的全部群发记录 

#### 获取群发记录列表

``` go
options := &request.RequestGetGroupMsgListV2{
  ChatType:   "single",
  StartTime:  1605171726,
  EndTime:    1605172726,
  Creator:    "matrix-x",
  FilterType: 1,
  Limit:      50,
  Cursor:     "CURSOR",
}
WeComContactApp.ExternalContactMessageTemplate.GetGroupMsgListV2(options)
```

#### 获取群发成员发送任务列表

``` go
msgID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
limit := 1000
cursor := ""
WeComContactApp.ExternalContactMessageTemplate.GetGroupMsgTask(msgID, limit, cursor)
```

#### 获取企业群发成员执行结果

``` go
msgID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
userID := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"
limit := 1000
cursor := "wrOgQhDgAAMYQiS5ol9G7gK9JVAAAA"

WeComContactApp.ExternalContactMessageTemplate.GetGroupMsgSendResult(msgID, userID, limit, cursor)
```



[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93338)

### 发送新客户欢迎语 
``` go
options := &request.RequestSendWelcomeMsg{
  WelcomeCode: c.DefaultQuery("welcomeCode", "CALLBACK_CODE"),
  Text: &request.TextOfMessage{
    "文本消息内容",
  },
  Attachments: []*power.HashMap{
    &power.HashMap{
      "msgtype": "image",
      "image": power.HashMap{
        "media_id": "MEDIA_ID",
        "pic_url":  "http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0",
      },
    }, &power.HashMap{
      "msgtype": "link",
      "link": power.HashMap{
        "title":  "消息标题",
        "picurl": "https://example.pic.com/path",
        "desc":   "消息描述",
        "url":    "https://example.link.com/path",
      },
    }, &power.HashMap{
      "msgtype": "miniprogram",
      "miniprogram": power.HashMap{
        "title":        "消息标题",
        "pic_media_id": "MEDIA_ID",
        "appid":        "wx8bd80126147dfAAA",
        "page":         "/path/index.html",
      },
    }, &power.HashMap{
      "msgtype": "video",
      "video": power.HashMap{
        "media_id": "MEDIA_ID",
      },
    }, &power.HashMap{
      "msgtype": "file",
      "file":
      power.HashMap{
        "media_id": "MEDIA_ID",
      },
    },
  },
}
WeComContactApp.ExternalContactMessageTemplate.SendWelcomeMsg(options)
```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92137)

### 入群欢迎语素材管理 

#### 添加入群欢迎语素材

``` go
options := &request2.RequestGroupWelcomeTemplateAdd{
  Text: &request.TextOfMessage{
    "亲爱的%NICKNAME%用户，你好",
  },
  Image: &request.Image{
    "MEDIA_ID",
    "http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0",
  },
  Link: &request.Link{
    "消息标题",
    "https://example.pic.com/path",
    "消息描述",
    "https://example.link.com/path",
  },
  MiniProgram: &request.MiniProgram{
    "消息标题",
    "MEDIA_ID",
    "wx8bd80126147dfAAA",
    "/path/index",
  },
  File: &request.File{
    "1Yv-zXfHjSjU-7LH-GwtYqDGS-zz6w22KmWAT5COgP7o",
  },
  Video: &request.Video{
    "MEDIA_ID",
  },
  AgentID: 1000014,
  Notify:  1,
}
WeComContactApp.ExternalContactGroupWelcomeTemplate.AddGroupWelcomeTemplate(options)
```
#### 编辑入群欢迎语素材

``` go
options := &request2.RequestGroupWelcomeTemplateEdit{
  TemplateID: c.DefaultQuery("templateID", "TEMPLATEID"),
  Text: &request.TextOfMessage{
    "亲爱的%NICKNAME%用户，你好",
  },
  Image: &request.Image{
    "MEDIA_ID",
    "http://p.qpic.cn/pic_wework/3474110808/7a6344sdadfwehe42060/0",
  },
  Link: &request.Link{
    "消息标题",
    "https://example.pic.com/path",
    "消息描述",
    "https://example.link.com/path",
  },
  MiniProgram: &request.MiniProgram{
    "消息标题",
    "MEDIA_ID",
    "wx8bd80126147dfAAA",
    "/path/index",
  },
  File: &request.File{
    "1Yv-zXfHjSjU-7LH-GwtYqDGS-zz6w22KmWAT5COgP7o",
  },
  Video: &request.Video{
    "MEDIA_ID",
  },
  AgentID: 1000014,
  Notify:  1,
}
WeComContactApp.ExternalContactGroupWelcomeTemplate.EditGroupWelcomeTemplate(options)
```

#### 获取入群欢迎语素材

``` go
templateID := "TEMPLATEID"
WeComContactApp.ExternalContactGroupWelcomeTemplate.GetGroupWelcomeTemplate(templateID)
```

#### 删除入群欢迎语素材

``` go
templateID := "TEMPLATEID"
agentID, _ := 100001

services.WeComContactApp.ExternalContactGroupWelcomeTemplate.DelGroupWelcomeTemplate(templateID, int64(agentID))
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92366)

## 统计管理
### 获取「联系客户统计」数据 
``` go

```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92132)

### 获取「群聊数据统计」数据 
``` go

```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92133)

## 变更回调
### 概述 
``` go

```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92129)

### 事件格式 
``` go

```
[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/92130)


## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/tree/master/controllers/wecom/external-contact)