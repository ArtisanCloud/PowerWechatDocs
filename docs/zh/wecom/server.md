---
title: 服务端
date: 2021-07-06
---

消息回调用于自建应用和企业微信进行双向通信。例如：用户发送消息到应用、自定义菜单操作、上报地理位置、上报进入应用事件、审批状态通知事件、外部联系人变更回调等等。

### 设置接收消息的参数

使用之前请先配置好URL、Token、EncodingAESKey。

``` go
app, err := work.NewWork(&work.UserConfig{
  CorpID:      "[corp_id]",      // 企业微信的app id，所有企业微信共用一个。
  AgentID:     "[agent_id]",     // 内部应用的app id
  Secret:      "[secret]",       // 内部应用的app secret
  Token:       "[token]",        // 内部应用的app token
  AESKey:      "[aes_key]",      // 内部应用的app aeskey
  CallbackURL: "[callback_url]", // 内部应用的场景回调设置
  OAuth: work.OAuth{
    Callback: "[app_oauth_callback_url]", // 内部应用的app oauth url
    Scopes:   nil,
  },
  HttpDebug: true,
})
```

### 验证URL有效性

这里接收一个标准的`http.Request`，PowerWeChat会自动帮你解析里面的参数，你只要将解析出来的string通过web框架返回给微信即可。

``` go
rs, err := services.WeComApp.Server.Serve(c.Request)
if err != nil {
  panic(err)
}
text, _ := ioutil.ReadAll(rs.Body)
// 这里是gin的使用方法，c *gin.Context
// c.String(http.StatusOK, string(text))
```

### 开始接收消息

终于，我们到了消息接收这一步，微信在一些事件变更的时候会推送消息过来。

``` go

```

