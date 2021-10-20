---
title: 安全风控
date: 2021-07-06
---



## 获取用户安全等级

根据提交的用户信息数据获取用户的安全等级 risk_rank，无需用户授权。

``` go
options := &request.RequestRiskControl{
  AppID:        appID,
  OpenID:       openID,
  Scene:        1,
  MobileNo:     "12345678",
  BankCardNo:   "******",
  CertNo:       "*******",
  ClientIp:     "******",
  EmailAddress: "***@qq.com",
  ExtendedInfo: "",
}
MiniProgramApp.RiskControl.GetUserRiskRank(options)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/safety-control-capability/riskControl.getUserRiskRank.html)
