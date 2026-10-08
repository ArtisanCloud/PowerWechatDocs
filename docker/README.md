# PowerWechatDocs 独立静态网站镜像

本仓库负责构建并发布 `ghcr.io/artisancloud/powerwechat-docs`，XDocker 负责多站点入口和证书。

本地先验证构建：

```bash
npm ci --no-audit --no-fund
npm run docs:build
docker build -t powerwechat-docs:local .
docker run --rm -p 127.0.0.1:8080:80 powerwechat-docs:local
```

检查首页、无 `.html` 后缀的文档地址 `/zh/start/installation` 和 `/images/logo.png` 返回 200，未知路径返回 404。没有运行本机 Docker daemon 时，不能把静态构建成功视为容器运行通过；推送后由 Actions 运行发布镜像检查，服务器再做部署验收。

提交并推送到默认分支 `release/3.0.1` 后，`.github/workflows/docker-publish.yml` 自动发布 AMD64、ARM64 镜像；也支持 `v*` 标签和手动触发。保留原有 GitHub Pages 发布流程。默认分支发布 `latest`、分支标签和 `sha-<完整提交 SHA>`，部署使用完整 SHA 标签。

在 Actions 确认构建、推送和镜像运行检查成功后，打开 [镜像包页面](https://github.com/orgs/ArtisanCloud/packages/container/package/powerwechat-docs)。包可以保持 Private，服务器通过有包读取权限的 PAT classic 登录；Git SSH 密钥不能用于镜像认证。

服务器在 XDocker 的 `sites/powerwechat/.env` 设置镜像和域名，加入 `ENABLED_SITES`，按 [XDocker 部署指南](https://github.com/ReDeployment/XDocker/blob/main/docs/guides/hosting/README.md) 启动 HTTP、测试签发、正式签发并启用 HTTPS。详细推送、缓存导入和域名切换步骤放在 [XDocker PowerWechat 指南](https://github.com/ReDeployment/XDocker/blob/main/docs/guides/powerwechat/README.md)。
