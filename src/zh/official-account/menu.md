# 自定义菜单


## 读取（查询）已设置菜单 
``` go
OfficialAccountApp.Menu.Get()
```
[微信官方文档]()


## 获取当前菜单 
``` go
OfficialAccountApp.Menu.CurrentSelfMenu()
```
[微信官方文档]()

## 添加菜单

### 添加普通菜单 
``` go
  OfficialAccountApp.Menu.Create(&request.RequestMenuCreate{
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
### 添加个性化菜单
``` go
OfficialAccountApp.Menu.CreateConditional(&request.RequestMenuCreate{
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
[微信官方文档]()

## 删除菜单 

``` go
OfficialAccountApp.Menu.Delete()
```
``` go
menuID := 1
OfficialAccountApp.Menu.DeleteConditional(menuID)
```
[微信官方文档]()

## 测试个性化菜单 
``` go
OfficialAccountApp.Menu.TryMatch("[userID]")
```
[微信官方文档]()