# Short Link

## 获取小程序 Short Link

``` go
pageUrl := "/pages/index/index?query1=q1"
pageTitle := "Homework title"
isPermanent := false

MiniProgramApp.ShortLink.Generate(ctx,pageUrl, pageTitle, isPermanent)
```
[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/short-link/shortlink.generate.html)

## 使用示例

参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/short-link.go)
