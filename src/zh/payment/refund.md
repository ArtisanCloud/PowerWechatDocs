---
title: 退款
date: 2021-07-06
---

# 退款

当交易发生之后一年内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付金额退还给买家，微信支付将在收到退款请求并且验证成功之后，将支付款按原路退还至买家账号上。

## 退款接口

``` go
options := &request.RequestRefund{
  TransactionID: transactionID,
  OutRefundNo:   outRefundNo,
  Reason:        "",
  //NotifyUrl:     "", // 异步接收微信支付退款结果通知的回调地址
  FundsAccount:  "",
  Amount: &request3.RefundAmount{
    Refund: 1, // 退款金额，单位：分
    Total:  1, // 订单总金额，单位：分
    From:   []*request3.RefundAmountFrom{},  // 退款出资账户及金额。不传仍然需要这个空数组防止微信报错
  },
  GoodsDetail:   nil,
}

PaymentApp.Refund.Refund(options)
```

## 微信支付返回示例
``` json
{
  "transaction_id": "1217752501201407033233368018",
  "out_refund_no": "1217752501201407033233368018",
  "reason": "商品已售完",
  "notify_url": "https://weixin.qq.com",
  "funds_account": "AVAILABLE",
  "amount": {
    "refund": 888,
    "from": [
      {
        "account": "AVAILABLE",
        "amount": 444
      }
    ],
    "total": 888,
    "currency": "CNY"
  },
  "goods_detail": [
    {
      "merchant_goods_id": "1217752501201407033233368018",
      "wechatpay_goods_id": "1001",
      "goods_name": "iPhone6s 16G",
      "unit_price": 528800,
      "refund_amount": 528800,
      "refund_quantity": 1
    }
  ]
}
```

[微信官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_3_9.shtml)

::: warning
1. 交易时间超过一年的订单无法提交退款

2. 微信支付退款支持单笔交易分多次退款（不超50次），多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。申请退款总金额不能超过订单金额。 一笔退款失败后重新提交，请不要更换退款单号，请使用原商户退款单号

3. 错误或无效请求频率限制：6qps，即每秒钟异常或错误的退款申请请求不超过6次

4. 每个支付订单的部分退款次数不能超过50次

5. 如果同一个用户有多笔退款，建议分不同批次进行退款，避免并发退款导致退款失败

6. 申请退款接口的返回仅代表业务的受理情况，具体退款是否成功，需要通过退款查询接口获取结果

7. 一个月之前的订单申请退款频率限制为：5000/min

  :::

