import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Metodologias",
  description: "Metodologias",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Links de interes', link: '/links-interes' },
          { text: 'Sprints y Estimaciones', link: '/sprint-y-estimaciones' },
          { text: 'Git Flow', link: '/git-flow' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nosoyunbott' }
    ]
  }
})
