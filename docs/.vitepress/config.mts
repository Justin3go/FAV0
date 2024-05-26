import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FAV0周刊",
  description: "FAV0周刊",
  lang: "zh-CH", //语言
	lastUpdated: true,
	cleanUrls: true,
	ignoreDeadLinks: true,
	sitemap: {
    hostname: 'https://fav0.com'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
		outlineTitle: "大纲",
		lastUpdatedText: "最近更新时间",
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Posts', link: '/2024/000' }
    ],

    sidebar: [
      {
        text: '2024',
        items: [
          { text: '000期--新的开始', link: '/2024/000' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Justin3go/FAV0' }
    ],
    search: {
			provider: "local",
		},
    editLink: {
			pattern: "https://github.com/Justin3go/FAV0/edit/master/docs/:path",
			text: "在GitHub上编辑此页",
		},
		returnToTopLabel: "回到顶部",
		sidebarMenuLabel: "目录",
		darkModeSwitchLabel: "深色模式",
  }
})
