---
title: 客服消息
date: 2021-09-13
---

## 临时素材

获取客服消息内的临时素材。

```go

mediaID, exist := c.GetQuery("mediaID")
if !exist {
  panic("parameter media id expected")
}

rs, err := MiniprogramApp.CustomerServiceMessage.GetTempMedia(mediaID)

if err != nil {
  panic(err)
}

content, _ := ioutil.ReadAll(rs.Body)

c.Header("Content-Type", rs.Header.Get("Content-Type"))
c.Header("Content-Disposition", rs.Header.Get("attachment;filename=\""+rs.Header.Get("filename")+"\""))
c.Data(http.StatusOK, rs.Header.Get("Content-Type"), content)


```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.getTempMedia.html)



## 发送消息

发送客服消息给用户。

```go
openID := "openID"
MiniprogramApp.CustomerServiceMessage.Send(openID, "text", &power.HashMap{
  "content": "Hello World",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.send.html)




## 下发输入状态

下发客服当前输入状态给用户。

```go
openID := "OPENID"			// 
command := "Typing" 		// Typing or CancelTyping

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