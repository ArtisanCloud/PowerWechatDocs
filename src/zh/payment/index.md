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
  AppID:              "[app_id]",                 // 小程序、公众号或者企业微信的appid
  MchID:              "[mch_id]",                 // 商户号 appID
  MchApiV3Key:        "[mch_api_v3_key]",         // 微信V3接口调用必填
  Key:                "[key]",                    // 微信V2接口调用必填
  CertPath:           "[wx_cert_path]",           // 商户后台支付的Cert证书路径
  KeyPath:            "[wx_key_path]",            // 商户后台支付的Key证书路径
  SerialNo:           "[serial_no]",              // 商户支付证书序列号
  CertificateKeyPath: "[certificate_key_path]",   // 微信支付平台证书的Key证书路径,m微信V3,[选填]
  WechatPaySerial:    "[wechat_pay_serial]",      // 微信支付平台证书序列号,微信V3，[选填]
  RSAPublicKeyPath:   "[wx_rsa_public_key_path]", // 商户支付证书序列号,微信V2，[选填]
  SubMchID:           "[sub_mch_id]",             // 服务商平台下的子商户号Id，[选填]
  SubAppID:           "[syb_appid]",              // 服务商平台下的子AppId，[选填]
  NotifyURL:          "[notify_url]",
  HttpDebug:          true,
  Log: payment.Log{
    Level: "debug",
    File:  "./wechat.log",
  },
  Http: payment.Http{
    Timeout: 30.0,
    BaseURI: "https://api.mch.weixin.qq.com",
  },
  // 可选，不传默认走程序内存
  Cache: kernel.NewRedisClient(&kernel.UniversalOptions{
    Addrs:     []string{"127.0.0.1:6379"},
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

微信商户里面设置的API
V3密钥。参考官方文档: [API v3密钥](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_2.shtml)

### Key

- 类型: `string`
- 必传: `是`
- 示例: `管理员设置的随机数`

微信商户里面设置的API
V2密钥。参考官方文档: [配置API key](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/guide/Configure_API_key.shtml)

### CertPath

- 类型: `string`
- 必传: `是`
- 示例: `/.../apiclient_cert.pem`

微信商户里面设置的API
V3证书。参考官方文档: [私钥和证书](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_1.shtml)

### KeyPath

- 类型: `string`
- 必传: `是`
- 示例: `/.../apiclient_key.pem`

商户API V3私钥。

### SerialNo

- 类型: `string`
- 必传: `是`
- 示例: `2655A2CD634B06C2A86B28780228A997D047B01A`

商户号API V3证书的序列号。
获取证书调用方法：

``` bash
openssl x509 -noout -serial -in /.../apiclient_cert.pem
```

正常的情况下会输出：

```
> serial=2655A2CD634B06C2A86B28780228A997D047B01A
```

### CertificateKeyPath

- 类型: `string`
- 必传: `否`
- 示例: `/.../wx_rsa_public_key.pem`

微信支付API v3使用微信支付 的平台公钥（不是商户私钥 ）进行应答签名。
[获取请详见](./security.md)
[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/wechatpay5_1.shtml)

### WechatPaySerial

- 类型: `string`
- 必传: `否`
- 示例: `5157F09EFDC096DE15EBE81A47057A7232F1B8E1`

[获取请详见](./security.md)，获取微信支付V3平台证书接口时，微信会一并返回  
[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/wechatpay5_1.shtml)

### RSAPublicKeyPath

- 类型: `string`
- 必传: `否`
- 示例: `/.../wx_rsa_public_key.pem`

微信支付API v2使用微信支付 的平台公钥（不是商户私钥 ）进行应答签名。
[获取请详见](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=25_7&index=4)
[官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=25_7&index=4)

### SubAppID

- 类型: `string`
- 必传: `否`
- 示例: `ww16143ea0101327cc`

在服务商平台下的，子小程序、公众号或者企业微信的appId。

### SubMchID

- 类型: `string`
- 必传: `否`
- 示例: `1611854986`

在服务商平台下的，子微信支付商户号ID。
> 注意，如果没有在服务商平台下，请不要设置这两个参数。

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

