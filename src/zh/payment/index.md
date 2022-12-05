---
title: 入门
date: 2021-07-06
---

# 微信支付入门

在使用之前，请先阅读[官方文档API V3](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay-1.shtml) 了解微信支付的大致工作流程。

微信支付是独立的一个服务，能够支持公众号、小程序、JSSDK、企业微信支付等平台，所以我们这边Payment拆分成了一个单独的实例。

## Payment实例初始化

``` go

PaymentService, err := payment.NewPayment(&payment.UserConfig{
  AppID:       "[app_id]",         // 小程序、公众号或者企业微信的appid
  MchID:       "[mch_id]",         // 商户号 appID
  MchApiV3Key: "[mch_api_v3_key]", //
  Key:         "[key]",
  CertPath:    "[wx_cert_path]",
  KeyPath:     "[wx_key_path]",
  SerialNo:    "[serial_no]",
  NotifyURL:   "[notify_url]",
  HttpDebug:   true,
  Log: payment.Log{
    Level: "debug",
    File:  "./wechat.log",
  },
  Http: payment.Http{
    Timeout: 30.0,
    BaseURI: "https://api.mch.weixin.qq.com",
  },
  // 可选，不传默认走程序内存
  Cache: kernel.NewRedisClient(&kernel.RedisOptions{
    Addr:     "127.0.0.1:6379",
    Password: "",
    DB:       0,
  }),
})
```

## UserConfig参数说明：

### AppID

- 类型: `string`
- 必传: `是`
- 示例: `ww16143ea0101327cc` 

小程序、公众号或者企业微信的appId。 

### MchID

- 类型: `string`
- 必传: `是`
- 示例: `1611854986` 

微信支付商户号ID

### MchApiV3Key

- 类型: `string`
- 必传: `是`
- 示例: `1611854986` 

微信商户里面设置的API V3密钥。参考官方文档: [API v3密钥](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_2.shtml)


### Key
- 类型: `string`
- 必传: `是`
- 示例: `管理员设置的随机数` 

微信商户里面设置的API V2密钥。参考官方文档: [配置API key](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/guide/Configure_API_key.shtml)


### CertPath

- 类型: `string`
- 必传: `是`
- 示例: `/.../apiclient_cert.pem` 

微信商户里面设置的API V3证书。参考官方文档: [私钥和证书](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_1.shtml)


### KeyPath

- 类型: `string`
- 必传: `是`
- 示例: `/.../apiclient_key.pem` 

API V3私钥。

### SerialNo
- 类型: `string`
- 必传: `是`
- 示例: `2655A2CD634B06C2A86B28780228A997D047B01A` 

微信支付V3证书的序列号。
获取证书调用方法：
``` bash
openssl x509 -noout -serial -in /.../apiclient_cert.pem
```
正常的情况下会输出：
```
> serial=2655A2CD634B06C2A86B28780228A997D047B01A
```

### NotifyURL

- 类型: `string`
- 必传: `是`
- 示例: `https://pay.artisan-cloud.cn/wx/notify` 

微信支付完成后的通知回调地址。参考官方文档: [支付通知API](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_5.shtml)


### Log 

- 类型: `payment.Log`
- 必传: `否`
- 示例: 
``` go
payment.Log{
  Level: "debug",  // 输出日志等级
  File:  "./wechat.log", //  输出日志文件
}
```
输出日志到指定文件。

### Http

- 类型: `payment.Http`
- 必传: `否`
- 示例: 
``` go
payment.Http{
  Timeout: 30.0,
  BaseURI: "https://api.mch.weixin.qq.com",
}
```

设置微信支付地址，比如想要设置成沙盒地址，把里面的值改成`https://api.mch.weixin.qq.com/sandboxnew`就可以啦。

### HttpDebug

- 类型: `bool`
- 必传: `否`
- 默认值：`false`

是否开启打印SDK调用微信API接口时候的日志，开启之后会显示出提交的参数和微信详情的数据，对于排查问题时候非常有帮助。

### Cache

- 类型: `CacheInterface`
- 必传: `否`
- 默认值：`nil`

如果需要实现Token中控，例如多个应用实例共享或者和其他应用共享Token。

更多详细内容请参考： [Cache配置](/zh/start/common.md#cache配置)

