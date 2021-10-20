---
title: 客服消息
date: 2021-09-13
description: 使用PowerWeChat处理小程序客服消息，回复用户文本、图片、链接等消息
---

## 临时素材

获取客服消息内的临时素材。

```go
// rs已经是一个标准的*http.Response，您可以直接使用流转发的形式给到浏览器
rs, err := MiniProgramApp.CustomerServiceMessage.GetTempMedia("[mediaID]")
// 例如： gin里面使用io.Copy
io.Copy(ctx.Writer, rs.Body)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.getTempMedia.html)



## 发送消息

### 文本消息

``` go
MiniProgramApp.CustomerServiceMessage.SendText(
  "[openID]",
  &request.CustomerServiceMsgText{
    Content: "Hello PowerWeChat",
  },
)
```

### 图片消息

``` go
MiniProgramApp.CustomerServiceMessage.SendImage(
  "[openID]",
  &request.CustomerServiceMsgImage{
    MediaID: "MEDIA_ID",
  },
)
```

### 图文链接

```go
MiniProgramApp.CustomerServiceMessage.SendLink(
  "[openID]",
  &request.CustomerServiceMsgLink{
    Title:       "PowerWechat",
    Description: "PowerWechat description",
    Url:         "https://powerwechat.artisan-cloud.com",
    ThumbUrl:    "https://xxx.com/x.png",
  },
)
```

### 小程序卡片

``` go
MiniProgramApp.CustomerServiceMessage.SendMiniProgramPage(
  "[openID]",
  &request.CustomerServiceMsgMpPage{
    Title:        "Hello PowerWechat",
    PagePath:     "/pages/index/index",
    ThumbMediaID: "thumb_media_id",
  },
)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.send.html)




## 下发输入状态

下发客服当前输入状态给用户。

```go
openID := "OPENID"      // 
command := "Typing"     // Typing or CancelTyping

services.AppMiniProgram.CustomerServiceMessage.SetTyping(openID, command)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.setTyping.html)




## 上传媒体

把媒体文件上传到微信服务器。

两种方法的上传效果都是一样的，我们推荐第一种。

### 自动上传路径文件 (推荐)

```go
mediaPath := "./resource/cloud.jpg"
services.AppMiniProgram.CustomerServiceMessage.UploadTempMedia("image", mediaPath, nil)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.uploadTempMedia.html)

### 手动读取文件上传

```go
var err error
mediaPath := "./resource/cloud.jpg"
value, err := ioutil.ReadFile(mediaPath)

services.AppMiniProgram.CustomerServiceMessage.UploadTempMedia("image", "", &power.HashMap{
  "name":     "cloud.jpg", // 请确保文件名有准确的文件类型
  "value":        value,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.uploadTempMedia.html)