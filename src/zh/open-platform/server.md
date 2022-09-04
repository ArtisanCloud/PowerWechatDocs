# 服务端

### 第三方平台推送事件

公众号第三方平台推送的有四个事件：

如已经授权的公众号、小程序再次进行授权，而未修改已授权的权限的话，是没有相关事件推送的。

* 授权成功 **authorized**
* 授权更新 **updateauthorized**
* 授权取消 **unauthorized**
* VerifyTicket **component_verify_ticket**

### 处理component_verify_ticket

``` go
rs, err := services.OpenPlatformApp.Server.Notify(context.Request, func(event *openplatform.Callback, decrypted []byte) (result interface{}) {
  result = kernel.SUCCESS_EMPTY_RESPONSE
  //fmt.Dump(event)
  msg := &openplatform.EventVerifyTicket{}
  err = xml.Unmarshal(decrypted, msg)
  if err != nil {
    return err
  }
  fmt.Dump(msg)

  return result
})

if err != nil {
  panic(err)
}

err = rs.Send(context.Writer)
if err != nil {
  panic(err)
}
```

### 处理其他消息回调

``` go
rs, err := services.OpenPlatformApp.Server.Notify(context.Request, func(event *openplatform.Callback, decrypted []byte) (result interface{}) {

  result = kernel.SUCCESS_EMPTY_RESPONSE
  msg := &openplatform.EventAuthorization{}
  err = xml.Unmarshal(decrypted, msg)
  if err != nil {
    return err
  }
  fmt.Dump(msg)

  return result
})

if err != nil {
  panic(err)
}

err = rs.Send(context.Writer)
if err != nil {
  panic(err)
}
```


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/open-platform/server.go)
