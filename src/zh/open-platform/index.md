
# 微信开放平台第三方平台

> 在使用之前，你需要先了解微信官方的授权流程： [授权流程技术说明](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=)

## 初始化实例

``` go
OpenPlatformApp, err := openPlatform.NewOpenPlatform(&openPlatform.UserConfig{
  AppID:  "", // 开放平台第三方平台 APPID
  Secret: "", // 开放平台第三方平台 Secret

  Token:  "", // 开放平台第三方平台 Token
  AESKey: "", // 开放平台第三方平台 AES Key

  Log: openPlatform.Log{
    Level: "debug",
    File:  "./wechat.log",
  }, // 日志输出位置
  Cache:     cache, // token缓存
  HttpDebug: true, // 打开后会显示PowerWeChat调用微信API的请求参数和响应结果
  Debug:     false,
})
```

## 获取用户授权页 URL

``` go
OpenPlatformApp.GetFastRegistrationURL("https://powerwechat.artisan-cloud.com", &object.StringMap{
  "auth_type": "1",
});
```

## Code换调用凭据信息

在用户在授权页授权流程完成后，授权页会自动跳转进入回调URI，并在URL参数中返回授权码和过期时间。

> eg: https://powerwechat.artisan-cloud.com/callback?auth_code=xxx&expires_in=600)

``` go
OpenPlatformApp.Base.HandleAuthorize("[authCode]")
```

## 获取授权方的帐号基本信息 

``` go
OpenPlatformApp.Base.GetAuthorizer("[appID]")
```

## 获取授权方的选项设置信息
``` go
OpenPlatformApp.Base.GetAuthorizerOption("[appID]", "[name]")
```

## 设置授权方的选项信息
``` go
OpenPlatformApp.Base.SetAuthorizerOption("[appID]", "[name]", "[value]")
```

## 获取已授权的授权方列表
``` go
offset := 0
count := 100
res, err := services.OpenPlatformApp.Base.GetAuthorizers(offset, count)
```

## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/open-platform/open-platform.go)
