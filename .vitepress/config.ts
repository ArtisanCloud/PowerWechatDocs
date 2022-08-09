import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
// import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: '快速开始',
    link: '/zh/start/index',
    activeMatch: `^\/zh\/(start)\/(?!qa)`,
  },
  {
    text: '公众号',
    link: '/zh/official-account/index',
    activeMatch: `^/zh/(official-account)/`,
  },
  {
    text: '小程序',
    link: '/zh/mini-program/index',
    activeMatch: `^/zh/(mini-program)/`,
  },
  {
    text: '微信支付',
    link: '/zh/payment/index',
    activeMatch: `^/zh/(payment)/`,
  },
  {
    text: '企业微信',
    link: '/zh/wecom/index',
    activeMatch: `^/zh/(wecom)/`,
  },
  {
    text: '联系我们',
    link: '/zh/start/qa',
  }
]

export const sidebar = {
  '/zh/start/': [{
    text: '开始',
    items: [
      { text: "概述", link: '/zh/start/index' },
      { text: "安装", link: '/zh/start/installation' },
      { text: "快速开始", link: '/zh/start/quick-start' },
      { text: "通用配置", link: '/zh/start/common' },
      { text: "使用示例", link: '/zh/start/tutorial' },
      { text: "Q&A", link: '/zh/start/qa' },
    ]
  }],
  '/zh/mini-program': [{
    text: '小程序',
    items: [
      { text: "入门", link: '/zh/mini-program/index' },
      { text: "用户信息", link: '/zh/mini-program/user-info' },
      { text: "数据统计与分析", link: '/zh/mini-program/statistics' },
      { text: "客服消息", link: '/zh/mini-program/service-message' },
      { text: "统一服务消息", link: '/zh/mini-program/uniform-message' },
      { text: "动态消息", link: '/zh/mini-program/updatable-message' },
      { text: "小程序码", link: '/zh/mini-program/miniprogram-code' },
      { text: "消息解密", link: '/zh/mini-program/decode-message' },
      { text: "内容安全", link: '/zh/mini-program/content-security' },
      { text: "生物认证", link: '/zh/mini-program/verify-signature' },
      { text: "附近的小程序", link: '/zh/mini-program/nearby-miniprogram' },
      { text: "订阅消息", link: '/zh/mini-program/subscription-message' },
      { text: "服务市场", link: '/zh/mini-program/service-market' },
      { text: "安全风控", link: '/zh/mini-program/risk-control' },
      { text: "URL Scheme", link: '/zh/mini-program/url-scheme' },
      { text: "URL Link", link: '/zh/mini-program/url-link' },
      { text: "Short Link", link: '/zh/mini-program/short-link' },
    ]
  }],
  '/zh/payment': [{
    text: '微信支付',
    items: [
      { text: '入门', link: '/zh/payment/index' },
      { text: '订单', link: '/zh/payment/order' },
      { text: '退款', link: '/zh/payment/refund' },
      { text: '对账单', link: '/zh/payment/bill' },
      { text: '通知', link: '/zh/payment/notification' },
      { text: '红包', link: '/zh/payment/red-pack' },
      { text: 'JSSDK', link: '/zh/payment/jssdk' },
      { text: '企业付款', link: '/zh/payment/work-pay' },
      { text: '撤销订单', link: '/zh/payment/retrieve-order' },
      { text: '分账', link: '/zh/payment/profit-share' },
    ]
  }],
  '/zh/wecom': [{
    text: '企业微信',
    items: [
      { text: '入门', link: '/zh/wecom/index' },
      { text: '服务端', link: '/zh/wecom/server' },
      { text: '应用管理', link: '/zh/wecom/agent' },
      { text: '消息发送', link: '/zh/wecom/message' },
      { text: '通讯录', link: '/zh/wecom/contacts' },
      { text: '网页授权', link: '/zh/wecom/web-auth' },
      { text: '客户联系', link: '/zh/wecom/external-contact' },
      { text: '微信客服', link: '/zh/wecom/customer-service' },
      { text: '临时素材', link: '/zh/wecom/media' },
      // { text: 'OA', link: '/zh/wecom/oa' },
      { text: '会话内容存档', link: '/zh/wecom/session' },
      { text: '电子发票', link: '/zh/wecom/e-invoice' },
      { text: '小程序', link: '/zh/wecom/mini-program' },
      { text: '群机器人', link: '/zh/wecom/robot' },
      { text: '移动端', link: '/zh/wecom/mobile' },
    ]
  }],
  '/zh/official-account': [
    {
      text: '公众号',
      items: [
        { text: '入门', link: '/zh/official-account/index' },
        { text: '基础接口', link: '/zh/official-account/base' },
        { text: '服务端', link: '/zh/official-account/server' },
        { text: '消息', link: '/zh/official-account/messages' },
        { text: '多客服消息转发', link: '/zh/official-account/message-transfer' },
        { text: '消息群发', link: '/zh/official-account/broadcasting' },
        { text: '用户', link: '/zh/official-account/user' },
        { text: '用户标签', link: '/zh/official-account/user-tag' },
        { text: '网页授权', link: '/zh/official-account/oauth' },
        { text: 'JSSDK', link: '/zh/official-account/jssdk' },
        { text: '二维码', link: '/zh/official-account/qrcode' },
        { text: '短Key托管', link: '/zh/official-account/shorten' },
        { text: '临时素材', link: '/zh/official-account/media' },
        { text: '素材管理', link: '/zh/official-account/material' },
        { text: '菜单', link: '/zh/official-account/menu' },
        { text: '卡券', link: '/zh/official-account/card' },
        { text: '客服', link: '/zh/official-account/customer-service' },
        // 微信在2021年5月1号已经关闭摇一摇功能
        // { text: '摇一摇周边', link: '/zh/official-account/shake-around' },
        { text: '数据统计', link: '/zh/official-account/data-cube' },
        // 微信语义理解已经下线，现在是一个单独的产品。
	    //{ text: '语义理解(TODO)', link: '/zh/official-account/semantic' },
        { text: '自动回复', link: '/zh/official-account/reply' },
        { text: '评论数据管理', link: '/zh/official-account/comment' },
        { text: '返佣商品', link: '/zh/official-account/goods' },
      ]
    }
  ],
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'PowerWeChat',
  description: 'PowerWeChat是一款简单易用的WeChat SDK for Golang。目前已经支持微信公众号、微信小程序、微信支付、企业微信等',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    // ['meta', { name: 'twitter:site', content: '@vuejs' }],
    // ['meta', { name: 'twitter:card', content: 'summary' }],
    // [
    //   'meta',
    //   {
    //     name: 'twitter:image',
    //     content: 'https://vuejs.org/images/logo.png'
    //   }
    // ],
    // [
    //   'link',
    //   {
    //     rel: 'preconnect',
    //     href: 'https://sponsors.vuejs.org'
    //   }
    // ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-GPRCVYSQSG' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GPRCVYSQSG');"
    ]
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'XNOLWPLB',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ]
  ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'powerwechat',
      appId: 'WWQJSAUFP5',
      apiKey: '970f2d4ae17f79ae0d27d842c330474f',
      searchParameters: {
        facetFilters: ['lang:zh-CN']
      }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      // { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/ArtisanCloud/PowerWeChat' },
    ],

    editLink: {
      repo: 'ArtisanCloud/PowerWeChatDocs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2021-${new Date().getFullYear()} ArtisanCloud`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  },

  plugins: [
    // googleAnalyticsPlugin({
    //   id: 'G-GPRCVYSQSG',
    // }),
  ],
})
