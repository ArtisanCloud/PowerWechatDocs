---
title: 内容安全
date: 2021-07-06
description: 使用PowerWeChat可以方便的进行文本、图片是否含有违法违规内容
---

# 内容安全

## 同步检查图片违法违规

校验一张图片是否含有违法违规内容。详见[内容安全解决方案](https://developers.weixin.qq.com/miniprogram/dev/framework/operation.html)

应用场景举例：

1. 图片智能鉴黄：涉及拍照的工具类应用(如美拍，识图类应用)用户拍照上传检测；电商类商品上架图片检测；媒体类用户文章里的图片检测等；
2. 敏感人脸识别：用户头像；媒体类用户文章里的图片检测；社交类用户上传的图片检测等。 ** 频率限制：单个 appId 调用上限为 2000 次/分钟，200,000 次/天 **（** 图片大小限制：1M **）

### 自动上传路径文件(推荐)

``` go
mediaPath := "./resource/cloud.jpg"
services.MiniProgramApp.Security.ImgSecCheck(mediaPath, nil)
```

### 手动读取路径文件

``` go
mediaPath := "./resource/cloud.jpg"
value, err := ioutil.ReadFile(mediaPath)

services.MiniProgramApp.Security.ImgSecCheck("", &request.RequestSecurityFormData{
  Name:  "cloud.jpg", // 请确保文件名有准确的文件类型
  Value: value,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.imgSecCheck.html)



## 异步检查图片/音频违法违规

异步校验图片/音频是否含有违法违规内容。

应用场景举例：

1. 语音风险识别：社交类用户发表的语音内容检测；
2. 图片智能鉴黄：涉及拍照的工具类应用(如美拍，识图类应用)用户拍照上传检测；电商类商品上架图片检测；媒体类用户文章里的图片检测等；
3. 敏感人脸识别：用户头像；媒体类用户文章里的图片检测；社交类用户上传的图片检测等。 **频率限制：单个 appId 调用上限为 2000 次/分钟，200,000 次/天；文件大小限制：单个文件大小不超过10M**

``` go
services.MiniProgramApp.Security.MediaCheckAsync(request.RequestSecurityMediaCheckAsync{
  MediaUrl: mediaURL,
  MediaType: 1,
  Version: 2,
  OpenID: openID,
  Scene: 1,
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.mediaCheckAsync.html)



## 检查文本违法违规

检查一段文本是否含有违法违规内容。

应用场景举例：

1. 用户个人资料违规文字检测；
2. 媒体新闻类用户发表文章，评论内容检测；
3. 游戏类用户编辑上传的素材(如答题类小游戏用户上传的问题及答案)检测等。 *频率限制：单个 appId 调用上限为 4000 次/分钟，2,000,000 次/天**

``` go
services.MiniProgramApp.Security.MsgSecCheck(&request.RequestSecurityMsgSecCheck{
  OpenID:    openID,
  Scene:     1,
  Version:   2,
  Content:   content,
  Nickname:  "test name",
  Title:     "test title",
  Signature: "test sign",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html)


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/security.go)

