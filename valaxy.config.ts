import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '咖啡豆子的博客',
    },

    pages: [

    ],

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: 'XXXXXX',
      },
      icon: {
        enable: true,
        name: 'i-ri-home-line',
        animated: true,
        color: '#d69b54',
        url: 'https://kfdzcoffee.cn/',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
    },
    bg_image: {
      enable: true,
      url: "https://image.kfdzcoffee.cn/file/c7b58c0fd9bd77f682d10.jpg",
      dark: "https://image.kfdzcoffee.cn/file/735ef2342c9ff5feb3b2c.jpg",
    },//背景图片
      // or write it in site.config.ts

        // or write it in site.config.ts
  },



  unocss: { safelist },

  // or write it in site.config.ts
  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://comment.kfdzcoffee.cn',
      lang: 'zh-CN',
      dark: 'auto',
      login: 'enable',
      
    }),
  ],
})

