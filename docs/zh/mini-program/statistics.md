---
title: 数据统计与分析
date: 2021-09-12
description: 通过PowerWeChat查询小程序的访问留存、访问趋势、用户画像等
---

## 访问留存

### 小程序日留存

```go
MiniProgramApp.DataCube.GetDailyRetainInfo("20170313", "20170313")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-retain/analysis.getDailyRetain.html)

---

### 小程序月留存

```go
MiniProgramApp.DataCube.GetMonthlyRetainInfo("20210906", "20210912")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-retain/analysis.getMonthlyRetain.html)

---

### 小程序周留存

```go
MiniProgramApp.DataCube.GetWeeklyRetainInfo("20170201", "20170228")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-retain/analysis.getWeeklyRetain.html)

## 日汇总统计数据

### 小程序数据概况

```go
MiniProgramApp.DataCube.GetDailySummary("20170313", "20170313")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/analysis.getDailySummary.html)

## 访问趋势

### 小程序数据日趋势

```go
MiniProgramApp.DataCube.GetDailyVisitTrend("20170313", "20170313")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-trend/analysis.getDailyVisitTrend.html)

---

### 小程序数据月趋势

注：(能查询到的最新数据为上一个自然月的数据)

```go
MiniProgramApp.DataCube.GetMonthlyVisitTrend("20170301", "20170301")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-trend/analysis.getMonthlyVisitTrend.html)

---

### 小程序数据周趋势

```go
MiniProgramApp.DataCube.GetWeeklyVisitTrend("20170306", "20170312")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-trend/analysis.getWeeklyVisitTrend.html)

## 性能/运行性能数据

```go
options := &request.RequestGetPerformanceData{
  Time: &request.GetPerformanceDataTime{
    BeginTimestamp: 1609689600,
    EndTimestamp:   1609603200,
  },
  Module: "10022",
  Params: []*request.GetPerformanceDataParams{
    {
      Field: "networktype",
      Value: "wifi",
    },
    {
      Field: "device_level",
      Value: "1",
    },
    {
      Field: "device",
      Value: "1",
    },
  },
}
MiniProgramApp.DataCube.GetPerformanceData(options)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/analysis.getPerformanceData.html)

## 用户画像数据

### 新增或活跃用户的画像分布

```go
from := "20210906"
to := "20210912"

MiniProgramApp.DataCube.GetUserPortrait("20170611", "20170617")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/analysis.getUserPortrait.html)

## 访问分布数据

```go
MiniProgramApp.DataCube.GetVisitDistribution("20170313", "20170313")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/analysis.getVisitDistribution.html)

## 访问页面数据

```go
MiniProgramApp.DataCube.GetVisitPage("20170313", "20170313")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/analysis.getUserPortrait.html)