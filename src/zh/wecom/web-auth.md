---
title: 网页授权
date: 2021-07-06
---

# 网页授权

## 网页授权登录

``` go
callbackUrl := "https://powerwechat.artisan-cloud.com/callback/authorized/user"
WeComApp.OAuth.Provider.WithRedirectURL(callbackUrl)
redirectURL, _ := WeComApp.OAuth.Provider.GetAuthURL()
```



## 扫码授权登录

``` go
callbackUrl := "https://powerwechat.artisan-cloud.com/callback/authorized/user"
WeComApp.OAuth.Provider.WithRedirectURL(callbackUrl)
redirectURL, _ := WeComApp.OAuth.Provider.GetQrConnectURL()
```

## 获取访问用户敏感信息

自建应用与代开发应用可通过该接口获取成员授权的敏感字段

``` go
user, err := WeComApp.OAuth.Provider.GetUserInfo(code)
if err != nil {
  panic(err)
}
userDetail, err := WeComApp.OAuth.Provider.GetUserDetail(user.UserTicket)
if err != nil {
  panic(err)
}

// userDetail output:
// {
// 	"errcode": 0,
// 	"errmsg": "ok",
// 	"userid": "Walle",
// 	"gender": "0",
// 	"avatar": "http://wework.qpic.cn/wwhead/duc2TvpEgST9hicuyypLEKNreicYWfEwYNtUGkXicyzeH7dTLVyLBM52ULDFaic3nj5D8Ox597meRmA/0",
// 	"qr_code": "https://open.work.weixin.qq.com/wwopen/userQRCode?vcode=vc506f7b53734f5d32",
// 	"mobile": "18611111111",
// 	"email": "xxx@artisan-cloud.com",
// 	"biz_mail": "",
// 	"address": ""
// }
```


[微信官方文档](https://developer.work.weixin.qq.com/document/path/95833)

## 获取访问用户身份

如果你只需要把OAuth2的`code`换取userId，那么按照下面方法就可以：

``` go
code := "imGdHB0X2DEW_U17Hcy_o5tbhN7ekJts8K9WWPhuFyE"
user, err := WeComApp.OAuth.Provider.ContactFromCode(code)
if err != nil {
  panic(err)
}

log.Println("userID", user.GetID())
```

但如果你需要把OAuth2的`code`换取到详尽的用户信息，比如用户的头像、邮箱、真实姓名之类的，那么请使用详细版本:

``` go
code := "imGdHB0X2DEW_U17Hcy_o5tbhN7ekJts8K9WWPhuFyE"
user, err := WeComApp.OAuth.Provider.Detailed().ContactFromCode(code)
if err != nil {
  panic(err)
}

log.Println("openID", user.GetOpenID())
log.Println("userID", user.GetID())
log.Println("name", user.GetName()())
log.Println("avatar", user.GetAvatar())

// 由于我们的user接口可能遗漏某些字段的获取方法，所以你可以通过 user.GetRaw() 获取一个HashMap，
// 这个和之前的user.GetID()效果是一样的
log.Println("userID", user.GetRaw()["userID"])
```

::: tip
来自企业微信官方的公告： 
从2022年6月20号20点开始，除通讯录同步以外的基础应用（如客户联系、微信客服、会话存档、日程等），以及新创建的自建应用与代开发应用，调用该接口时，不再返回以下字段：头像、性别、手机、邮箱、企业邮箱、员工个人二维码、地址，应用需要通过oauth2手工授权的方式获取管理员与员工本人授权的字段。

如果需要获取头像、邮箱、真实姓名需要使用“获取访问用户敏感信息”接口
:::

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/91437)



## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/oauth-controller.go)
