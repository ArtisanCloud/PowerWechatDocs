import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config


const nav = [
	{
		text: '快速开始',
		link: '/zh/start/index',
		activeMatch: `^\/zh\/(start)\/(?!qa)`
	},
	{
		text: '视频介绍',
		link: '/zh/video/index',
		activeMatch: `^/zh/(video)/`
	},
	{
		text: '小程序',
		link: '/zh/mini-program/index',
		activeMatch: `^/zh/(mini-program)/`
	},
	{
		text: '微信支付',
		link: '/zh/payment/index',
		activeMatch: `^/zh/(payment)/`
	},
	{
		text: '企业微信',
		link: '/zh/wecom/index',
		activeMatch: `^/zh/(wecom)/`
	},
	{
		text: '公众号',
		link: '/zh/official-account/index',
		activeMatch: `^/zh/(official-account)/`
	},
	{
		text: '开放平台',
		link: '/zh/open-platform/intro',
		activeMatch: `^/zh/(open-platform)/`
	},
	{
		text: '联系我们',
		link: '/zh/start/qa'
	}
]

export const sidebar = {
	'/zh/': [{
		text: '开始',
		items: [
			{text: '概述', link: '/zh/start/index'},
			{text: '安装', link: '/zh/start/installation'},
			{text: '快速开始', link: '/zh/start/quick-start'},
			{text: '通用配置', link: '/zh/start/common'},
			{text: '使用示例', link: '/zh/start/tutorial'},
			{text: 'Q&A', link: '/zh/start/qa'}
		]
	}, {
		text: '小程序',
		items: [
			{text: '入门', link: '/zh/mini-program/index'},
			{text: '用户信息', link: '/zh/mini-program/user-info'},
			{text: '数据统计与分析', link: '/zh/mini-program/statistics'},
			{text: '客服消息', link: '/zh/mini-program/service-message'},
			{text: '统一服务消息', link: '/zh/mini-program/uniform-message'},
			{text: '动态消息', link: '/zh/mini-program/updatable-message'},
			{text: '小程序码', link: '/zh/mini-program/miniprogram-code'},
			{text: '消息解密', link: '/zh/mini-program/decode-message'},
			{text: '内容安全', link: '/zh/mini-program/content-security'},
			{text: '生物认证', link: '/zh/mini-program/verify-signature'},
			{text: '附近的小程序', link: '/zh/mini-program/nearby-miniprogram'},
			{text: '订阅消息', link: '/zh/mini-program/subscription-message'},
			{text: '服务市场', link: '/zh/mini-program/service-market'},
			{text: '安全风控', link: '/zh/mini-program/risk-control'},
			{text: 'URL Scheme', link: '/zh/mini-program/url-scheme'},
			{text: 'URL Link', link: '/zh/mini-program/url-link'},
			{text: 'Short Link', link: '/zh/mini-program/short-link'}
		]
	}, {
		text: '微信支付',
		items: [
			{text: '入门', link: '/zh/payment/index'},
			{text: '安全', link: '/zh/payment/security'},
			{text: '订单', link: '/zh/payment/order'},
			{text: '退款', link: '/zh/payment/refund'},
			{text: '对账单', link: '/zh/payment/bill'},
			{text: '通知', link: '/zh/payment/notification'},
			{text: '红包', link: '/zh/payment/red-pack'},
			{text: 'JSSDK', link: '/zh/payment/jssdk'},
			{text: '企业付款', link: '/zh/payment/work-pay'},
			{text: '商户付款', link: '/zh/payment/merchant-pay'},
			{text: '撤销订单', link: '/zh/payment/retrieve-order'},
			{text: '分账', link: '/zh/payment/profit-share'},
			{text: '服务商支付', link: '/zh/payment/partner'}
		]
	}, {
		text: '企业微信',
		items: [
			{text: '入门', link: '/zh/wecom/index'},
			{text: '服务端', link: '/zh/wecom/server'},
			{text: '应用管理', link: '/zh/wecom/agent'},
			{text: '消息发送', link: '/zh/wecom/message'},
			{text: '通讯录', link: '/zh/wecom/contacts'},
			{text: '网页授权', link: '/zh/wecom/web-auth'},
			{text: '客户联系', link: '/zh/wecom/external-contact'},
			{text: '微信客服', link: '/zh/wecom/customer-service'},
			{text: '临时素材', link: '/zh/wecom/media'},
			// { text: 'OA', link: '/zh/wecom/oa' },
			{text: '会话内容存档', link: '/zh/wecom/session'},
			{text: '电子发票', link: '/zh/wecom/e-invoice'},
			{text: '小程序', link: '/zh/wecom/mini-program'},
			{text: '群机器人', link: '/zh/wecom/robot'},
			{text: '移动端', link: '/zh/wecom/mobile'}
		]
	},
		{
			text: '开放平台',
			items: [
				{text: '导读', link: '/zh/open-platform/intro'},
				{text: '基本概念', link: '/zh/open-platform/basic'},
				{text: '应用场景', link: '/zh/open-platform/scene'},
				{text: '授权流程', link: '/zh/open-platform/authFlow'},
				{text: '入门', link: '/zh/open-platform/index'},
				{text: '服务端', link: '/zh/open-platform/server'},
				{text: '代授权', link: '/zh/open-platform/authorizer-delegate'}
			]
		},
		{
			text: '公众号',
			items: [
				{text: '入门', link: '/zh/official-account/index'},
				{text: '基础接口', link: '/zh/official-account/base'},
				{text: '服务端', link: '/zh/official-account/server'},
				{text: '消息', link: '/zh/official-account/messages'},
				{text: '多客服消息转发', link: '/zh/official-account/message-transfer'},
				{text: '消息群发', link: '/zh/official-account/broadcasting'},
				{text: '模版消息', link: '/zh/official-account/template-message'},
				{text: '用户', link: '/zh/official-account/user'},
				{text: '用户标签', link: '/zh/official-account/user-tag'},
				{text: '网页授权', link: '/zh/official-account/oauth'},
				{text: 'JSSDK', link: '/zh/official-account/jssdk'},
				{text: '二维码', link: '/zh/official-account/qrcode'},
				{text: '短Key托管', link: '/zh/official-account/shorten'},
				{text: '临时素材', link: '/zh/official-account/media'},
				{text: '素材管理', link: '/zh/official-account/material'},
				{text: '菜单', link: '/zh/official-account/menu'},
				{text: '卡券', link: '/zh/official-account/card'},
				{text: '客服', link: '/zh/official-account/customer-service'},
				// 微信在2021年5月1号已经关闭摇一摇功能
				// { text: '摇一摇周边', link: '/zh/official-account/shake-around' },
				{text: '数据统计', link: '/zh/official-account/data-cube'},
				// 微信语义理解已经下线，现在是一个单独的产品。
				//{ text: '语义理解(TODO)', link: '/zh/official-account/semantic' },
				{text: '自动回复', link: '/zh/official-account/reply'},
				{text: '评论数据管理', link: '/zh/official-account/comment'},
				{text: '返佣商品', link: '/zh/official-account/goods'}
			]
		},
		// {
		//   // https://developer.work.weixin.qq.com/document/path/97159
		//   text: '企业微信开放平台',
		//   items: [
		//
		//     { text: '自动回复', link: '/zh/official-account/reply' }
		//
		//   ]
		// }
	]
}


export default defineConfig({
	base: '/',
	head: [
		[
			'script',
			{
				async: '',
				src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9660680807544080',
				// crossorigin: "anonymous"
			},

		]
	],
	outDir: '',
	title: "PowerWechat",
	description: "PowerWeChat是一款简单易用的WeChat SDK for Golang",
	themeConfig: {
		logo: "/images/logo.png", siteTitle: "PowerWechat",
		// https://vitepress.dev/reference/default-theme-config
		nav: nav,
		sidebar: sidebar,

		socialLinks: [
			{icon: 'github', link: 'https://github.com/ArtisanCloud/PowerWeChat'},
			{
				icon: {
					svg: '<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
						'    <g>\n' +
						'        <path fill="none" d="M0 0h24v24H0z"></path>\n' +
						'        <path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"></path>\n' +
						'    </g>\n' +
						'</svg>'
				}, link: 'https://space.bilibili.com/539782958/channel/collectiondetail?sid=2037865&ctype=0'
			}
		],
		footer: {
			message: 'Released under the MIT license',
			copyright: `Copyright © 2021-${new Date().getFullYear()} ArtisanCloud`
		}
	}
})
