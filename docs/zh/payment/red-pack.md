---
title: 红包
date: 2021-07-06
---

# 红包

商户可以通过公众号或者服务通知向用户发放现金红包。



## 配置

在使用前，请确认`payment.UserConfig`里面配置了的`CertPath`和`KeyPath`，比较完整的配置参考[介绍](./index)

``` go
PaymentService, err := payment.NewPayment(ctx,&payment.UserConfig{
  // ...
  CertPath: "[your cert path]",
  KeyPath:  "[your key path]",
  // ...
})
```

服务商模式下， 需要设置一下`SetSubMerchant`

``` go
paymentService.SetSubMerchant("[sub_mch_id]", "") 
```

## 发送红包

### 普通红包

```go
paymentService.RedPack.SendNormal(ctx,&request.RequestSendRedPack{
		MchBillNO:   "0010010404201411170000046545",
		MchID:       mchId,
		WXAppID:     appId,
		SendName:    "ArtisanCloud",
		ReOpenID:    "oAuaP0TRUMwP169nQfg7XCEAw3HQ",
		TotalAmount: 100,
		TotalNum:    1,
		Wishing:     "恭喜发财",
		ClientIP:    "127.0.0.1",
		ActName:     "新年红包",
		Remark:      "新年红包",
		SceneID:     "PRODUCT_2",
		RiskInfo:    "posttime%3d123123412%26clientversion%3d234134%26mobile%3d122344545%26deviceid%3dIOS",
	})
```

微信官方文档：https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_4&index=3





## 小程序红包

``` go
paymentService.RedPack.SendMiniProgramNormal(ctx,&power.HashMap{
  "mch_billno": "10000098201411111234567890", // 商户订单号（每个订单号必须唯一）接口根据商户订单号支持重入，如出现超时可再调用。
  "send_name": "天虹百货", // 红包发送者名称
  "re_openid": "oxTWIuGaIt6gTKsQRLau2M0yL16E", // 接受红包的用户openid
  "total_amount": 1000, // 付款金额，单位分
  "wishing": "感谢您参加猜灯谜活动，祝您元宵节快乐！", // 红包祝福语
  "client_ip": "192.168.0.1", // 调用接口的机器Ip地址， 不填则自动获取
  "act_name": "猜灯谜抢红包活动", // 活动名称
  "remark": "猜越多得越多，快来抢！", // 备注信息
})
```

微信官方文档： https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=18_2&index=2



## 裂变红包

裂变红包：一次可以发放一组红包。首先领取的用户为种子用户，种子用户领取一组红包当中的一个，并可以通过社交分享将剩下的红包给其他用户。裂变红包充分利用了人际传播的优势。

``` go
paymentService.RedPack.SendGroup(ctx,&power.HashMap{
  "mch_billno": "10000098201411111234567890", // 商户订单号（每个订单号必须唯一）接口根据商户订单号支持重入，如出现超时可再调用。
  "send_name": "天虹百货", // 红包发送者名称
  "re_openid": "oxTWIuGaIt6gTKsQRLau2M0yL16E", // 接受红包的用户openid
  "total_num": 3, // total_num >= 3 红包发放总人数，即总共有多少人可以领到该组红包。
  "total_amount": 1000, // 付款金额，单位分
  "wishing": "感谢您参加猜灯谜活动，祝您元宵节快乐！", // 红包祝福语
  "client_ip": "192.168.0.1", // 调用接口的机器Ip地址， 不填则自动获取
  "act_name": "猜灯谜抢红包活动", // 活动名称
  "remark": "猜越多得越多，快来抢！", // 备注信息
  "amt_type": "ALL_RAND", // 可不传。因为微信目前只有一种ALL_RAND（全部随机）。
})
```

微信官方文档：https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_5&index=4



##  红包预下单接口（TODO）



## 查询红包记录

用于商户对已发放的红包进行查询红包的具体信息，可支持普通红包和裂变包。

``` go
paymentService.RedPack.Info("[mch_billno]")
```

### mch_billno

- 类型: `string(28)`
- 必传: `是`
- 示例: `10000098201411111234567890` 

商户发放红包的商户订单号

微信官方文档：https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_6&index=5

