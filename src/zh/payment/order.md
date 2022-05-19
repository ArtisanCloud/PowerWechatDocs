---
title: 订单
date: 2021-07-06
---

# 订单

H5支付、公众号支付、扫码支付、支付中签约都是使用这个接口。

## 下单

### JSAPI支付

``` go
options := &request.RequestJSAPIPrepay{
  Amount: &request.JSAPIAmount{
    Total:    1,
    Currency: "CNY",
  },
  Attach:      "自定义数据说明",
  Description: "Image形象店-深圳腾大-QQ公仔",
  OutTradeNo:  "5519778939773395659222498001", // 这里是商户订单号，不能重复提交给微信
  Payer: &request.JSAPIPayer{
    OpenID: "oAuaP0TRUMwP169nQfg7XCEAw3HQ", // 用户的openid， 记得也是动态的。
  },
}

// 如果需要覆盖掉全局的notify_url
//options.SetNotifyUrl("https://pay.xxx.com/wx/notify")

// 下单
response, err := services.PaymentApp.Order.JSAPITransaction(options)

if err != nil {
  panic(err)
}

// payConf大致如下：
// {
//   "appId": "ww16143ea0101327c7",
//   "nonceStr": "jcMfo7lsfM3LPWkLRJb7rQU6WeatStEU",
//   "package": "prepay_id=xxxxx",
//   "paySign": "hSPF2wU0aYeTq+DJ14ELM...省略部分数据...RrOmlEkZXVxqCdZmniLdA==",
//   "signType": "RSA",
//   "timeStamp": "1634305101"
//  }
payConf, err := services.PaymentApp.JSSDK.BridgeConfig(response.PrepayID, true)

```

[微信官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_1.shtml)

### App支付

``` go
options := &request2.RequestAppPrepay{
  Amount: &request2.AppAmount{
    Total:    1,
    Currency: "CNY",
  },
  Attach:      "自定义数据说明",
  Description: "Image形象店-深圳腾大-QQ公仔",
  OutTradeNo:  "5519778939773395659222498001", // 这里是商户订单号，不能重复提交给微信
}

// 如果需要覆盖掉全局的notify_url
//options.SetNotifyUrl("https://pay.xxx.com/wx/notify")

// 下单
response, err := services.PaymentApp.Order.TransactionApp(options)

if err != nil {
  panic(err)
}

// 因为PrepayID签名方式都一样，所以这个和App是一样的。
payConf, err := services.PaymentApp.JSSDK.BridgeConfig(response.PrepayID, true)
```

[微信官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_1.shtml)

### Native支付

``` go
options := &request2.RequestNativePrepay{
  Amount: &request2.NativeAmount{
    Total:    1,
    Currency: "CNY",
  },
  Attach:      "自定义数据说明",
  Description: "Image形象店-深圳腾大-QQ公仔",
  OutTradeNo:  "5519778939773395659222598001", // 这里是商户订单号，不能重复提交给微信
}

// reponse成功后返回结果
// {
//   "code_url": "weixin://wxpay/bizpayurl?pr=OZdex6kzz"
// }
response, err := services.PaymentApp.Order.TransactionNative(options)
```

[微信官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_4_1.shtml)

### 小程序支付

小程序支付和JSAPI支付接口一样，参考上方**[JSAPI支付](#JSAPI支付)**

[微信官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_1.shtml)



## 查询订单

商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。查询订单状态可通过微信支付订单号或商户订单号两种方式查询，两种查询方式返回结果相同。

::: tip
以下情况可能需要主动调用查询订单接口。

1. 当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知。
2. 调用支付接口后，返回系统错误或未知交易状态情况。
3. 调用被扫支付 API，返回 USERPAYING 的状态。
4. 调用关单或撤销接口 API 之前，需确认支付状态。
5. 商户系统自己主动查询订单元数据。

:::

### 根据商户订单号查询
```go
paymentService.Order.QueryByOutTradeNumber("商户系统的内部订单号 [out_trade_no]")
```

### 根据微信支付单号查询
``` go
paymentService.Order.QueryByTransactionId("微信支付单号 [transaction_id]")
```

查询订单返回结果：
``` json
{
  "amount": {
    "currency": "CNY",
    "payer_currency": "CNY",
    "payer_total": 1,
    "total": 1
  },
  "appid": "ww16143ea010132711",
  "attach": "自定义数据说明",
  "bank_type": "BOSH_CREDIT",
  "mchid": "1611854986",
  "out_trade_no": "5519778939773395659222199398",
  "payer": {
    "openid": "oAuaP0TRUMwP169nQfg7XCEAw3HQ"
  },
  "promotion_detail": [],
  "success_time": "2021-08-28T14:42:39+08:00",
  "trade_state": "SUCCESS",
  "trade_state_desc": "支付成功",
  "trade_type": "JSAPI",
  "transaction_id": "4200001207202108286046087211"
}
```

## 关闭订单

以下情况需要调用关单接口：
1. 商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；
2. 系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。

``` go
paymentService.Order.Close("商户系统的内部订单号 [out_trade_no]")
```

::: warning
注意： 

关单没有时间限制，建议在订单生成后间隔几分钟（最短5分钟）再调用关单接口，避免出现订单状态同步不及时导致关单失败。
:::
