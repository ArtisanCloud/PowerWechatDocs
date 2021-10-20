---
title: 统一服务消息
date: 2021-09-13
description: 下发小程序和公众号统一的服务消息
---

下发小程序和公众号统一的服务消息。

```go
MiniProgramApp.UniformMessage.Send(&request.RequestUniformMessageSend{
  ToUser: "openID",
  WeAppTemplateMsg: &request.WeAppTemplateMsg{
    TemplateID: "TEMPLATE_ID",
    Page:       "page/page/index",
    FormID:     "FORMID",
    Data: &power.HashMap{
      "keyword1": &power.HashMap{
        "value": "339208499",
      },
      "keyword2": &power.HashMap{
        "value": "2015年01月05日 12:30",
      },
      "keyword3": &power.HashMap{
        "value": "腾讯微信总部",
      },
      "keyword4": &power.HashMap{
        "value": "广州市海珠区新港中路397号",
      },
    },
    EmphasisKeyword: "keyword1.DATA",
  },
  MpTemplateMsg: &request.MPTemplateMsg{
    AppID:      services.MiniProgramApp.GetConfig().GetString("app_id", ""),
    TemplateID: "MTvUCMmZfl-Dv66C5fVWdf4zPJkYSaRbnrtk6DXIfTQ",
    Url:        "https://weixin.qq.com/download",
    MiniProgram: &request.MPTemplateMsgMiniProgram{
      AppID:    "xiaochengxuappid12345",
      PagePath: "index?foo=bar",
    },
    Data: &power.HashMap{
      "first": &power.HashMap{
        "value": "恭喜你购买成功！",
        "color": "#173177",
      },
      "keyword1": &power.HashMap{
        "value": "巧克力",
        "color": "#173177",
      },
      "keyword2": &power.HashMap{
        "value": "39.8元",
        "color": "#173177",
      },
      "keyword3": &power.HashMap{
        "value": "2014年9月22日",
        "color": "#173177",
      },
      "remark": &power.HashMap{
        "value": "欢迎再次购买！",
        "color": "#173177",
      },
    },
  },
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/uniform-message/uniformMessage.send.html)