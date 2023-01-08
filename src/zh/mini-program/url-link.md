# URL Link

## 小程序 URL Link

``` go
MiniProgramApp.URLLink.Generate(ctx, &request.URLLinkGenerate{
	EnvVersion:     "release",
	ExpireInterval: 1606737600,
	Path:           "pages/index/index",
	Query:          "a=1",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)

## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/url-link.go)
