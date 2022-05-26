# 客服消息

使用客服系统可以向用户发送消息以及群发消息，客服的管理等功能。

## 获取所有客服
``` go
OfficialAccountApp.CustomerService.List()
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Customer_Service_Management.html#0)
## 获取所有在线的客服 
``` go
OfficialAccountApp.CustomerService.Online()
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Customer_Service_Management.html#2)
## 添加客服 
``` go
OfficialAccountApp.CustomerService.Create("[account]", "[nickname]")
``` 
[微信官方文档]()
## 修改客服 
``` go
OfficialAccountApp.CustomerService.Update("[account]", "[nickname]")
``` 
[微信官方文档]()
## 删除账号 
``` go
OfficialAccountApp.CustomerService.Delete("[account]")
``` 
[微信官方文档]()
## 设置客服头像 
``` go
// 本地文件路径
avatarPath := "./resource/cloud.jpg"
OfficialAccountApp.CustomerService.SetAvatar("[account]", avatarPath)
``` 
[微信官方文档]()
## 获取客服与客户聊天记录 
``` go
OfficialAccountApp.CustomerService.Messages(&request.RequestMessages{
  StartTime: 987654321,
  EndTime:   987654321,
  MsgID:     1,
  Number:    1000,
})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Obtain_chat_transcript.html)

## 主动发送消息给用户 
``` go
msg := messages.NewText("test message")
OfficialAccountApp.CustomerService.Message(msg).SetTo("[openID]").Send()
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 指定客服发送消息 
``` go
msg := messages.NewText("test message")
OfficialAccountApp.CustomerService.Message(msg).From("[account]").SetTo("[openID]").Send()
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 邀请微信用户加入客服
``` go
OfficialAccountApp.CustomerService.Invite("[account]", "[wechatID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Customer_Service_Management.html#3)

## 创建会话 
``` go
OfficialAccountApp.CustomerServiceSession.Create("[account]", "[openID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Session_control.html)
## 关闭会话 
``` go
OfficialAccountApp.CustomerServiceSession.Close("[account]", "[openID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Session_control.html)
## 获取客户会话状态 
``` go
OfficialAccountApp.CustomerServiceSession.Get("[openID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Session_control.html)
## 获取客服会话列表 
``` go
OfficialAccountApp.CustomerServiceSession.List("[account]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Session_control.html)
## 获取未接入会话列表 
``` go
OfficialAccountApp.CustomerServiceSession.Waiting()
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Customer_Service/Session_control.html)
