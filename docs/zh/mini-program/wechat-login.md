---
title: 微信登录与信息
date: 2021-09-12
description: 通过PowerWechat可以方便的完成小程序登录以及获取用户信息
---

## 登陆
将获取的jscode ，换取用户的session信息

``` go
rs := MiniProgramApp.Auth.Session(code)
```
[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)


## 用户信息

检查加密信息是否由微信生成


``` go
rs := MiniProgramApp.Base.CheckEncryptedData("hsSuSUsePBqSQw2rYMtf9Nvha603xX8f2BMQBcYRoJiMNwOqt/UEhrqekebG5ar0LFNAm5MD4Uz6zorRwiXJwbySJ/FEJHav4NsobBIU1PwdjbJWVQLFy7+YFkHB32OnQXWMh6ugW7Dyk2KS5BXp1f5lniKPp1KNLyNLlFlNZ2mgJCJmWvHj5AI7BLpWwoRvqRyZvVXo+9FsWqvBdxmAPA==")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)

---

用户支付完成后，获取该用户的 UnionId，无需用户授权。


``` go
var rs *ResponseAuthGetPaidUnionID
rs := MiniProgramApp.Base.GetPaidUnionID("", nil)
```


[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/user-info/auth.getPaidUnionId.html)
