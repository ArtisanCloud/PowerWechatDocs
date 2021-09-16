---
title: 快速开始
date: 2021-07-06
---

安装完 PowerWechat，就可以按照以下方式使用了

以下用企业微信的实例来举例，获取 [企业微信服务器的ip段](https://open.work.weixin.qq.com/api/doc/90000/90135/90930)

```go
package main

import (
  "github.com/ArtisanCloud/go-libs/fmt"
  "github.com/ArtisanCloud/go-libs/object"
)

func main() {

    config := &object.HashMap{
    "corp_id":       "xxxxxx",
    "agent_id":      "xxxxx",
    "secret":        "xxxxxx",
    "response_type": "array",

    "debug":      false,
    "http_debug": false,
  }

  app, err := work.NewWork(config, nil)
  if err != nil {
    fmt.Dump(err.Error())
  }
  response := app.Base.GetCallbackIp()
  fmt.Dump(response)

}
```

返回结果：
```json
{
    "ip_list": ["101.226.103.*", "101.226.62.*"]
}
```



> ⚠️ 
> 
> "github.com/ArtisanCloud/go-libs/fmt"
>
> fmt.Dump() 可以换成 golang标准的fmt.print函数打印
> 
>  ---
> 
> "github.com/ArtisanCloud/go-libs/object"
>
> type HashMap map[string]interface{}