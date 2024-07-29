---
title: 安全
date: 2023-04-02
---

# 安全

[关于API v3](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay-1.shtml)  

为了在保证支付安全的前提下，带给商户简单、一致且易用的开发体验，我们推出了全新的微信支付API v3。

相较于之前的微信支付API，主要区别是：

* 遵循统一的REST的设计风格
* 使用JSON作为数据交互的格式，不再使用XML
* 使用基于非对称密钥的SHA256-RSA的数字签名算法，不再使用MD5或HMAC-SHA256
* 不再要求携带HTTPS客户端证书（仅需携带证书序列号）
* 使用AES-256-GCM，对回调中的关键信息进行加密保护


## 商户API证书

商户API证书是指由商户申请的，包含商户的商户号、公司名称、公钥信息的证书。

[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_1.shtml)

## 商户API私钥

商户申请商户API证书时，会生成商户私钥，并保存在本地证书文件夹的文件apiclient_key.pem 中。私钥也可以通过工具从商户的p12证书中导出。请妥善保管好你的商户私钥文件。

[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_1.shtml)

## 获取平台证书

微信支付平台证书是指由微信支付 负责申请的，包含微信支付平台标识、公钥信息的证书。商户可以使用平台证书中的公钥进行验签。

``` go

rs, err := services.PaymentApp.Security.GetCertificates(c.Request.Context())
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, rs)
	
```
该证书用于微信支付V3的验证，用户需要自己通过GetCertificates方法去获取证书列表，然后保存到本地，然后将公钥地址，在服务初始化时，赋给CertificateKeyPath

微信官方文档： https://pay.weixin.qq.com/wiki/doc/apiv3/apis/wechatpay5_1.shtml


## 解析平台证书

``` go

form := &response.ResponseGetCertificates{}

if err := c.ShouldBindJSON(form); err != nil {
  panic(err)
}

config := services.PaymentApp.GetConfig()
v3AESKey := config.GetString("mch_api_v3_key", "")

plainTXT, err := support.DecryptAES256GCM(
  v3AESKey,
  form.Data[0].EncryptCertificate.AssociatedData,
  form.Data[0].EncryptCertificate.Nonce,
  form.Data[0].EncryptCertificate.Ciphertext,
)
if err != nil {
  panic(err)
}
fmt.Dump(plainTXT)
c.JSON(http.StatusOK, plainTXT)

```



## 获取 RSA Public Key

``` go

rs, err := services.PaymentApp.Security.GetRSAPublicKey(c.Request.Context())
if err != nil {
  panic(err)
}
fmt.Dump(rs.PubKey)

c.JSON(http.StatusOK, rs)

```
该RSA公钥用于微信支付V2的签名加密，比如付款到银行账户，账户信息需要敏感加密。

微信官方文档：https://pay.weixin.qq.com/wiki/doc/api/tools/mch_pay_yhk.php?chapter=25_7&index=4



