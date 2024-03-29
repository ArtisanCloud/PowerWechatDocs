---
title: 素材管理
date: 2021-09-24
---

# 素材管理

在使用素材管理之前，请确定你已经[入门](./index)初始化好了`OfficialAccountApp`实例。

这里的路径都是本地文件路径，可以是go程序相对路径或者是绝对路径

## 上传永久图片
``` go
OfficialAccountApp.Material.UploadImage(ctx,"./resource/cloud.jpg")
```

## 上传永久语音
``` go
OfficialAccountApp.Material.UploadVoice(ctx,"./resource/cha-cha-ender.mp3")
```

## 上传永久视频
``` go
OfficialAccountApp.Material.UploadVideo(ctx,"./resource/3d_ocean_1590675653.mp4", "test title", "test description")
```

## 上传永久缩略图
``` go
OfficialAccountApp.Material.UploadThumb(ctx,"./resource/cloud.jpg")
```

## 获取永久素材
``` go
OfficialAccountApp.Material.Get(ctx,"[mediaID]")
```

## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/asset.go)
