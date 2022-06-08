---
title: 移动端
date: 2021-10-11
description: 企业微信移动端App登录获得一次性Code之后，通过服务端换取用户的信息
---

# 移动端


## 通过code获取用户信息

获取用户信息的一次性code，第三方app需要继续使用此code通过后端服务器换取用户的信息。

``` go
user, err := WeComApp.OAuth.Provider.Detailed().UserFromCode("[code]")
if err != nil {
  panic(err)
}
deviceID := user.GetDeviceID()
userID :=   user.GetID()
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90136/91193)


## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/853d9ad066ff2623126070dbefe9061889442c59/controllers/wecom/oauth-controller.go)