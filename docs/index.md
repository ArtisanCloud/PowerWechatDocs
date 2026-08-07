---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PowerWechat"
  text: "Golang SDK"
  tagline: PowerWeChat是一款简单易用的WeChat SDK for Golang
  actions:
    - theme: brand
      text: Get Started
      link: /zh/start/installation.html
    - theme: alt
      text: GitHub Star
      link: https://github.com/ArtisanCloud/PowerWechat/stargazers

features:
  - icon: ⛓
    title: 完整的微信生态覆盖
    details: 支持小程序、企业微信、微信支付、公众号、开放平台
  - icon: 🗡
    title: 基于Golang
    details: ArtisanCloud团队在业务基础上开源了Golang版本的WeChatSDK。
  - icon: 🏛
    title: MIT开源
    details: 在Github上开源，免费商用，欢迎Star。
---

## 友情链接

<div class="friend-links">
  <a class="friend-link" href="https://www.weahe.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.weahe.com/app/image/logo.png" alt="万荷科技" />
  </a>
  <a class="friend-link" href="https://www.iceres.cn/" target="_blank" rel="noopener noreferrer">
    <img src="https://oss.iceres.cn/logo-horizontal.png" alt="万荷科技" />
  </a>
</div>

<style>
.friend-links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.friend-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 10px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 16px;
  line-height: 1.2;
  transition: border-color 0.2s, color 0.2s;
}

.friend-link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.friend-link img {
  width: 120px;
  height: 32px;
  object-fit: contain;
}
</style>
