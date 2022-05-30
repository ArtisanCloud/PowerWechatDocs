# JSSDK配置

## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/jssdk.go)

## 获取JSSDK配置
```go
url := "https://www.artisan-cloud.com/"
jsapiList := []string{"chooseImage"}
debug := false
beta := false
isJson := false
openTagList := []string{"wx-open-launch-app", "wx-open-launch-weapp"}
OfficialAccountApp.JSSDK.BuildConfig(jsapiList, debug, beta, isJson, openTagList, url)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

::: tip
+ isJson为true，会返回json字符串。
+ openTagList配置参考：[如何在微信内外部浏览器唤起小程序](https://developers.weixin.qq.com/community/develop/article/doc/000ca87501c860ceb2eb0ee1056c13)
:::
