import { defineConfig, type SiteConfig } from 'vitepress'
// 自动导入TDesign 
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

import { createRssFileZH, createRssFileEN } from "../utils/rss";
import { handleHeadMeta } from "../utils/handleHeadMeta";
import { search as zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://fav0.com'
  },
  head: [
    // 谷歌分析，如需要替换 id:“G-Z6HGDC7ZBL” 为自己的，否则删除
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-Z6HGDC7ZBL" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z6HGDC7ZBL');`,
    ],

    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  // https://vitepress.dev/reference/site-config#transformhead
  async transformHead(context) {
    return handleHeadMeta(context)
  },
  buildEnd: (config: SiteConfig) => {
    createRssFileZH(config);
    createRssFileEN(config);
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/favicon.png', width: 24, height: 24 },
    outline: [2, 4],

    // 本地搜索
    // search: {
    //   provider: "local",
    //   options: {
    //     locales: { ...zhSearch }
    //   }
    // },

    // algolia搜索，需要申请，如不需要，删除下面的配置，可使用本地搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '99R796PPUJ',
        apiKey: '4b50999b7ac958ff33a9e76d6ca688a5',
        indexName: 'fav0',
        locales: { ...zhSearch }
      }
    },

    externalLinkIcon: true,
  },

  vite: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
    ],
  },
})
