import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      // lang: 'en-US',
      // title: 'PowerWeChat',
      // description: 'An easy-to-use Golang WeChat SDK',
      // bannerNote: 'Start Golang WeChat development now',
      // bannerCodeBlock: 'go get -u github.com/ArtisanCloud/PowerWechat',
      lang: 'zh-CN',
      title: 'PowerWeChat',
      description:
        'PowerWeChat是一款简单易用的Golang微信开发SDK，目前已经支持微信小程序、微信支付、企业微信、微信公众平台(即将推出)',
      bannerNote: '点击一下，开启Golang微信开发之旅',
      bannerCodeBlock: 'go get -u github.com/ArtisanCloud/PowerWeChat',
      featureMainTitle: '为什么选择PowerWeChat？',
      featureMainDesc:
        '我们是以Golang技术栈为主的团队。在我们原有的微信生态产品上，封装出了能够高效易用的Golang微信SDK，方便广大开发者快速迭代微信生态功能',
      features: [
        {
          icon: ['uil', 'uil-suitcase'],
          title: '完整的微信生态支持',
          desc: '支持小程序、企业微信、微信支付等模块',
        },
        {
          icon: ['uil', 'uil-document-info'],
          title: '完整的SDK文档',
          desc: '每个接口描述都映射到原微信官方文档',
        },
        {
          icon: ['uil', 'uil-cell'],
          title: '统一接口风格',
          desc: '组建模块化设计，统一对象调用',
        },
        {
          icon: ['uil', 'uil-plug'],
          title: '发挥Golang的语言基因',
          desc: '出入参覆盖强类型，智能提示助你编码如飞',
        },
        {
          icon: ['uil', 'uil-bookmark-full'],
          title: '提供完整的测试接口功能',
          desc: '每个SDK API都有tutorial demo使用参考',
        },
        {
          icon: ['uil', 'uil-coffee'],
          title: 'MIT版权使用',
          desc: '在Github上开源，完全免费',
        },
      ],
      beian: {
        text: '沪ICP备2021029387号-1',
        link: 'https://beian.miit.gov.cn',
      },
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  themeConfig: {
    logo: '/images/hero.png',

    repo: 'ArtisanCloud/PowerWeChat',

    docsDir: 'docs',

    darkMode: false, // 暂时没有暗黑模式

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: 'Edit this page on GitHub',
        editLink: false,
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        editLink: false,
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    ['@vuepress/plugin-debug'],
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '98bbc4ef3e5b7b551e751f85f85cc405',
        indexName: 'powerwechat',
        searchParameters: {
          facetFilters: ['lang:zh-CN'],
        },
        locales: {
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        // we have multiple deployments, which would use different id
        id: process.env.DOCS_GA_ID,
      },
    ],
    // ['@vuepress/plugin-pwa'],
    // [
    //   '@vuepress/plugin-pwa-popup',
    //   {
    //     locales: {
    //       '/zh/': {
    //         message: '发现新内容可用',
    //         buttonText: '刷新',
    //       },
    //     },
    //   },
    // ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // only enable shiki plugin in production mode
    [
      '@vuepress/plugin-shiki',
      isProd
        ? {
            theme: 'dark-plus',
          }
        : false,
    ],
  ],
})
