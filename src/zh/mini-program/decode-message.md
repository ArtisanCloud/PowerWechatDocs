---
title: 消息解密
date: 2021-07-06
---

# 消息解密

## 初始化实例

在使用小程序消息解密之前，请先参考[微信消息推送](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html)，你需要配置好`URL(服务器地址)`、`Token(令牌)`、

`EncodingAESKey(消息加密密钥)`。

``` go
```



## 处理微信Token验证请求

在配置完成保存的时候，微信会发送一条HTTP GET请求，来确保服务器配置正确，能够正常处理微信消息。

``` go
```



## 接收消息推送

::: tip
为了让消息推送内容格式支持强类型，避免我们在开发过程中反复找微信官方文档确认。PowerWeChat这边在尝试枚举微信的全部消息类型以及字段，如果微信消息类型有新增或者变更而PowerWeChat还没来得及同步更新，欢迎在Github上面提交PR或者是提交issue告诉我们。
:::

``` go
```

### 消息类型

以下是已经支持的枚举类型：

* 小程序直播长期订阅状态同步接口。[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/liveplayer/subscribe-api.html)
* 异步校验图片/音频是否含有违法违规内容。[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.mediaCheckAsync.html)

未来准备支持的枚举类型：

* 即时配送运力方使用相关事件。[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/immediate-delivery/by-provider/immediateDelivery.onAgentPosQuery.html)

* 物流助手运力方使用相关事件。[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/express/by-provider/logistics.getContact.html)


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/short-url.go)

