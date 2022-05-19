---
title: JSSDK
date: 2021-07-06
---

# JSSDK

调用JSSDK方法之前，请先参考[入门](intro.html)

``` go
// 下单，获取到微信返回的prepay_id
response, err := PaymentService.Order.Unify(&object.HashMap{
  "amount": &object.HashMap{
    "total":    1, // 单位是分。 当前支付金额是1分
    "currency": "CNY",
  },
  "attach":       "自定义数据说明",
  "description":  "Image形象店-深圳腾大-QQ公仔",
  "mchid":        "1611854986",
  "notify_url":   "https://pay.example.com/wx/notify",
  "out_trade_no": "5519778939773395659222199398", // 这里是商户订单号，不能重复提交给微信
  "payer": &object.HashMap{
    "openid": "oAuaP0TRUMwP169nQfg7XCEAw3HQ",  // 用户的openid， 记得也是动态的。
  },
}, false)

if err != nil {
  log.Fatalf("error: %s", err)
}

// 根据prepay_id, 拼接出jssdk所需要的config
payConf, err := paymentService.JSSDK.BridgeConfig(response.PrepayID, true)
if err != nil {
  panic(err)
}
log.Println("jssdk config: ", payConf)
// --- output ---
// {
//    "appId": "ww16143ea0101327c7",
//    "nonceStr": "e1L0z2JdBsFbTw4HvnvUG2Py7L3r1qbw",
//    "package": "prepay_id=wx2900182391460641c6c7a36f40675f0000",
//    "paySign": "vNGlVG7gmWA3sy8T2BygoJmjuIrw6QcSg/VtkKFk3dUj34vpePAG...63nQ==",
//    "signType": "RSA",
//    "timeStamp": "1630167503"
//  }
```
