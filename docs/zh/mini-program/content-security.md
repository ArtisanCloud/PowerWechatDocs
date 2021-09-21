---

title: 内容安全
date: 2021-07-06
---



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

services.MiniProgramApp.Security.ImgSecCheck("", &power.HashMap{
  "name":  "cloud.jpg", // 请确保文件名有准确的文件类型
  "value": value,
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
services.MiniProgramApp.Security.MediaCheckAsync(
  "https://inews.gtimg.com/newsapp_ls/0/13978118573_640330/0", // 图片或者音频的在线地址
  2, // 1:音频;2:图片
  2, // 接口版本号，2.0版本为固定值2
  openID, // 用户的openid（用户需在近两小时访问过小程序）
  1, // 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志）
)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.mediaCheckAsync.html)



## 检查文本违法违规

检查一段文本是否含有违法违规内容。

应用场景举例：

1. 用户个人资料违规文字检测；
2. 媒体新闻类用户发表文章，评论内容检测；
3. 游戏类用户编辑上传的素材(如答题类小游戏用户上传的问题及答案)检测等。 *频率限制：单个 appId 调用上限为 4000 次/分钟，2,000,000 次/天**

``` go
services.MiniProgramApp.Security.MsgSecCheck(
  "[openid]",
  1, // 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志）
  2, // 接口版本号，2.0版本为固定值2
  "[content]", // 需检测的文本内容，文本字数的上限为2500字
  "[nickname]", // 非必传。 用户昵称
  "[title]", //  非必传。 文本标题
  "[signature]", //  非必传。 个性签名，该参数仅在资料类场景有效(scene=1)
)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html)
