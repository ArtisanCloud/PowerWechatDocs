# 返佣商品

## 导入商品
``` go
  products := &request.RequestProduct{
		Product: []*request.Product{
			{
				PID: "pid001",
				ImageInfo: &request.ImageInfo{
					MainImageList: []*request.MainImage{
						{URL: "http://www.google.com/a.jpg"},
					},
				},
				CategoryInfo: &request.CategoryInfo{
					CategoryItem: []*request.CategoryItem{
						{CategoryName: "图书"},
						{CategoryName: "少儿图书"},
					},
				},
				OfficialCategoryInfo: &request.OfficialCategoryInfo{
					CategoryItem: []*request.CategoryItem{
						{CategoryName: "图书"},
					},
				},
				LinkInfo: &request.LinkInfo{
					URL:      "pages/index/index",
					WxaAppID: "wxa0x01adx3423566",
					LinkType: "wxa",
				},
				Title:    "test title",
				SubTitle: "test sub_title",
				Brand:    "test brand",
				ShopInfo: &request.ShopInfo{
					Source: 2,
				},
				Desc: "test desc",
				PriceInfo: &request.PriceInfo{
					MinPrice:    250,
					MaxPrice:    250.22,
					MinOriPrice: 300.1,
					MaxOriPrice: 320.15,
				},
				SaleInfo: &request.SaleInfo{
					SaleStatus: "on",
					Stock:      1000,
				},
				CustomInfo: &request.CustomInfo{CustomList: []*request.Custom{
					{
						Key:   "book_desc",
						Value: "“熊猫先生”通过4个富有节律性、带有因果关系、幽默风趣，又有正反对比的故事，让小朋友明白礼仪的重要性。",
					},
					{
						Key:   "author",
						Value: "史蒂夫•安东尼",
					},
					{
						Key:   "publisher",
						Value: "中信出版社",
					},
				}},
				SKUInfo: &request.SKUInfo{
					SKUItem: []*request.SKUItem{
						{
							SKUID:       "sku001",
							BarcodeType: "ean13",
							Barcode:     2018032105140,
							ImageInfo: &request.ImageInfo{
								MainImageList: []*request.MainImage{
									{URL: "http://www.baidu.com/c.jpg"},
									{URL: "http://www.baidu.com/d.jpg"},
								},
							},
							LinkUrl: "pages/index/index?a=b",
							PriceInfo: &request.PriceInfo{
								MinPrice:    250,
								MaxPrice:    250.22,
								MinOriPrice: 300.1,
								MaxOriPrice: 320.15,
							},
							SaleInfo: &request.SaleInfo{
								SaleStatus: "on",
								Stock:      500,
							},
							ShopInfo: &request.ShopInfo{
								Source: 2,
							},
							AttributeInfo: &request.AttributeInfo{
								AttributeItem: []*request.AttributeItem{
									{
										AttributeKey:   "酒店房型",
										AttributeValue: "海景大床房",
									},
								},
							},
						},
					},
				},
				PartialUpdate: 0,
				TagInfo:       nil,
			},
		},
	}
	OfficialAccountApp.Goods.Add(products)
```
[微信官方文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11533749572M9ODP&version=1&lang=zh_CN&platform=2)


## 更新商品
``` go
// 整个products参考上面导入商品
products := &request.RequestProduct{
	Product: []*request.Product{
		{
			PID: "pid001",
		}
	}
}	
OfficialAccountApp.Goods.Update(products)
```
[微信官方文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11533749572M9ODP&version=1&lang=zh_CN&platform=2)

## 查询导入/更新商品状态
``` go
OfficialAccountApp.Goods.Status("[statusTicket]")
```
[微信官方文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11533749572M9ODP&version=1&lang=zh_CN&platform=2)

## 获取单个商品信息
``` go
OfficialAccountApp.Goods.Get(&request.RequestProductGet{
	Product: &request.ProductID{
		PID: "[pid]",
	},
})
```
[微信官方文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11533749572M9ODP&version=1&lang=zh_CN&platform=2)

## 分页获取商品信息
``` go
page := 1
size := 10
res, err := services.OfficialAccountApp.Goods.List("[page_context]", page, size)
```
[微信官方文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11533749572M9ODP&version=1&lang=zh_CN&platform=2)

## 使用示例
参考: [PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial/blob/master/controllers/official-account/goods.go)