---
title: Q&A
date: 2021-07-06
---


问题汇总

* 使用PowerWechat过程中，碰到bug，功能受限，功能不足怎么办？
    * 通过[Github Issues](https://github.com/ArtisanCloud/PowerWeChat/issues)反馈问题
    * 扫下方我们的企业微信群二维码
* 如果使用sdk中，没有及时更新到微信到功能变更怎么办？
  * 可以试着按照你到需求，修改代码，然后提交Pull Request，我们很欢迎你们来做贡献
  * 你也可以添加我们的联系方式，直接寻求帮助
  * 如果太紧急，也可以试着用我们提供的对象到http请求函数，来访问微信到接口,比如下面企业微信服务对象中，就可以通过BaseClient.Request
  ```go
   rs, err := services.WeComApp.Base.BaseClient.Request(
		{ctx},    // 通用的context
		{url},    // baseURI已经在对象中存在，只需要提供URI，比如 "cgi-bin/corpgroup/corp/list_app_share_info"
		{method}, //  http.MethodPost / http.MethodGet
		&object.HashMap{
			"query":       {query},
			"form_params": {data},
		},
		false,
		nil,
		nil)
  
  // 还有其他的HttpGet,HttpPost
  ```
  

## 项目主要维护者

Michael Hu

<img src="./images/contact-qr-matrix-x.jpg" alt="请扫我" style="display:inline; width: 150px;"/>

### 如果你觉得这个项目对你有帮助，可以请作者喝杯咖啡
<img src="./images/receive_code.jpg" alt="请扫我" style="display:inline; width: 150px;"/>
