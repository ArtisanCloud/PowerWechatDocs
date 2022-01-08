import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: `文档`,
    children: [
      {
        text: '开始',
        link: '/zh/start/index.html',
      },
      {
        text: '小程序',
        link: '/zh/mini-program/index.html',
      },
      {
        text: '微信支付',
        link: '/zh/payment/index.html',
      },
      {
        text: '企业微信',
        link: '/zh/wecom/index.html',
      },
    ],
  },
  {
    text: '联系我们',
    link: '/zh/start/qa.html',
    // children: [
    //   {
    //     text: 'Github',
    //     link: 'https://github.com/ArtisanCloud/PowerWeChat',
    //   },
    // ],
  },
]
