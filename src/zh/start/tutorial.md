# PowerWeChat Tutorial 使用实例

我们单独写了一个项目[PowerWechatTutorial](https://github.com/ArtisanCloud/PowerWechatTutorial)，基本上覆盖了所有的API使用，希望能够帮助大家更快的上手Golang WeChat开发。

### 下载项目
```bash
git clone https://github.com/ArtisanCloud/PowerWechatTutorial.git
```

### 项目配置
在项目根目录下，新建一个`config.yaml`, 把下面字段内容复制进去， 然后执行`go run main.go`
```yaml
payment:
  appid: xxxxx 
  mchid: 100000 # ArtisanCloud商户号
  certpath: certs/apiclient_cert.pem
  keypath: certs/apiclient_key.pem
  serialno: 55D06F99FF64CF1759FDE5B77A0BEC8B67A78C2E
  key: xxxxx
  mchapiv3key: xxxxx
  notifyurl: https://www.artisancloud.cn
  redisaddr: localhost:6379

miniprogram:
  appid: xxxxx
  secret: xxxxx
  redisaddr: localhost:6379

wecom:
  corpid: ww454dfb9d6f6d432a

  # ----- powerwechat-docs-demo start ------
  agent_id: 1000000
  secret: xxxxx
  messagetoken: xxxxx
  messageaeskey: xxxxx
  messagecallback: https://www.artisan-cloud.com/message/callback
  oauthcallback: https://www.artisan-cloud.com/oauth/callback
  # ----- powerwechat-docs-demo end ------

  contactsecret: xxxxx
  contacttoken: xxxxx
  contactaeskey: xxxxx
  contactcallback: https://www.artisan-cloud.com/api/wx/customer

  redisaddr: localhost:6379

offiaccount:
  appid: xxxxx
  appsecret: xxxxx
  redisaddr: localhost:6379
```

在`main.go`里面，你可以选择性的注释掉不需要的模块，避免没有配置的时候报错影响运行。
