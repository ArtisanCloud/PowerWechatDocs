---
title: 商户付款零钱
date: 2023-01-07
---

# 商家转账

商家转账用户确认模式下，用户申请收款时，商户可通过此接口申请创建转账单




## 商家转账接口使用



``` go
req := &request.RequestTransferBills{
    Appid:              "Appid",
    OutBillNo:          "OutBillNo",
    TransferSceneId:    "TransferSceneId",
    Openid:             "Openid",
    UserName:           "UserName",
    TransferAmount:     1,
    TransferRemark:     "TransferRemark",
    NotifyUrl:          "NotifyUrl",
    UserRecvPerception: "UserRecvPerception",
    TransferSceneReportInfos: []request.TransferSceneReportInfo{
        {
            InfoType:    "InfoType",
            InfoContent: "InfoContent",
        },
    },
}
ctx := c.Request.Context()
//fmt.Dump(ctx)
rs, err := services.PaymentApp.FundApp.TransferBills(ctx, req)
if err != nil {
    panic(err)
}
c.JSON(http.StatusOK, rs)
	
```




微信官方文档地址： 

 - [商家转账](https://pay.weixin.qq.com/doc/v3/merchant/4012716434)


   
