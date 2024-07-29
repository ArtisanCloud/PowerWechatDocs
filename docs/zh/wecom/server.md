# 服务端

消息回调用于自建应用和企业微信进行双向通信。例如：用户发送消息到应用、自定义菜单操作、上报地理位置、上报进入应用事件、审批状态通知事件、外部联系人变更回调等等。

## 设置接收消息的参数

使用之前请先配置好URL、Token、EncodingAESKey。

``` go
WeComContactApp, err := work.NewWork(&work.UserConfig{
  CorpID:      "[corp_id]",      // 企业微信的app id，所有企业微信共用一个。
  AgentID:     "[agent_id]",     // 内部应用的app id
  Secret:      "[secret]",       // 内部应用的app secret
  Token:       "[token]",        // 内部应用的app token
  AESKey:      "[aes_key]",      // 内部应用的app aeskey
  CallbackURL: "[callback_url]", // 内部应用的场景回调设置
  OAuth: work.OAuth{
    Callback: "[app_oauth_callback_url]", // 内部应用的app oauth url
    Scopes:   nil,
  },
  HttpDebug: true,
})
```

## 验证URL有效性

这里接收一个标准的`http.Request`，PowerWeChat会自动帮你解析里面的参数，你只要将解析出来的string通过web框架返回给微信即可。

``` go
rs, err := services.WeComContactApp.Server.Serve(c.Request)
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
	rs, err := services.WeComContactApp.Server.Notify(c.Request, func(event contract.EventInterface) interface{} {
		fmt.Println("event", event)
		//return  "handle callback"

		// event output:
		//{
		//  "EventInterface": null,
		//  "XMLName": {
		//    "Space": "",
		//      "Local": "xml"
		//  },
		//  "Text": "",
		//  "ToUserName": "ww454dfb9d6f6d432a",
		//  "FromUserName": "sys",
		//  "CreateTime": "1654861516",
		//  "MsgType": "event",
		//  "Event": "change_contact",
		//  "ChangeType": "update_user",
		//  "Content": "PHhtbD48VG9Vc2VyTmFtZT48IVtDREFUQVt3dzQ1NGRmYjlkNmY2ZDQzMmFdXT48L1RvVXNlck5hbWU+PEZyb21Vc2VyTmFtZT48IVtDREFUQVtzeXNdXT48L0Zyb21Vc2VyTmFtZT48Q3JlYXRlVGltZT4xNjU0ODYxNTE2PC9DcmVhdGVUaW1lPjxNc2dUeXBlPjwhW0NEQVRBW2V2ZW50XV0+PC9Nc2dUeXBlPjxFdmVudD48IVtDREFUQVtjaGFuZ2VfY29udGFjdF1dPjwvRXZlbnQ+PENoYW5nZVR5cGU+PCFbQ0RBVEFbdXBkYXRlX3VzZXJdXT48L0NoYW5nZVR5cGU+PFVzZXJJRD48IVtDREFUQVtXYW5nQ2hhb1lpXV0+PC9Vc2VySUQ+PEFkZHJlc3M+PCFbQ0RBVEFbYWRkci4uLl1dPjwvQWRkcmVzcz48L3htbD4="
		//}

		// 这里需要获取到事件类型，然后把对应的结构体传递进去进一步解析
		// 所有包含的结构体请参考： https://github.com/ArtisanCloud/PowerWeChat/tree/master/src/work/server/handlers/models
		if event.GetEvent() == models.CALLBACK_EVENT_CHANGE_CONTACT && event.GetChangeType() == models.CALLBACK_EVENT_CHANGE_TYPE_CREATE_PARTY {
			msg := models.EventPartyCreate{}
			err := event.ReadMessage(&msg)
			if err != nil {
				println(err.Error())
				return "error"
			}
			fmt.Dump(msg)
		}

		// 假设员工给应用发送消息，这里可以直接回复消息文本，
		// return  "I'm recv..."

		// 这里回复success告诉微信我收到了，后续需要回复用户信息可以主动调发消息接口
		return kernel.SUCCESS_EMPTY_RESPONSE
	})
	if err != nil {
		panic(err)
	}

	// 选择1： 直接把gin context writer传入，会自动回复。
	err = rs.Send(c.Writer)
	if err != nil {
		panic(err)
	}

	// 选择2： 或者是把内容读取出来
	//text, _ := ioutil.ReadAll(rs.Body)
	//c.String(http.StatusOK, string(text))
```


## 事件和消息结构体

由于微信事件太多难以通过文档形式全部展现出来，所以请自行看源码文件里面的定义。

如果有什么使用相关问题，欢迎联系我们或者提交PR。

* [应用事件](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/event.go)
* [外部联系人](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/externalContact.go)
* [Live](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/living.go)
* [Message](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/message.go)
* [Message Audit](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/msgAudit.go)
* [Party](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/party.go)
* [Tag](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/tag.go)
* [User](https://github.com/ArtisanCloud/PowerWeChat/blob/master/src/work/server/handlers/models/user.go)


## 参考示例

参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/user/user-callback.go)