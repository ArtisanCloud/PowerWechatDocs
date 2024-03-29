# 用户标签管理

开发者可以使用用户标签管理的相关接口，实现对公众号的标签进行创建、查询、修改、删除等操作，也可以对用户进行打标签、取消标签等操作。


## 获取标签列表

``` go
OfficialAccountApp.UserTag.List(ctx)
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)
## 创建标签

``` go
OfficialAccountApp.UserTag.Create(ctx,"[tagName]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 编辑标签

``` go
OfficialAccountApp.UserTag.Update(ctx,"[tagID]", "[tagName]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 删除标签

``` go
OfficialAccountApp.UserTag.Delete(ctx,"[tagID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 获取标签下粉丝列表

``` go
nextOpenID := ""
OfficialAccountApp.UserTag.UsersOfTag(ctx,"[tagID]", nextOpenID)
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 批量为用户打标签

``` go
OfficialAccountApp.UserTag.TagUsers(ctx,[]string{"[openID1]", "[openID2]"}, "[tagID]")
``` 

[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 批量为用户取消标签

``` go
OfficialAccountApp.UserTag.UntagUsers(ctx,[]string{"[openID1]", "[openID2]"}, "[tagID]")
``` 

[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)

## 获取用户身上的标签列表

``` go
OfficialAccountApp.UserTag.UserTags(ctx,"[openID]")
``` 
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/User_Management/User_Tag_Management.html)


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/user-tag.go)
