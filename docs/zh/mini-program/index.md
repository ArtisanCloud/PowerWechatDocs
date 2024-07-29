# 小程序入门

在调用小程序相应的API接口之前，我们需要将初始化一个`MiniProgramApp`实例，后面调用全部都会通过`MiniProgramApp`提供的方法来完成。

具体如下：

``` go
MiniProgramApp, err := miniProgram.NewMiniProgram(&miniProgram.UserConfig{
  AppID:     "[miniprogram_app_id]", // 小程序appid
  Secret:    "[miniprogram_secret]", // 小程序app secret
  HttpDebug: true,
  Log: miniProgram.Log{
    Level: "debug",
    File:  "./wechat.log",
  },
  // 可选，不传默认走程序内存
  Cache: kernel.NewRedisClient(&kernel.UniversalOptions{
    Addrs:     []string{"127.0.0.1:6379"},
    Password: "",
    DB:       0,
  }),
})
```

## UserConfig参数说明：

### AppID

- 类型: `string`
- 必传: `是`
- 示例: `ww16143ea0101327cc` 

小程序唯一凭证，即 AppID，可在「[微信公众平台](https://mp.weixin.qq.com/) - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）

### Secret

- 类型: `string`
- 必传: `是`
- 示例: `1e116d3db6d32322d3b1d8666232b097` 

小程序唯一凭证密钥，即 AppSecret，获取方式同 AppID 

### Token

- 类型: `string`
- 必传: `否`
- 示例: `vlhkaO8PW6UYyRgWCgb3UwF`

微信回调消息的Token，请到微信后台获取。
> 如果会出现报错"初始化报错 illegal base64 data at input byte 0"
> 可以随机给予一个初始化的字符串，如上案例。


### AESKey

- 类型: `string`
- 必传: `否`
- 示例: `zUfVSOan3B5ZZZZZZ66ixY6OrB28MTS9OIiBLaq3q2PhNG`

微信回调消息的密钥，即 AESKey，请到微信后台获取。
> 如果没有给AESKey，初始化会有提示消息"AES Key is empty, this may occur errors when decode callbacks message"

### Log （TODO）

- 类型: `miniProgram.Log`
- 必传: `否`
- 示例: 

``` go
miniProgram.Log{
  Level: "debug",  // 输出日志等级
  File:  "./wechat.log", //  输出日志文件
}
```

输出日志到指定文件。

### HttpDebug

- 类型: `bool`
- 必传: `否`
- 默认值：`false`

是否开启打印SDK调用微信API接口时候的日志，开启之后会显示出提交的参数和微信详情的数据，对于排查问题时候非常有帮助。

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)

### Cache

- 类型: `CacheInterface`
- 必传: `否`
- 默认值：`nil`

如果需要实现Token中控，例如多个应用实例共享或者和其他应用共享Token。

更多详细内容请参考： [Cache配置](/zh/start/common.md#cache配置)





