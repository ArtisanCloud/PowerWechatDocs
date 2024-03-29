---
title: 通知
date: 2021-08-29
---

# 通知

使用之前，请先参考[入门](./index)

在JSSDK、小程序、APP、H5等平台支付完成之后，微信都会向服务端发起一个支付成功通知给到商户端。

## 处理通知回调

在PowerWechat里，处理通知只需要调用一个`PaymentService.HandlePaidNotify`即可。 至于~~证书签名验证~~、~~RSA解密~~等，通通不需要。
``` go
res, err := services.PaymentApp.HandlePaidNotify(
  c.Request,
  func(message *request.RequestNotify, transaction *models.Transaction, fail func(message string)) interface{} {

    // 看下支付通知事件状态
    // 这里可能是微信支付失败的通知，所以可能需要在数据库做一些记录，然后告诉微信我处理完成了。
    if message.EventType != "TRANSACTION.SUCCESS" {
      return true
    }

    if *transaction.OutTradeNo != "" {
      // 这里对照自有数据库里面的订单做查询以及支付状态改变
      log.Printf("订单号：%s 支付成功", transaction.OutTradeNo)
    } else {
      // 因为微信这个回调不存在订单号，所以可以告诉微信我还没处理成功，等会它会重新发起通知
      // 如果不需要，直接返回true即可
      fail("payment fail")
      return nil
    }
    return true
  },
)

// 这里可能是因为不是微信官方调用的，无法正常解析出transaction和message，所以直接抛错。
if err != nil {
  panic(err)
}

// 这里根据之前返回的是true或者fail，框架这边自动会帮你回复微信
err = res.Write(c.Writer)

if err != nil {
  panic(err)
}
```


``` go
// 其他支付通知的回调通知
func (app *Payment) HandlePaidNotify(request *http.Request, closure func(message *request.RequestNotify, transaction *models.Transaction, fail func(message string)) interface{}) (*response.HttpResponse, error) {
	return notify.NewPaidNotify(app, request).Handle(closure)
}

func (app *Payment) HandleRefundedNotify(request *http.Request, closure func(message *request.RequestNotify, transaction *models.Refund, fail func(message string)) interface{}) (*response.HttpResponse, error) {
	return notify.NewRefundNotify(app, request).Handle(closure)
}

func (app *Payment) HandleScannedNotify(request *http.Request, closure func(message *request.RequestNotify, fail func(message string), alert func(message string)) interface{}) (*response.HttpResponse, error) {
	return notify.NewScannedNotify(app, request).Handle(closure)
}

```

> **注意:** 
> * 同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。
> * 推荐的做法是，当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。
>   * 如果未处理，则再进行处理；
>   * 如果已处理，则直接返回结果成功。在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。
> * 如果在所有通知频率后没有收到微信侧回调，商户应调用查询订单接口确认订单状态。

至于官方文档中提到的签名验证， PowerWechat已经帮你做好了签名验证的工作，确保回调是来自微信官方的合法签名。

官方文档： [https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_5.shtml](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_5.shtml)
