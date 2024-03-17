import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: '咖啡豆子的博客',
  url: 'https://kfdzcoffee.cn/',
  author: {
    name: '咖啡豆子coffee',
    avatar: 'https://avatars.githubusercontent.com/u/84187695?v=4',
    status: {
      emoji: "😄",
      message: "嘿嘿嘿",
    },
  },

  /**
   * 站点图标
   */
  favicon: 'https://avatars.githubusercontent.com/u/84187695?v=4',
  /**
   * 副标题
   */
  subtitle: '所有奇迹的始发点 Where All Miracles Begin.',
  description: '个人随笔',
    /**
   * 开启阅读统计
   */
    statistics: {
      enable: true,
      readTime: {
        /**
         * 阅读速度
         */
        speed: {
          cn: 300,
          en: 200,
        },
      },
    },



      // ...加密
      encrypt: {
        enable: true,
      },

  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/kfdzcoffee',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/7542662664',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/kfdzcoffee',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/544250379',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:contact@mail.kfdzcoffee.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  
})