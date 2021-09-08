---
title: 对账单
date: 2021-07-06
---



## 申请交易账单

``` go
paymentService.Bill.GetTradeBill("[bill_date]", "[bill_type]", "[tar_type]")
```

微信官方文档： https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_6.shtml

## 申请资金账单

``` go
paymentService.Bill.GetFlowBill("[bill_date]", "[account_type]", "[tar_type]")
```

微信官方文档：https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_7.shtml

# 下载账单(TODO)



# 参数说明

### bill_date

- 类型: `string`
- 必传: `是`
- 示例: `2019-06-11` 

格式YYYY-MM-DD。

仅支持三个月内的账单下载申请。

### bill_type

- 类型: `string`
- 必传: `否`
- 示例: `ALL` 

不填则默认是ALL。
枚举值：

- ALL：返回当日所有订单信息（不含充值退款订单）
- SUCCESS：返回当日成功支付的订单（不含充值退款订单）
- REFUND：返回当日退款订单（不含充值退款订单）

### tar_type

- 类型: `string`
- 必传: `否`
- 示例: GZIP 

不填则默认是数据流
枚举值：

- GZIP：返回格式为.gzip的压缩包账单

### account_type

- 类型: `string`
- 必传: `是`
- 示例: `2019-06-11` 

不填则默认是BASIC
枚举值：

- BASIC：基本账户
- OPERATION：运营账户
- FEES：手续费账户

