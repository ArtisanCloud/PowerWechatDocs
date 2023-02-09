# 基本概念

> [官方基本概念](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/getting_started/terminology_introduce.html)

## 角色关系
### 商家
商家 指拥有有自己的品牌，自己的客户数据，以及自己的产品服务，注册在微信生态上的机构。

### 服务商
服务商 指能够提帮助商家，供微信代运营服务的机构。

[如何成为服务商](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/getting_started/how_to_be.html)

### 第三方开放平台
服务商相对商家的角度，就是一个第三方平台的角色，

第三方平台的服务商可以为多个商家提供微信的业务服务

[注册开放平台账号](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/open/create.html)

[创建与配置第三方平台准备工作](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/thirdparty/prepare.html)


## 应用类型说明
### 授权小程序（又名商家小程序）
- 商家可以有小程序，服务商也可以有小程序，为了高效沟通，通常将商家主体的小程序称为商家小程序；
- 当商家将其小程序授权给服务商之后，则称之为授权小程序。
- 然而，商家可以将公众号和小程序都授权给服务商，统称为授权帐号，指的是已经授权给服务商的帐号（含公众号和小程序帐号）
- 与授权帐号相对的是服务商帐号，通常是使用第三方平台帐号来代指服务商帐号。

### 开发小程序（又名模板小程序）
- 商家小程序通常是最终会发布上线，成为一个可用的应用为 C 端用户提供服务的。
- 而开发小程序只是服务商用于进行小程序代码的编写、用于小程序的调试等工作，通常不会发布上线。
- 由于一份小程序的代码可以批量复制于无数个商家小程序，这份母版小程序代码又称小程序模板代码，用于开发该母版小程序代码的小程序帐号则是“开发小程序”帐号，也称之为“模板小程序”帐号。
- “开发小程序”其实也是一个普通的小程序帐号，只需要将普通小程序绑定到第三方平台帐号中即为“开发小程序”。


## 关系操作类型
### 绑定
“绑定”指的是将商家的公众号或者小程序帐号绑定到商家的开放平台下

它只发生在同一个开放平台账户下

#### - 授权小程序的绑定
  将帐号绑定到开放平台帐号 - 这通常是商家侧的行为，目的是将同一开放平台下的应用的用户身份打通；

[绑定授权公众号和小程序](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/open/bind.html)


#### - 开发小程序的绑定
  将帐号绑定到第三方开发平台帐号 - 这通常是服务商侧的行为，目的是使用“开发小程序”为商家提供代开发小程序服务


[绑定开发小程序](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/operation/thirdparty/dev.html)

### 授权
“授权”是指商家将其公众号或者小程序扫码授权给服务商的第三方平台帐号

它是建立在两个不同的开放平台之间的行为操作，
比如最简单的就是商户的开放平台账号将旗下的小程序和公众号，授权给第三方服务商的开放平台。

[如何完成商家授权](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/getting_started/how_to_service.html)



## ID标识符
### AppID
- AppID是不同类型的产品的帐号 ID ,是帐号的唯一标识符。
- 例如公众号的AppID、小程序的AppID、开放平台的AppID、第三方平台的AppID、移动应用的AppID、网站应用的AppID、小商店的 AppID 等等。

### openid
- openid是微信用户在不同类型的产品的身份ID。
- 微信用户访问公众号、小程序、移动应用、网站应用、小商店等都会有唯一的openid，但同一个微信用户访问不同的产品生成的 openid 也是不一样的。
- 例如，对于不同公众号，同一用户的 openid 不同；同理，对于不同的小程序，同一用户的 openid 也是不同的

### unionid
- unionid是微信用户在同一个开放平台下的产品的身份ID。
- 如果开发者拥有多个移动应用、网站应用、和公众帐号（即公众号和小程序），可通过 UnionID 来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号，用户的 UnionID 是唯一的。即，同一用户，对同一个微信开放平台下的不同应用，UnionID是相同的。

### 3rdMiniProgramAppid
- 指的是“开发小程序”的appid

### extAppid
- 指的是授权给第三方平台的商家小程序的appid。
- 当服务商希望在小程序模板代码中结合某个商家小程序进行个性化的开发和调试，即可通过该参数来完成，详情可查看第三方平台代开发说明


## 不同类型的token
### access_token	
- 是使用公众号、小程序、网站应用或者移动应用的 Appid 和 secret 生成的。
- 使用 access_token 调用官方接口，指的是使用商家身份调用接口，常用于自研模式。
- 公众号、小程序、网站应用、移动应用的接口均支持使用 access_token 调用。
  
### component_access_token	
- 是使用第三方平台帐号的 Appid 和 secret 以及 component_verify_ticket 生成的。
- 使用 component_access_token 调用官方接口，指的是使用服务商身份调用只开放给服务商的接口。
- 第三方平台的部分接口支持使用 component_access_token 调用。
  
### authorizer_access_token	
- 是在获得商家授权的情况下，使用 component_access_token 和授权帐号 authorizer_appid 生成的。
- 使用 authorizer_access_token 调用官方接口，指的是服务商代商家（服务商以商家身份）调用接口，常用于第三方开发模式。
- 公众号、小程序的接口以及第三方平台的部分接口支持使用 authorizer_access_token 调用。
- 网站应用、移动应用的接口不支持使用 authorizer_access_token 调用。
