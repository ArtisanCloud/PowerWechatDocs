import type { SidebarConfig } from '@vuepress/theme-default'

function concatData<T>(base: string, data: T): T {
  if (!data || !base) {
    return data
  }
  return {
    ...data,
    children: [...(data as any).children.map((e) => `${base}${e}`)],
  }
}

export const zh: SidebarConfig = {
  '/zh/': [
    concatData('/zh/start/', {
      text: '开始',
      children: ['README.md', 'installation.md', 'quick-start.md', 'qa.md'],
    }),
    concatData('/zh/wecom/', {
      text: '企业微信',
      children: [
        'README.md',
        'server.md',
        'agent.md',
        'message.md',
        'contacts.md',
        'web-auth.md',
        'external-contact.md',
        'customer-service.md',
        'custom-menu.md',
        'media.md',
        'oa.md',
        'app-share.md',
        'session.md',
        'e-invoice.md',
        'mini-program.md',
        'jssdk.md',
        'robot.md',
        'mobile.md',
      ],
    }),
    concatData('/zh/mini-program/', {
      text: '小程序', // 必要的
      children: [
        'README.md',
        'user-info.md',
        'statistics.md',
        'service-message.md',
        'uniform-message.md',
        'updatable-message.md',
        'plugin.md',
        'miniprogram-code.md',
        'decode-message.md',
        'content-security.md',
        'logistics.md',
        'verify-signature.md',
        'nearby-miniprogram.md',
        'subscription-message.md',
        'service-market.md',
        'live.md',
        'risk-control.md',
        'url-scheme.md',
      ],
    }),
    concatData('/zh/payment/', {
      text: '微信支付', // 必要的
      children: [
        'README.md', // 指向readme.md
        'order.md',
        'refund.md',
        'bill.md',
        'notification.md',
        'red-pack.md',
        'qr-pay.md',
        'jssdk.md',
        'work-pay.md',
        'retrieve-order.md',
        'security-tool.md',
        'profit-share.md',
      ],
    }),
    concatData('/zh/official-account/', {
      text: '公众号', // 必要的
      children: ['README.md', 'media.md'],
    }),
    concatData('/zh/open-platform/', {
      text: '开放平台', // 必要的
      children: [
        'README.md', // 指向intro.md
        'server.md', // 指向server.md
        'oauth-agent.md', // 指向oauth-agent.md
      ],
    }),
    concatData('/zh/work-open-platform/', {
      text: '企业微信开放平台', // 必要的
      children: [
        'README.md', // 指向intro.md
        'provider-api.md', // 指向provider-api.md
        'server.md', // 指向server.md
        'third-part-api.md', // 指向third-part-api.md
        'work.md', // 指向work.md
      ],
    }),
  ],
}
