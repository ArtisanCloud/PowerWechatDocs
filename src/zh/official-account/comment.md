# 评论数据管理

## 打开已群发文章评论
``` go
OfficialAccountApp.Comment.Open(ctx,"[msgID]", 0)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 关闭已群发文章评论
``` go
OfficialAccountApp.Comment.Close(ctx,"[msgID]", 0)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 将评论标记精选
``` go
commentID := 0
OfficialAccountApp.Comment.MarkElect(ctx,"[msgID]", 0, commentID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 将评论取消精选
``` go
commentID := 0
OfficialAccountApp.Comment.UnmarkElect(ctx,"[msgID]", 0, commentID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 删除评论
``` go
commentID := 0
OfficialAccountApp.Comment.Delete(ctx,"[msgID]", 0, commentID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 回复评论
``` go
commentID := 0
OfficialAccountApp.Comment.Delete(ctx,"[msgID]", 0, commentID, "[content]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)

## 删除回复评论
``` go
OfficialAccountApp.Comment.DeleteReply(ctx,"[msgID]", 0, commentID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Comments_management/Image_Comments_Management_Interface.html)


## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/comment.go)
