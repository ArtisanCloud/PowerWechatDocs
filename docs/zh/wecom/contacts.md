---
title: 通讯录
date: 2021-07-06
---

## 基本配置

PowerWechat配置参考： [入门](README.md)， 唯一的区别就是`Secret`变成了通讯录secret。

`Secret`原则上需要使用 [通讯录管理secret](https://open.work.weixin.qq.com/api/doc/90000/90135/90193#10013/术语介绍)，也可以使用 [应用secret](https://open.work.weixin.qq.com/api/doc/90000/90135/90193#10013/术语介绍)。

``` go
WeComContactApp, err := work.NewWork(&work.UserConfig{
  // ...
  Secret: "[contacts secret]", // 通讯录secret或者应用secret
  // ...
})
```



## 部门管理

### 获取部门列表

``` go
services.WeComContactApp.Department.List()
```

### 创建部门

``` go
services.WeComContactApp.Department.Create(&power.HashMap{
  "name": "IT支持部",
  "parentid": 1, // 父部门id，32位整型
  "id": id, // 部门id，32位整型，指定时必须大于1。若不填该参数，将自动生成id
})
```

### 更新部门

```go
services.WeComContactApp.Department.Update(id, &power.HashMap{
  "name": "IT支持部1",
  "parentid": 1,
})
```

需要更新哪个部门字段就提交对应字段。

### 删除部门

``` go
services.WeComContactApp.Department.Delete(id)
```

注：不能删除根部门；不能删除含有子部门、成员的部门



## 成员管理





---



[微信官方文档](https://open.work.weixin.qq.com/api/doc/90000/90135/90208)

