---
title: 商户付款零钱
date: 2023-01-07
---

# 商户付款

商户付款主要是为付款至用户零钱的能力。



在使用前，请确认`payment.UserConfig`里面配置了的`CertPath`和`KeyPath`，比较完整的配置参考[介绍](./index)

``` go
PaymentService, err := payment.NewPayment(&payment.UserConfig{
  // ...
  CertPath:    "[wx_cert_path]",
  KeyPath:     "[wx_key_path]",
  // ...
})
```



## 商户付款到用户零钱



``` go
transfer := &request.RequestTransferBatch{
  AppID:       "{APPID}",
  OutBatchNO:  "0010010404201411170000046522",
  BatchName:   "batch-1",
  BatchRemark: "batch-1-remark",
  TotalAmount: 30,
  TotalNum:    1,
  TransferDetailList: []*request.TransferDetail{
    &request.TransferDetail{
      OutDetailNO:    "00100104042014111700000465221",
      TransferAmount: 30,
      TransferRemark: "remark",
      OpenID:         "o4QEk5Kc_y8QTrENCpKoxYhS4jkg",
      UserName:       object.NewNullString("username", true),
    },
  },
}

payResult, err := services.PaymentApp.TransferBatch.Batch(c.Request.Context(), transfer)
if err != nil {
  panic(err)
}

c.JSON(http.StatusOK, payResult)
	
```



### RSA加密生成公钥
商户付款到银行卡需要对银行卡号与姓名进行 RSA 加密，所以这里需要先下载 RSA 公钥到本地
(服务器），可以使用openssl工具，请按照[微信的方式](https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=25_7&index=4)，生成公钥




## 查询付款到零钱的订单

```go

rs, err := services.PaymentApp.TransferBatch.QueryBatch(
  c.Request.Context(),
  "{BatchID}",
  true,
  0,
  10,
  "")
if err != nil {
  panic(nil)
}

c.JSON(http.StatusOK, rs)

```

### BatchID

- 类型: `string(32)`
- 必传: `是`
- 示例: `10000098201411111234567890` 

商户调用付款API时获取的批次号。




微信官方文档地址： 

 - [批量付款](https://pay.weixin.qq.com/docs/merchant/apis/batch-transfer-to-balance/transfer-batch/initiate-batch-transfer.html)

 - [查询付款批次](https://pay.weixin.qq.com/docs/merchant/apis/batch-transfer-to-balance/transfer-batch/get-transfer-batch-by-out-no.html)

   
