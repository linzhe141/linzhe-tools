import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'linzhe-tools',
  description: 'linzhe-tools docs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: '基础组件', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '快速使用',
        link: '/guide/quickstart',
      },
      {
        text: '基础组件',
        items: [
          { text: 'Carousel', link: '/example/Carousel/readme' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linzhe141/linzhe-tools' },
    ],
  },
  markdown: {
    // @ts-ignore
    config: (md) => mdPlugin(md),
  },
})