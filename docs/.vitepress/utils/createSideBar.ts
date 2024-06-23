export function createSideBarZH() {
  return [
    {
      text: '2024年',
      collapsed: true,
      items: [
        { text: '004期--为什么“都”在独立开发？', link: '/posts/2024/004' },
        { text: '003期--与GPT的信任危机', link: '/posts/2024/003' },
        { text: '002期--独立开发的动力', link: '/posts/2024/002' },
        { text: '001期--AI内容污染搜索', link: '/posts/2024/001' },
        { text: '000期--新的开始', link: '/posts/2024/000' },
      ]
    }
  ]
}

// 英文侧边栏更换格式，否则太占位了
export function createSideBarEN() {
  return [
    {
      text: 'The Year 2024',
      collapsed: true,
      items: [
        { text: '004: Why is Everyone into Indie Development?', link: '/en/posts/2024/004' },
        { text: '003: The Trust Crisis with GPT', link: '/en/posts/2024/003' },
        { text: '002: The Motivation for indie Development', link: '/en/posts/2024/002' },
        { text: '001: AI Content Pollution in Search', link: '/en/posts/2024/001' },
        { text: '000: A New Beginning', link: '/en/posts/2024/000' },
      ]
    }
  ]
}
