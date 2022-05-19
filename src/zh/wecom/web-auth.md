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



### 获取访问用户身份

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



[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/91437)
