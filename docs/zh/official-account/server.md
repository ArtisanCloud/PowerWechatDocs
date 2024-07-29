# 服务端

消息回调用于自建服务器和微信公众号进行双向通信.

例如:
 * 接收和自动回复用户消息
 * 接口地理位置
 * 关注/取消关注事件
 * 扫描带参数二维码事件
 * 自定义菜单事件
 * 点击菜单拉取消息时的事件推送
 * 点击菜单跳转链接时的事件推送

## 设置接收消息的参数

使用之前请先配置好URL、Token、EncodingAESKey。

``` go
OfficialAccountApp, err := officialAccount.NewOfficialAccount(&officialAccount.UserConfig{
	AppID:  conf.OffiAccount.AppID,     // 小程序、公众号或者企业微信的appid
	Secret: conf.OffiAccount.AppSecret, // 商户号 appID

	Token:  conf.OffiAccount.MessageToken,
	AESKey: conf.OffiAccount.MessageAesKey,

	// ResponseType: os.Getenv("response_type"),
	Log: officialAccount.Log{
		Level: "debug",
		File:  "./wechat.log",
	},
	Cache:     cache,
	HttpDebug: true,
	Debug:     false,
})
```

## 验证URL有效性

这里接收一个标准的`http.Request`，PowerWeChat会自动帮你解析里面的参数，你只要将解析出来的string通过web框架返回给微信即可。

::: tip

验证URL这一块已经和企业微信 **Server.Serve** 部分不太一样了，增加了新的接口 **Server.VerifyURL**

:::

``` go
rs, err := services.OfficialAccountApp.Server.VerifyURL(c.Request)
if err != nil {
  panic(err)
}
text, _ := ioutil.ReadAll(rs.Body)
// 这里是gin的使用方法，c *gin.Context
// c.String(http.StatusOK, string(text))
```

## 开始接收消息

终于，我们到了消息接收这一步，微信在一些事件变更的时候会推送消息过来。

``` go
import (
	models2 "github.com/ArtisanCloud/PowerWeChat/v3/src/kernel/models"
	"github.com/ArtisanCloud/PowerWeChat/v3/src/officialAccount/server/handlers/models"
)
	rs, err := services.OfficialAccountApp.Server.Notify(c.Request, func(event contract.EventInterface) interface{} {
		fmt.Println("event", event)

		// event output:
		// {
//         "EventInterface": null,
//         "XMLName": {
//                 "Space": "",
//                 "Local": "xml"
//         },
//         "Text": "\n    \n    \n    \n    \n    \n    \n    \n",
//         "ToUserName": "gh_1d1ccd059b2d",
//         "FromUserName": "oKmMk6AcUTTQAcHbERb85kLm9fdg",
//         "CreateTime": "1657125069",
//         "MsgType": "text",
//         "Event": "",
//         "ChangeType": "",
//         "Content": "PHhtbD4KICAgIDxUb1VzZXJOYW1lPjwhW0NEQVRBW2doXzFkMWNjZDA1OWIyZF1dPjwvVG9Vc2VyTmFtZT4KICAgIDxGcm9tVXNlck5hbWU+PCFbQ0RBVEFbb0ttTWs2QWN// VVFRRQWNIYkVSYjg1a0xtOWZkZ11dPjwvRnJvbVVzZXJOYW1lPgogICAgPENyZWF0ZVRpbWU+MTY1NzEyNTA2OTwvQ3JlYXRlVGltZT4KICAgIDxNc2dUeXBlPjwhW0NEQVRBW3RleHRdXT// 48L01zZ1R5cGU+CiAgICA8Q29udGVudD48IVtDREFUQVsxMTExXV0+PC9Db250ZW50PgogICAgPE1zZ0lkPjIzNzI0MzI2OTAxOTgxMzg4PC9Nc2dJZD4KICAgIDxFbmNyeXB0PjwhW0NEQ// VRBW0pHbVFJUkNmMmN5UDM2UGs0U2F1bzMya2pjSjVQNG9hQldVRGJMSXhoRGpvZFpPbkliMDRCOFVweVVDb09kRGwvQnd0MW9XNVdPdDlFTFd1c3VpWlpacVloblVhYTFJU1h0aTJxcHlQ// QXlvK3pHNkE2YmR4akh0MG15R0JNVElrOGw2ZHJJM2RITEpBYWpEMW5BRFNxa0FwbW5rZXMwZzdDSXlrMk1KRzR3VUZnay9vMlN4TGcwbi9weE5tUUFYcUZuUndSSzlkZWJkZXZTSHdLZGM// veDhyNnQ4ZmJsMHZFWHY1RzlYT1FhclJUM0tzamlydkFVUS90eTIrYnlYMU51bEJmSHoxMFFrbnkyVnp5QmNRSW9ycXc1VjF0bFREQnZRQkYrc3pHcXVxeTJibDV2MFlBT09TZk9ZRDFJd1// FxWjlzYmdIQkc3bDNKaEJLbE1HY0dzS2VGTjVhdk9BRU1CQ0tiejc2MkFqWXN6VUdnMGl1RHVrQmtGdGRhVUdrQVpSeU12d2hMRzZsdFhNTHljSmxPSGgvTzFQUFVJVFdQcnNueTZxellRN// kk9XV0+PC9FbmNyeXB0Pgo8L3htbD4K"
// }
// 

		// 这里需要获取到事件类型，然后把对应的结构体传递进去进一步解析
		// 所有包含的结构体请参考： https://github.com/ArtisanCloud/PowerWeChat/v3/src/officialAccount/server/handlers/models
		switch event.GetMsgType() {
		case models2.CALLBACK_MSG_TYPE_TEXT:
			msg := models.MessageText{}
			err := event.ReadMessage(&msg)
			if err != nil {
				println(err.Error())
				return "error"
			}
			fmt.Dump(msg)
		}

		// 假设用户给应用发送消息，这里可以直接回复消息文本，
		// return  "I'm recv..."

		// 这里回复success告诉微信我收到了，后续需要回复用户信息可以主动调发消息接口
		return kernel.SUCCESS_EMPTY_RESPONSE
		
		// 如果要返回xml，也可以返回message对象
		return messages.NewText("返回消息内容")
		
	})
	
	if err != nil {
		panic(err)
	}

	// 选择1： 直接把gin context writer传入，会自动回复。
	err = helper.HttpResponseSend(rs, c.Writer)
	if err != nil {
		panic(err)
	}
	return

	// 选择2： 或者是把内容读取出来
	text, _ := ioutil.ReadAll(rs.Body)
	c.String(http.StatusOK, string(text))
	return
```


## 事件和消息结构体

由于微信事件太多难以通过文档形式全部展现出来，所以请自行看源码文件里面的定义。

如果有什么使用相关问题，欢迎联系我们或者提交PR。

* [应用事件](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/officialAccount/server/handlers/models/message.go)


## 参考示例

参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/server.go)

微信官方文档： [https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html)
