import { defineConfig, type SiteConfig } from 'vitepress'

import { createRssFile } from "./utils/rss";

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
  head: [
		["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-Z6HGDC7ZBL" }],
		[
			"script",
			{},
			`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z6HGDC7ZBL');`,
		],
  ],
  buildEnd: (config: SiteConfig) => {
		createRssFile(config);
	},

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
		outlineTitle: "大纲",
		lastUpdatedText: "最近更新时间",
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/2024/000' }
    ],

    sidebar: [
      {
        text: '2024',
        items: [
          { text: '000期--新的开始', link: '/posts/2024/000' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/Justin1024go' },
      { icon: 'github', link: 'https://github.com/Justin3go/FAV0' },
      {
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>RSS订阅</title><path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"/><path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"/><path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"/></svg>',
				},
				link: "/feed.xml",
			},
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
