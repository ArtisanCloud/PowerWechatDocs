# 消息

因为有些动态字段需要使用`power.HashMap`来描述，本质上和`gin.H{}`这类对象是一样的。
``` go
import "github.com/ArtisanCloud/PowerWeChat/v3/src/kernel/power"
```

## 文本消息
``` go
messages.NewText(ctx,"[content]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 图片消息
``` go
messages.NewImage(ctx,"[mediaID]", &power.HashMap{})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 视频消息
``` go
messages.NewVideo(ctx,"[mediaID]", &power.HashMap{
  "title": "test title",
  "description": "test desc...",
  "thumb_media_id": "test thumb media id",
})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 声音消息
``` go
messages.NewVoice(ctx,mediaID, &power.HashMap{})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

## 链接消息
``` go
messages.NewLink(ctx,&power.HashMap{
  ctx,
  "Title":       "ArtisanCloud",
  "Description": "desc...",
  "Url":         "https://www.artisan-cloud.com",
  "Picurl":      "https://powerwechat.artisan-cloud.com/images/icons/favicon-32x32.png",
})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)


## 原始消息
原始消息PowerWeChat这边会原样转发给微信，所以请注意保证字符串json是合法的。
``` go
openID := ""
content := ""
messages.NewRaw(`
  {
    "touser":"` + openID + `",
    "msgtype":"text",
    "text":{"content":"` + content + `"}"}}
`)
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html#%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%8F%A3-%E5%8F%91%E6%B6%88%E6%81%AF)

