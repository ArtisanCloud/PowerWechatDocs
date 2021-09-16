---
title: 入门
date: 2020-05-29
---

企业微信使用非常简单，使用`app, err := work.NewWork(config, nil)`来初始化。

``` go

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


```