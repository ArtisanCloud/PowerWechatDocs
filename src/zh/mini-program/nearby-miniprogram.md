---
title: 附近的小程序
date: 2021-07-06
description: 使用PowerWeChat对附近的小程序进行地点添加、删除、展示/隐藏等。
---

# 附近的小程序

## 添加地点

``` go
MiniProgramApp.NearbyPoi.Add(ctx, &request.RequestNearbyPoiAdd{
  IsCommNearby:      "1", //值固定
  KfInfo:            "{\"open_kf\":true,\"kf_headimg\":\"http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg\",\"kf_name\":\"Harden\"}",
  PicList:           "{\"list\":[\"http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg\",\"http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITRneE5FS9uYruXGMmrtmhsBySwddEWUGOibG8Ze2NT5E3Dyt79I0htNg/0?wx_fmt=jpeg\"]}",
  ServiceInfos:      "{\"service_infos\":[{\"id\":2,\"type\":1,\"name\":\"快递\",\"appid\":\"wx1373169e494e0c39\",\"path\":\"index\"},{\"id\":0,\"type\":2,\"name\":\"自定义\",\"appid\":\"wx1373169e494e0c39\",\"path\":\"index\"}]}",
  StoreName:         "羊村小马烧烤",
  ContractPhone:     "111111111",
  Hour:              "00:00-11:11",
  CompanyName:       "深圳市腾讯计算机系统有限公司",
  Credential:        "156718193518281",
  Address:           "新疆维吾尔自治区克拉玛依市克拉玛依区碧水路15-1-8号(碧水云天广场)",
  QualificationList: "3LaLzqiTrQcD20DlX_o-OV1-nlYMu7sdVAL7SV2PrxVyjZFZZmB3O6LPGaYXlZWq",
  PoiID:             "",
})
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/nearby-poi/nearbyPoi.add.html)

## 删除地点

``` go
MiniProgramApp.NearbyPoi.Delete("[poi_id]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/nearby-poi/nearbyPoi.delete.html)



## 查看地点列表

``` go
page := 1
pageRows := 100
services.MiniProgramApp.NearbyPoi.GetList(page, pageRows)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/nearby-poi/nearbyPoi.getList.html)



## 展示/取消展示附近小程序

``` go
MiniProgramApp.NearbyPoi.SetShowStatus("[poi_id]", 1) // 0: 不展示 1: 展示
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/nearby-poi/nearbyPoi.setShowStatus.html)



## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/miniprogram/near-by-poi.go)

