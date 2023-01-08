# QRCode

为了满足用户渠道推广分析和用户帐号绑定等场景的需要，公众平台提供了生成带参数二维码的接口。使用该接口可以获得多个带不同场景值的二维码，用户扫描后，公众号可以接收到事件推送。

## 创建临时二维码
```go
OfficialAccountApp.QRCode.Temporary(ctx,"val1", 30*24*3600)

OfficialAccountApp.QRCode.Temporary(ctx,1, 30*24*3600)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html)

## 创建永久二维码
```go
OfficialAccountApp.QRCode.Forever(ctx,"val1", 30*24*3600)

OfficialAccountApp.QRCode.Forever(ctx,1, 30*24*3600)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html)

## 获取二维码网址
```go
OfficialAccountApp.QRCode.URL(ctx,"[ticket]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html)


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/qrcode.go)
