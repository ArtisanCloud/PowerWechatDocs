---
title: 分账
date: 2021-07-06
---

# 分账

## 添加接收方

```go
// 添加接收方。多次调用表示添加多个接收方
paymentService.ProfitSharing.AddReceiver(
  "[type]",
  "[account]",
  "[name]",
  "[relation_type]",
  "[relation_type]",
)
```

微信官方文档： https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_1_8.shtml

## 删除接收方

```go
paymentService.ProfitSharing.DeleteReceiver("[type]", "[account]")
```

微信官方文档：https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter8_1_9.shtml

## 单次分账

```go
paymentService.ProfitSharing.Share(
  "[transaction_id]",
  "[out_order_no]",
  []*power.HashMap{
  {
    "type": "MERCHANT_ID",
    "account": "86693852",
    "name": "hu89ohu89ohu89o",
    "amount": 888,
    "description": "分给商户A",
  },
  {
    "type": "MERCHANT_ID",
    "account": "86693852",
    "name": "hu89ohu89ohu89o",
    "amount": 888,
    "description": "分给商户B",
  },
}, false)
```

微信官方文档：https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_1&index=1



## 分账查询

```go
paymentService.ProfitSharing.Query("[transaction_id]", "[out_trade_no]")
```

微信官方文档： https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_2&index=3



## 分帐回退(TODO)

```go
```

微信官方文档： https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_7&index=8
