---
title: 临时素材
date: 2021-09-24
---

# 素材管理

在使用素材管理之前，请确定你已经[入门](./index)初始化好了`OfficialAccountApp`实例。

这里的路径都是本地文件路径，可以是go程序相对路径或者是绝对路径

## 上传临时图片
``` go
OfficialAccountApp.Media.UploadImage("/resource/cloud.jpg")
```

## 上传临时语音
``` go
OfficialAccountApp.Media.UploadVoice("./resource/cha-cha-ender.mp3")
```

## 上传临时视频
``` go
OfficialAccountApp.Media.UploadVideo("./resource/3d_ocean_1590675653.mp4")
```

## 上传临时缩略图
``` go
OfficialAccountApp.Media.UploadThumb("/resource/cloud.jpg")
```

## 获取临时素材
``` go
OfficialAccountApp.Media.Get("[mediaID]")
```


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/asset.go)
