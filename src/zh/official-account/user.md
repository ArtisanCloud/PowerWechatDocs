# 用户管理

用户信息的获取是微信开发中比较常用的一个功能了，以下所有的用户信息的获取与更新，都是基于微信的 openid 的，并且是已关注当前账号的，其它情况可能无法正常使用。


## 获取用户信息

获取单个：
``` go
OfficialAccountApp.User.Get(ctx,"[openID]", "zh_CN")
```
获取多个：
``` go
OfficialAccountApp.User.BatchGet(ctx, &request.RequestBatchGetUserInfo{
  UserList: []*request.UserList{
    {
      Openid: "[openID]",
    },
  },
})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId)

## 获取用户列表

``` go
nextOpenId := ""
OfficialAccountApp.User.List(ctx,nextOpenId)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Getting_a_User_List.html)

## 修改用户备注 

``` go
OfficialAccountApp.User.Remark(ctx,"[openID]", "[remark]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Configuring_user_notes.html)


## 黑名单管理

### 获取公众号的黑名单列表
``` go
beginOpenid := ""
OfficialAccountApp.User.Blacklist(ctx,beginOpenid)
``` 

### 拉黑用户

``` go
OfficialAccountApp.User.Block(ctx,[]string{"[openID1]", "[openID2]"})
``` 

### 取消拉黑用户

``` go
OfficialAccountApp.User.Unblock(ctx,[]string{"[openID1]", "[openID2]"})
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/Manage_blacklist.html)

## 账号迁移 openid 转换

``` go
oldAppId := ctx.Query(ctx,"oldAppId")
OfficialAccountApp.User.ChangeOpenID(oldAppId, []string{"[openID1]", "[openID2]"})
``` 
[微信官方文档](https://kf.qq.com/faq/1901177NrqMr190117nqYJze.html)

## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/user.go)
