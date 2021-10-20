---
title: 插件管理
date: 2021-09-13
description: 使用PowerWeChat对申请、取消、审批插件使用
---



## 申请插件

向插件开发者发起使用插件的申请。

```go
MiniProgramApp.Plugin.ApplyPlugin("[plugin_appid]", "test reason")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.applyPlugin.html)



## 获取当前所有插件使用方

获取当前所有插件使用方（供插件开发者调用）

``` go
page := 1
num  := 10 // 每页的记录数
MiniProgramApp.Plugin.GetPluginDevApplyList("dev_apply_list", page, num)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.getPluginDevApplyList.html)



## 查询已添加的插件

``` go
MiniProgramApp.Plugin.GetPluginList()
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.getPluginList.html)



##  插件使用申请审批

修改插件使用申请的状态（供插件开发者调用）

``` go
appId  := "[appid]"  // 使用者的 appid。同意申请时填写。
action := "dev_agree" // 修改操作。 dev_agree: 同意申请; dev_refuse: 拒绝申请; dev_delete: 删除已拒绝的申请者	
reason := "test reason" // 拒绝理由。拒绝申请时填写。

MiniProgramApp.Plugin.SetDevPluginApplyStatus(action, appId, reason)
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.setDevPluginApplyStatus.html)



## 删除已添加的插件

``` go
MiniProgramApp.Plugin.UnbindPlugin("[plugin_appid]")
```

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/plugin-management/pluginManager.unbindPlugin.html)
