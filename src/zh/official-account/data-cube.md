# 数据统计与分析


## 用户分析

### 获取用户增减数据
```go
OfficialAccountApp.DataCube.GetUserSummary(ctx,"2020-01-01", "2020-01-02")
````
[微信官方文档]()

### 获取累计用户数据
```go
OfficialAccountApp.DataCube.GetUserCumulate(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()


## 图文分析

### 获取图文群发每日数据
```go
OfficialAccountApp.DataCube.ArticleSummary(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文群发总数据
```go
OfficialAccountApp.DataCube.ArticleTotal(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文统计数据
```go
OfficialAccountApp.DataCube.UserReadSummary(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文统计分时数据（getuserreadhour）
```go

```
[微信官方文档]()

### 获取图文分享转发数据
```go
OfficialAccountApp.DataCube.UpstreamMessageSummary(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文分享转发分时数据
```go
OfficialAccountApp.DataCube.UserShareHourly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()


## 消息分析

### 获取消息发送概况数据
```go
OfficialAccountApp.DataCube.UpstreamMessageSummary(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分时数据
```go
OfficialAccountApp.DataCube.UpstreamMessageHourly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送周数据
```go
OfficialAccountApp.DataCube.UpstreamMessageWeekly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送月数据
```go
OfficialAccountApp.DataCube.UpstreamMessageMonthly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistSummary(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布周数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistWeekly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布月数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistMonthly(ctx,"2020-01-01", "2020-01-02")
```
[微信官方文档]()


## 广告分析 (TODO)

### 获取公众号分广告位数据
```go

```
[微信官方文档]()

### 获取公众号返佣商品数据
```go

```
[微信官方文档]()

### 获取公众号结算收入数据及结算主体信息
```go

```
[微信官方文档]()


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/data-cube.go)
