# 网页授权

如果公众号服务端需要获得用户的信息，需要走标准的OAuth2流程。整个OAuth2协议比较复杂，本文只是简单的叙述一下流程。

以ArtisanCloud前后端分离的服务为例：

+ 前端域名   : https://www.artisan-cloud.com
+ 服务端域名 : https://api.artisan-cloud.com

会发生如下步骤：
1. 前端发起跳转请求，用户根据scope不同可能需要允许应用获取个人信息。
    ```
    https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4371973ec8f9fa2a&redirect_uri=https://www.artisan-cloud.com&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect
    ```
2. 用户同意授权，微信会重定向回`https://www.artisan-cloud.com?code=xxxxx`。
3. 前端获取code参数，把参数提交给ArtisanCloud服务端。
4. 服务端根据code，换取网页授权access_token，这一步同时会得到openid，到这一步登录流程基本算是完成。
5. （可选）如果需要进一步获取用户昵称头像，需要继续使用上一步的access_token获取用户信息。

在前后端架构分离的情况下，这个和小程序那边是有点相似，获取code这一步都是在前端完整，获取到code才会提交给服务端进行用户信息验证。

整个OAuth2，服务端实际上只需要用到下面几个接口：

## code获取用户基础信息
```
OfficialAccountApp.OAuth.UserFromCode("[code]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)


## token获取用户信息
```
OfficialAccountApp.OAuth.UserFromToken("[token]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)




## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/oauth.go)
