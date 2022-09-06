# 模板消息

::: tip
发送模版消息可以和小程序共用[统一服务消息](/zh/mini-program/uniform-message.md)
:::

## 修改账号所属行业

```go
OfficialAccountApp.TemplateMessage.SetIndustry("[industryId1]", "[industryId2]", nil)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#0)

## 获取帐号设置的行业信息

```go
OfficialAccountApp.TemplateMessage.GetIndustry()
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#1)

## 添加模版

```go
shortID := "TM00015"
OfficialAccountApp.TemplateMessage.AddTemplate(shortID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#2)

## 获取所有模版列表

```go
OfficialAccountApp.TemplateMessage.GetPrivateTemplates()
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#3)

## 删除模版

```go
OfficialAccountApp.TemplateMessage.DeletePrivateTemplate("[templateID]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#4)


## 发送模板消息

```go
OfficialAccountApp.TemplateMessage.Send(&request.RequestTemlateMessage{
  ToUser:     toUser,
  TemplateID: templateID,
  URL:        "https://www.artisan-cloud.com/",
  Data: &power.HashMap{
    "first": &power.HashMap{
      "value": "恭喜你购买成功！",
      "color": "#173177",
    },
    "DateTime": &power.HashMap{
      "value": "2022-3-5 16:22",
      "color": "#173177",
    },
    "PayAmount": &power.HashMap{
      "value": "59.8元",
      "color": "#173177",
    },
    "Location": &power.HashMap{
      "value": "上海市长宁区",
      "color": "#173177",
    },
    "remark": &power.HashMap{
      "value": "欢迎再次购买！",
      "color": "#173177",
    },
  },
})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#5)


## 发送一次性订阅消息

```go
OfficialAccountApp.TemplateMessage.SendSubscription(&request.RequestTemlateMessageSubscribe{
  ToUser:     toUser,
  TemplateID: templateID,
  URL:        "https://www.artisan-cloud.com/",
  Data: &power.HashMap{
    "first": &power.HashMap{
      "value": "恭喜你购买成功！",
      "color": "#173177",
    },
    "keyword1": &power.HashMap{
      "value": "巧克力",
      "color": "#173177",
    },
    "keyword2": &power.HashMap{
      "value": "39.8元",
      "color": "#173177",
    },
    "keyword3": &power.HashMap{
      "value": "2014年9月22日",
      "color": "#173177",
    },
    "remark": &power.HashMap{
      "value": "欢迎再次购买！",
      "color": "#173177",
    },
  },
})
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html#5)


## 使用示例

### 参考: 
* [template-message.go](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/template-message.go)
* [uniform-message.go](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/uniform-message.go)
