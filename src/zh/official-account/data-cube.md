# 数据统计与分析


## 用户分析

### 获取用户增减数据
```go
OfficialAccountApp.DataCube.GetUserSummary("2020-01-01", "2020-01-02")
````
[微信官方文档]()

### 获取累计用户数据
```go
OfficialAccountApp.DataCube.GetUserCumulate("2020-01-01", "2020-01-02")
```
[微信官方文档]()


## 图文分析

### 获取图文群发每日数据
```go
OfficialAccountApp.DataCube.ArticleSummary("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文群发总数据
```go
OfficialAccountApp.DataCube.ArticleTotal("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文统计数据
```go
OfficialAccountApp.DataCube.UserReadSummary("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文统计分时数据（getuserreadhour）
```go

```
[微信官方文档]()

### 获取图文分享转发数据
```go
OfficialAccountApp.DataCube.UpstreamMessageSummary("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取图文分享转发分时数据
```go
OfficialAccountApp.DataCube.UserShareHourly("2020-01-01", "2020-01-02")
```
[微信官方文档]()


## 消息分析

### 获取消息发送概况数据
```go
OfficialAccountApp.DataCube.UpstreamMessageSummary("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分时数据
```go
OfficialAccountApp.DataCube.UpstreamMessageHourly("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送周数据
```go
OfficialAccountApp.DataCube.UpstreamMessageWeekly("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送月数据
```go
OfficialAccountApp.DataCube.UpstreamMessageMonthly("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistSummary("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布周数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistWeekly("2020-01-01", "2020-01-02")
```
[微信官方文档]()

### 获取消息发送分布月数据
```go
OfficialAccountApp.DataCube.UpstreamMessageDistMonthly("2020-01-01", "2020-01-02")
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
