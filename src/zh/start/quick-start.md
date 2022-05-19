---
title: 快速开始
date: 2021-07-06
---

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
    HttpDebug: true,
  })
  if err != nil {
    panic(err)
  }
  response := WeComApp.Base.GetCallbackIp()
  log.Println(response)
}
```

返回结果：
```json
{
    "ip_list": ["101.226.103.*", "101.226.62.*"]
}
```

