---
title: 通讯录
date: 2021-07-06
---

# 通讯录

## 基本配置

PowerWechat配置参考： [入门](./index)， 唯一的区别就是`Secret`变成了通讯录secret。

`Secret`原则上需要使用 [通讯录管理secret](https://open.work.weixin.qq.com/api/doc/90000/90135/90193#10013/术语介绍)，也可以使用 [应用secret](https://open.work.weixin.qq.com/api/doc/90000/90135/90193#10013/术语介绍)。

``` go
WeComContactApp, err := work.NewWork(&work.UserConfig{
  // ...
  Secret: "[contacts secret]", // 通讯录secret或者应用secret
  // ...
})
```



## 成员管理

### 创建成员 

``` go
WeComApp.User.Create(&request.RequestUserDetail{
  UserID:     "[userId]",
  Name:       "[name]",
  Mobile:     "[mobile]",
  Department: []int{0},
})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90195)

### 读取成员 

``` go
WeComApp.User.Get("[userId]")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90196)

### 更新成员 

``` go
WeComApp.User.Update(&request.RequestUserDetail{
  UserID: "[userId]",
  Name:   "[name]",
})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90197)

### 删除成员 

``` go
WeComApp.User.Delete("[userId]")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90198)

### 批量删除成员 

``` go
WeComApp.User.BatchDelete([]string{"[userId1]", "[userId2]"})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90199)

###  获取部门成员

``` go
departmentId := 1
fetchChild := 1
WeComApp.User.GetDepartmentUsers(departmentId, fetchChild)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90200)

### 获取部门成员详情 

``` go
departmentId := 1
fetchChild := 1
WeComApp.User.GetDetailedDepartmentUsers(departmentId, fetchChild)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90201)

### userid和openid互转 

userid转opened

``` go
WeComApp.User.UserIdToOpenid("[userId]")
```

openid转userid

``` go
WeComApp.User.OpenIDToUserID("[openid]")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90202)

### 二次验证 

``` go
WeComApp.User.Accept("[userId]")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90203)

### 邀请成员 

``` go
WeComApp.User.Invite(&power.HashMap{
  "user": []string{"[userId1]", "[userId2]"},
})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90975)

### 获取加入企业二维码 

``` go
size := 3
WeComApp.User.GetJoinQrCode(size)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/91714)

### 获取企业活跃成员数 

``` go
WeComApp.User.GetActiveStat("2021-09-13")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/92714)



## 部门管理

### 获取部门列表

``` go
// 0 表示获取企业所有部门
id := 0
WeComContactApp.Department.List(id)
```
[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90208)

### 获取子部门ID列表 

``` go
// 0 表示获取企业所有部门
id := 0
WeComContactApp.Department.SimpleList(id)
```
[微信官方文档](https://developer.work.weixin.qq.com/document/path/95350)

### 创建部门

``` go
services.WeComContactApp.Department.Create(&power.HashMap{
  "name": "IT支持部",
  "parentid": 1, // 父部门id，32位整型
  "id": id, // 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id
})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90205)

### 更新部门

```go
services.WeComContactApp.Department.Update(id, &power.HashMap{
  "name": "IT支持部1",
  "parentid": 1,
})
```

需要更新哪个部门字段就提交对应字段。

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90206)

### 删除部门

``` go
services.WeComContactApp.Department.Delete(id)
```

注：不能删除根部门；不能删除含有子部门、成员的部门

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90207)



## 标签管理

这里为了方便文档展示，使用了`const defaultTagId = 100`，实际应用中请自行改成合适的`tagId`

### 创建标签 

```go
WeComApp.UserTag.Create("TestTag", defaultTagId)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90210)

### 更新标签名字 

```go
WeComApp.UserTag.Update("TestTag1", defaultTagId)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90211)

### 删除标签 

```go
WeComApp.UserTag.Delete(defaultDepartmentId)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90212)

### 获取标签列表 

```go
WeComApp.UserTag.List()
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90216)

### 获取标签成员 

```go
WeComApp.UserTag.Get(defaultTagId)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90213)

### 增加标签成员 

```go
WeComApp.UserTag.TagUsers(defaultTagId, []string{"[userId]"})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90214)

### 删除标签成员 

```go
WeComApp.UserTag.TagUsers(defaultTagId, []string{"[userId]"})
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90215)



## 异步批量接口

### 增量更新成员 

```go
callback := &power.StringMap{
  "url":            "xxx",
  "token":          "xxx",
  "encodingaeskey": "xxx",
}
WeComApp.UserBatchJobs.SyncUser("[mediaID]", true, callback)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90980)

### 全量覆盖成员 

```go
callback := &power.StringMap{
  "url":            "xxx",
  "token":          "xxx",
  "encodingaeskey": "xxx",
}
WeComApp.UserBatchJobs.ReplaceUser("[mediaID]", true, callback)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90981)

### 全量覆盖部门 

```go
WeComApp.UserLinkedCorp.GetDepartmentList("[departmentID]")
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90982)

## 获取异步任务结果 

``` go
WeComApp.UserBatchJobs.GetBatchResult("[jobID]")
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90983)



## 通讯录回调通知 



## 互联企业

### 获取应用的可见范围 

```go
WeComApp.UserLinkedCorp.GetPermList()
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/93172)



### 获取互联企业成员详细信息 

```go
WeComApp.UserLinkedCorp.GetUser("[userID]")
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93171)



### 获取互联企业部门成员 

```go
departmentID := "10001"
fetchChild := true
WeComApp.UserLinkedCorp.GetUserSimpleList(departmentID, fetchChild)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93168)



### 获取互联企业部门成员详情 

```go
departmentID := "10001"
fetchChild := true
WeComApp.UserLinkedCorp.GetUserList(departmentID, true)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93169)



### 获取互联企业部门列表 

```go
departmentID := "10001"
WeComApp.UserLinkedCorp.GetDepartmentList(departmentID)
```

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/93170)



## 异步导出接口



### 导出成员 

``` go
encodingAESKey := ""
blockSize := int64(1000000)
WeComApp.UserExportJobs.SimpleUser(encodingAESKey, blockSize)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/94849)

### 导出成员详情 

``` go
encodingAESKey := ""
blockSize := int64(1000000)
WeComApp.UserExportJobs.User(encodingAESKey, blockSize)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/94851)

### 导出部门 

``` go
encodingAESKey := ""
blockSize := int64(1000000)
WeComApp.UserExportJobs.Department(encodingAESKey, blockSize)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/94852)

### 导出标签成员 

``` go
encodingAESKey := ""
blockSize := int64(1000000)
tagID := 1
WeComApp.UserExportJobs.TagUser(tagID, encodingAESKey, blockSize)
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/94853)

### 获取导出结果 

``` go
WeComApp.UserExportJobs.GetExportResult("[jobID]")
```

[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/94854)

### 导出任务完成异步通知 

[微信官方文档](https://work.weixin.qq.com/api/doc/90000/90135/90983)


## 使用示例
 
参考：[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/wecom/user/user.go)