---
title: 扫码支付[TODO]
date: 2021-07-06
---

# 扫码支付


扫码支付主要是用于商户生成微信支付二维码，用户使用微信客户端扫码后发起支付。



### 生成产品二维码内容

``` go
qrcodeContent := paymentService.Scheme("[productId]")
// 结果示例: weixin://wxpay/bizpayurl?sign=XXXXX&appid=XXXXX&mch_id=XXXXX&product_id=XXXXXX&time_stamp=XXXXXX&nonce_str=XXXXX
```

### productId

- 类型: `string`
- 必传: `是`
- 示例: `2019-06-11` 

格式YYYY-MM-DD。

仅支持三个月内的账单下载申请。



### 处理回调
