---
title: 生物认证
date: 2021-07-06
---



## SOTER 生物认证秘钥签名验证



生物认证是可以支持`TouchID(指纹认证)`、`FaceID(面容)`、`声纹`等认证。

``` go
MiniProgramApp.Soter.VerifySignature("[openID]", "[json_string]", "[json_signature]")
// output:
// {
//    "is_ok": true
// }
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/soter/soter.verifySignature.html)

下面附上获取`json_string`和`json_signature`的一段小程序代码，需要的自取.

``` js
// https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html
wx.startSoterAuthentication({
  requestAuthModes: ['fingerPrint', 'facial'],
  challenge: '123456',
  authContent: '请用指纹解锁',
  success(res) {
    console.log(res);
    // output:
    /* {
    "errMsg": "startSoterAuthentication:ok",
    "resultJSON": "{\"raw\":\"123456\",\"counter\":15,\"uid\":\"303d957f373ab2536b1a5e087e80ddf3\",\"cpu_id\":\"CDF3C5B8-EB98-4CD6-9733-7F920551FD86\"}",
    "resultJSONSignature": "MTuvNi8zP9nt+YuBG7iq/W6JI8kVMhGDINp0cHfRFsjyg7170YTpglMW13SI3lx4zC/t77D6Q==",
    "authMode": "fingerPrint",
    "errCode": 0
} */
  },
  fail(e) {
    console.error(e);
  }
})
```
