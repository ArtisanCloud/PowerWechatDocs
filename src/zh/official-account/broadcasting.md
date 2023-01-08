# 消息群发

## 文本消息
``` go
  message := "hello, broadcasting test..."
  OfficialAccountApp.Broadcasting.SendText(message, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 图文消息
``` go
  mediaID := ""
  OfficialAccountApp.Broadcasting.SendNews(ctx,mediaID, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 图片消息
``` go
  mediaID := ""
  OfficialAccountApp.Broadcasting.SendImage(ctx,mediaID, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 语音消息
``` go
  mediaID := ""
  OfficialAccountApp.Broadcasting.SendVoice(ctx,mediaID, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 视频消息
``` go
  mediaID := ""
  OfficialAccountApp.Broadcasting.SendVideo(ctx,mediaID, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 卡劵消息
``` go
  mediaID := ""
  OfficialAccountApp.Broadcasting.SendCard(ctx,mediaID, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, &power.HashMap{})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 发送预览群发消息给指定的 `openId` 用户
``` go
  message := ""
  data, err := services.OfficialAccountApp.Broadcasting.PreviewText(ctx,message, &request.Reception{
    ToUser: []string{"[openID]"},
    Filter: &request.Filter{
      IsToAll: false,
      TagID:   0,
    },
  }, "")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 发送预览群发消息给指定的微信号用户
文档正在完善中... 

## 删除群发消息 
``` go
OfficialAccountApp.Broadcasting.Delete(ctx,"[msgID]", 0)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)

## 查询群发消息发送状态
``` go
OfficialAccountApp.Broadcasting.Status(ctx,"[msgID]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Batch_Sends_and_Originality_Checks.html)



## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/broadcasting.go)
