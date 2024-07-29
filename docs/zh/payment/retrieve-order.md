---
title: 撤销订单
date: 2021-07-06
---

# 撤销订单

支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。

::: warning
7天以内的交易单可调用撤销，其他正常支付的单如需实现相同功能请调用申请退款API。提交支付交易后调用【[查询订单API](order.md)】，没有明确的支付结果再调用【撤销订单API】。
:::

## 通过微信订单号来撤销订单

``` go
paymentService.Reverse.ByTransactionId(ctx,"[transaction_id]")
```



## 通过商户订单号来撤销订单

``` go
paymentService.Reverse.ByOutTradeNumber(ctx,"[out_trade_no]")
```





微信官方文档：[https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_11&index=3](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_11&index=3)
