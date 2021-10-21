import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '首页',
    link: '/zh/',
  },
  {
    text: `文档`,
    children: [
      {
        text: '开始',
        link: '/zh/start/',
      },
      {
        text: '企业微信',
        link: '/zh/wecom/',
      },
      {
        text: '小程序',
        link: '/zh/mini-program/',
      },
      {
        text: '微信支付',
        link: '/zh/payment/',
      },
    ],
  },
  // {
  //   text: '联系我们',
  //   children: [
  //     {
  //       text: 'Github',
  //       link: 'https://github.com/ArtisanCloud/PowerWeChat',
  //     },
  //   ],
  // },
]
