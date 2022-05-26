# 短key托管

短 key 托管类似于短链API，开发者可以通过GenShorten将不超过4KB的长信息转成短key，再通过FetchShorten将短key还原为长信息。

## 短key托管

参数说明：
+ long_data: 需要转换的长信息，不超过4KB
+ expire_seconds: 过期秒数，最大值为2592000（即30天)

```go
OfficialAccountApp.URL.ShortGenKey("[longData]", 30*24*3600)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/KEY_Shortener.html)

## 短key还原
```go
OfficialAccountApp.URL.FetchShorten("[shortKey]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Account_Management/KEY_Shortener.html)