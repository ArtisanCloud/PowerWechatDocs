# 自定义菜单


## 读取（查询）已设置菜单 
``` go
OfficialAccountApp.Menu.Get(https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Querying_Custom_Menus.html)
```
[微信官方文档]()


## 获取当前菜单 
``` go
OfficialAccountApp.Menu.CurrentSelfMenu()
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Querying_Custom_Menus.html)

## 添加菜单

### 添加普通菜单 
``` go
  OfficialAccountApp.Menu.Create(ctx, &request.RequestMenuCreate{
    Buttons: []*request.Button{
      {
        Type: "click",
        Name: "今日歌曲",
        Key:  "V1001_TODAY_MUSIC",
      },
      {
        Name: "Menu1",
        SubButtons: []request.SubButton{
          {
            Type: "view",
            Name: "搜索",
            URL:  "http://www.soso.com/",
          },
          {
            Type:     "miniprogram",
            Name:     "wxa",
            URL:      "http://mp.weixin.qq.com",
            AppID:    "wx286b93c14bbf93aa",
            PagePath: "pages/lunar/index",
          },
          {
            Type: "click",
            Name: "赞一下我们",
            Key:  "V1001_GOOD",
          },
        },
      },
    },
  })
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Creating_Custom-Defined_Menu.html)



### 添加个性化菜单
``` go
OfficialAccountApp.Menu.CreateConditional(ctx, &request.RequestMenuCreate{
    Buttons: []*request.Button{
      {
        Type: "click",
        Name: "个性化菜单",
        Key:  "V1001_TODAY_MUSIC",
      },
    },
  }, &request.RequestMatchRule{
    Sex:                "1",
    Country:            "中国",
    Province:           "广东",
    City:               "广州",
    ClientPlatformType: "2",
  })
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Personalized_menu_interface.html)


## 删除菜单 

``` go
OfficialAccountApp.Menu.Delete()
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Deleting_Custom-Defined_Menu.html)

``` go
menuID := 1
OfficialAccountApp.Menu.DeleteConditional(menuID)
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Personalized_menu_interface.html)

## 测试个性化菜单 
``` go
OfficialAccountApp.Menu.TryMatch("[userID]")
```
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Personalized_menu_interface.html)



## 使用示例

参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/menu.go)
