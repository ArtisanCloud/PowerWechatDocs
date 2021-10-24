---
title: 电子发票
date: 2021-07-06
description: PowerWechat可以支持报销发票接口，及jsapi用于在应用中选择微信卡包中的电子发票实现电子化报销
---

## 概述

报销发票接口及jsapi用于在应用中选择微信卡包中的电子发票实现电子化报销，该接口仅对认证的企业微信账号开放。具体操作步骤如下：

1. 用户在应用中发票报销，选择电子发票类型；
2. 应用调用JS-SDK“[chooseInvoice接口](https://work.weixin.qq.com/api/doc/90000/90135/90283#10029/拉起电子发票列表)”拉起微信卡包，展示发票列表
3. 用户选择电子发票提交报销；
4. 报销方调用API接口查询发票信息，核实后锁定电子发票
5. 报销方打款给用户后，调用接口核销电子发票

## 查询电子发票

``` go
WeComApp.Invoice.GetInvoiceInfo("[card_id]", "[encrypt_code]")
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90284)

## 更新发票状态

``` go
WeComApp.Invoice.UpdateInvoiceStatus("[card_id]", "[encrypt_code]", "[reimburse_status]")
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90285)

## 批量更新发票状态

发票平台可以通过该接口对某个成员的一批发票进行锁定、解锁和报销操作。注意，报销状态为不可逆状态，请开发者慎重调用。

``` go
openID := "openID"
reimburseStatus := "INVOICE_REIMBURSE_INIT"
invoiceList := []*request.RequestCardInvoice{
  {CardID: "cardid_1", EncryptCode: "encrypt_code_1"},
  {CardID: "cardid_2", EncryptCode: "encrypt_code_2"},
}
WeComApp.Invoice.UpdateStatusBatch(openID, reimburseStatus, invoiceList)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90286)

## 批量查询电子发票

``` go
invoiceList := []*request.RequestCardInvoice{
  {CardID: "CARDID1", EncryptCode: "ENCRYPTCODE1"},
  {CardID: "CARDID2", EncryptCode: "ENCRYPTCODE2"},
}
WeComApp.Invoice.GetInvoiceInfoBatch(invoiceList)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90287)

