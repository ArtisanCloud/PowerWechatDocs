import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: '快速开始',
    link: '/zh/start/index.html',
    activeMatch: `^/zh/(start)/`,
  },
  {
    text: '小程序',
    link: '/zh/mini-program/index.html',
    activeMatch: `^/zh/(mini-program)/`,
  },
  {
    text: '微信支付',
    link: '/zh/payment/index.html',
    activeMatch: `^/zh/(payment)/`,
  },
  {
    text: '企业微信',
    link: '/zh/wecom/index.html',
    activeMatch: `^/zh/(wecom)/`,
  },
  {
    text: '联系我们',
    link: '/zh/start/qa.html',
  }
]

export const sidebar = {
  '/zh/': [
    {
      text: '开始',
      items: [
        { text: "概述", link: '/zh/start/index.html' },
        { text: "安装", link: '/zh/start/installation.html' },
        { text: "快速开始", link: '/zh/start/quick-start.html' },
        { text: "通用配置", link: '/zh/start/common.html' },
        { text: "Q&A", link: '/zh/start/qa.html' },
      ]
    },
    {
      text: '小程序',
      items: [
        { text: "入门", link: '/zh/mini-program/index.html' },
        { text: "用户信息", link: '/zh/mini-program/user-info.html' },
        { text: "数据统计与分析", link: '/zh/mini-program/statistics.html' },
        { text: "客服消息", link: '/zh/mini-program/service-message.html' },
        { text: "统一服务消息", link: '/zh/mini-program/uniform-message.html' },
        { text: "动态消息", link: '/zh/mini-program/updatable-message.html' },
        { text: "小程序码", link: '/zh/mini-program/miniprogram-code.html' },
        { text: "消息解密", link: '/zh/mini-program/decode-message.html' },
        { text: "内容安全", link: '/zh/mini-program/content-security.html' },
        { text: "生物认证", link: '/zh/mini-program/verify-signature.html' },
        { text: "附近的小程序", link: '/zh/mini-program/nearby-miniprogram.html' },
        { text: "订阅消息", link: '/zh/mini-program/subscription-message.html' },
        { text: "服务市场", link: '/zh/mini-program/service-market.html' },
        { text: "安全风控", link: '/zh/mini-program/risk-control.html' },
        { text: "URL Scheme", link: '/zh/mini-program/url-scheme.html' },
      ]
    },
    {
      text: '微信支付',
      items: [
        { text: '入门', link: '/zh/payment/index.html' },
        { text: '订单', link: '/zh/payment/order.html' },
        { text: '退款', link: '/zh/payment/refund.html' },
        { text: '对账单', link: '/zh/payment/bill.html' },
        { text: '通知', link: '/zh/payment/notification.html' },
        { text: '红包', link: '/zh/payment/red-pack.html' },
        { text: 'JSSDK', link: '/zh/payment/jssdk.html' },
        { text: '企业付款', link: '/zh/payment/work-pay.html' },
        { text: '撤销订单', link: '/zh/payment/retrieve-order.html' },
        { text: '分账', link: '/zh/payment/profit-share.html' },
      ]
    },
    {
      text: '企业微信',
      items: [
        { text: '入门', link: '/zh/wecom/index.html' },
        { text: '服务端', link: '/zh/wecom/server.html' },
        { text: '应用管理', link: '/zh/wecom/agent.html' },
        { text: '消息发送', link: '/zh/wecom/message.html' },
        { text: '通讯录', link: '/zh/wecom/contacts.html' },
        { text: '网页授权', link: '/zh/wecom/web-auth.html' },
        { text: '客户联系', link: '/zh/wecom/external-contact.html' },
        { text: '微信客服', link: '/zh/wecom/customer-service.html' },
        { text: '临时素材', link: '/zh/wecom/media.html' },
        { text: 'OA', link: '/zh/wecom/oa.html' },
        { text: '会话内容存档', link: '/zh/wecom/session.html' },
        { text: '电子发票', link: '/zh/wecom/e-invoice.html' },
        { text: '小程序', link: '/zh/wecom/mini-program.html' },
        { text: '群机器人', link: '/zh/wecom/robot.html' },
        { text: '移动端', link: '/zh/wecom/mobile.html' },
      ]
    },
    {
      text: '公众号',
      items: [
        { text: '入门', link: '/zh/official-account/index.html' },
        { text: '素材管理', link: '/zh/official-account/media.html' },

      ]
    }
  ],
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'PowerWeChat',
  description: 'PowerWeChat是一款简单易用的Golang微信开发SDK，目前已经支持微信小程序、微信支付、企业微信、微信公众平台(即将推出)',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
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
      appId: 'BH4D9OD16A',
      apiKey: '98bbc4ef3e5b7b551e751f85f85cc405',
      searchParameters: {
        facetFilters: ['lang:zh-CN']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

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
  }
})
