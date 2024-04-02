# 小程序

## 登录获取用户信息 

临时登录凭证校验接口是一个服务端HTTPS 接口，开发者服务器使用临时登录凭证code获取 session_key、用户userid以及用户所在企业的corpid等信息。

::: tip
这里的WeComApp（企业微信应用）需要跟小程序关联
:::

``` go
// 这里会重新fork一个小程序实例，可以放在全局里面共享
miniProgramApp, err := WeComApp.MiniProgram()
if err != nil {
	panic(err)
}
res, err := miniProgramApp.Auth.Session(ctx,"[code]")
if err != nil {
	panic(err)
}
// output
{
	"errmsg": "ok",
	"corpid": "wwedab3dxxxxxxx",
	"userid": "wosdnEDAAAg0nDbS1kDVMAAAAAA",
	"session_key": "tfanc5uqVCI==",
	"deviceid": "1E54EF78-68F5-4057-1111-8AA523BA2321",
}
```

[微信官方文档](https://developer.work.weixin.qq.com/document/path/91507)

## 参考示例

参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/miniprogram.go)
