---
title: 小程序 - 入门
date: 2021-08-12
---

初始化小程序的app对象： `app, err := NewMiniProgram(config *UserConfig) (*MiniProgram, error)`

具体如下：

``` go


	config := &miniProgram.UserConfig{

		AppID:  "xxxxxx", // 小程序、公众号或者企业微信的appid
		Secret: "xxxxxx", // 商户号 appID

		ResponseType: "array",
		"debug":      false,
		"http_debug": false,

	}

	MiniprogramApp, err := miniProgram.NewMiniProgram(config)


```
