import { defineConfig } from 'vitepress'
import { autoGenerateSidebar } from 'press-util'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'VitePress Template',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '🎯 快速入手',
      link: '/start.md'
    }, {
      text: '🎨 使用技巧',
      link: '/skills.md'
    }],
    sidebar: autoGenerateSidebar() as any,

    // 编辑
    editLink: {
      pattern: 'https://github.com/shoppingzh/vitepress-template/edit/main/docs/:path',
      text: '在Github编辑',
    },

    // 搜索
    search: {
      provider: 'local',
    },
  }
})
