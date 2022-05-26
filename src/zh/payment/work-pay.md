---
title: 企业付款
date: 2021-07-06
---

# 企业付款

企业付款主要是为付款至用户零钱的能力。



在使用前，请确认`payment.UserConfig`里面配置了的`CertPath`和`KeyPath`，比较完整的配置参考[介绍](./index)

``` go
PaymentService, err := payment.NewPayment(&payment.UserConfig{
  // ...
  CertPath:    "[wx_cert_path]",
  KeyPath:     "[wx_key_path]",
  // ...
})
```



## 企业付款到用户零钱



``` go
paymentService.Transfer.ToBalance(&power.HashMap{
  "partner_trade_no": "1233455", // 商户订单号，需保持唯一性(只能是字母或者数字，不能包含有符号)
  "openid": "oxTWIuGaIt6gTKsQRLau2M0yL16E", //   商户appid下，某用户的openid
  "check_name": "FORCE_CHECK", // NO_CHECK：不校验真实姓名; FORCE_CHECK：强校验真实姓名
  "re_user_name": "王小帅", // 收款用户真实姓名。如果check_name设置为FORCE_CHECK，则必填用户真实姓名。如需电子回单，需要传入收款用户姓名
  "amount": 10000, // 付款金额，单位为分
  "desc": "理赔", // 付款备注，必填。注意：备注中的敏感词会被转成字符*
})
```



## 企业付款到银行卡



``` go
paymentService.Transfer.ToBalance(&power.HashMap{
  "partner_trade_no": "1233455", // 商户订单号，需保持唯一性(只能是字母或者数字，不能包含有符号)
  "openid": "oxTWIuGaIt6gTKsQRLau2M0yL16E", //   商户appid下，某用户的openid
  "check_name": "FORCE_CHECK", // NO_CHECK：不校验真实姓名; FORCE_CHECK：强校验真实姓名
  "re_user_name": "王小帅", // 收款用户真实姓名。如果check_name设置为FORCE_CHECK，则必填用户真实姓名。如需电子回单，需要传入收款用户姓名
  "amount": 10000, // 付款金额，单位为分
  "desc": "理赔", // 付款备注，必填。注意：备注中的敏感词会被转成字符*
})
```





## 查询付款到零钱的订单

```go
paymentService.Transfer.QueryBalanceOrder("[partnerTradeNo]")
```

### partnerTradeNo

- 类型: `string(32)`
- 必传: `是`
- 示例: `10000098201411111234567890` 

商户调用付款API时使用的商户订单号。





## 查询付款到银行卡的订单

```go
paymentService.Transfer.QueryBankCardOrder("[partnerTradeNo]")
```

### partnerTradeNo

- 类型: `string(32)`
- 必传: `是`
- 示例: `10000098201411111234567890` 

商户调用付款API时使用的商户订单号。



微信官方文档地址： 

 - [付款](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_2)

 - [查询付款](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay.php?chapter=14_3)

   
