---
title: 快速开始
date: 2021-07-06
---

# 观看视频

## 快速上手
<iframe src="//player.bilibili.com/player.html?aid=493543766&bvid=BV1tN411u7pV&cid=1334895408&p=1" scrolling="no" border="1" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
<br><br>

# 快速开始

安装完 PowerWechat，就可以按照以下方式使用了

以下用企业微信的实例来举例，获取 [企业微信服务器的ip段](https://open.work.weixin.qq.com/api/doc/90000/90135/90930)

```go
package main

import (
  "log"
)

func main() {
  WeComApp, err := work.NewWork(&work.UserConfig{
    CorpID:  "app_id",       // 企业微信的app id，所有企业微信共用一个。
    AgentID: 100001,         // 内部应用的app id
    Secret:  "wecom_secret", // 内部应用的app secret
    OAuth: work.OAuth{
      Callback: "https://wecom.artisan-cloud.com/callback",
      Scopes:   nil,
    },
    Log: work.Log{
        Level:  "debug",
        File: "./wechat.log",
        Stdout: false, //  是否打印在终端
    },
    HttpDebug: true,
  })
  if err != nil {
    panic(err)
  }
  response,_ := WeComApp.Base.GetCallbackIP(context.Background())
  log.Println(response)
}
```

返回结果：
```json
{
    "ip_list": ["101.226.103.*", "101.226.62.*"]
}
```
