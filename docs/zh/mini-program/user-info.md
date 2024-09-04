---
title: 用户信息
date: 2021-09-14
description: 使用PowerWeChat完成小程序服务端登录、检查加密信息是否微信生成、获取用户UnionId等
---

# 用户信息

## 小程序登录

登录凭证校验。通过 [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。

```go
MiniProgramApp.Auth.Session(ctx, code)
```

## 获取用户手机号

适用于小程序基础库**2.21.2** 

``` go
MiniProgramApp.PhoneNumber.GetUserPhoneNumber(ctx, code)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html)

适用于**2.21.2**以前版本，这个可以用于[服务端获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)，例如：[getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)、getPhoneNumber等。

同时因为接口是通用的，所以这里返回的是[]byte类型，需要使用者自己去做json解析成结构体。

``` go
data, err := MiniProgramApp.Encryptor.DecryptData(encryptData, sessionKey, iv)
// string(data) 示例
// {"phoneNumber":"13900000000","purePhoneNumber":"13900000000","countryCode":"86","watermark":{"timestamp":1641571004,"appid":"wxc1ebbc8236ffae2b"}}
```



## 加密信息是否由微信生成

检查加密信息是否由微信生成（当前只支持手机号加密数据），只能检测最近3天生成的加密数据

``` go
hash =:"f0419b903ec2b01fb2bf4f1944f91db0cd1f298bf9758de8f1fe5b63bc85eff7"
MiniProgramApp.Base.CheckEncryptedData(ctx, hash)
```

::: tip

微信那边要求的encryptedData的hash值，你需要使用golang自带的sha256方法计算出对应的值。

``` go
import "crypto/sha256"
hashByte := sha256.Sum256([]byte("uo1yB3bOOuIfDu6neHV3D158CofGB9m7TxFQ8A/JcauWzhvmEAPygfFaqCgDTEmluLu7S8wMA=="))
hash := hashByte[:]
// output hash: f0419b903ec2b01fb2bf4f1944f91db0cd1f298bf9758de8f1fe5b63bc85eff7
```

:::

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/user-info/auth.checkEncryptedData.html)

## 支付后获取用户UnionId

用户支付完成后，获取该用户的 [UnionId](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)，无需用户授权。本接口支持[第三方平台代理查询](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=215453152075Ry2s&token=&lang=zh_CN)。

``` go
MiniProgramApp.Base.GetPaidUnionID(ctx, &request.RequestGetPaidUnionID{
  OpenID:        openid,
  // TransactionID: "",
  // MchID:         "",
  // OutTradeNo:    "",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/user-info/auth.getPaidUnionId.html)



## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/phone-number.go)

