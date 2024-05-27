import path from "node:path";
import { writeFileSync } from "node:fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";

const hostname = "https://fav0.com";

export async function createRssFile(config: SiteConfig) {
  const feed = new Feed({
    title: "FAV0周刊",
    description: "FAV0周刊",
    id: hostname,
    link: hostname,
    language: "zh-CH",
    image: "https://oss.justin3go.com/justin3goAvatar.png",
    favicon: `https://oss.justin3go.com/justin3goAvatar.ico`,
    copyright: "Copyright© 2024-present Justin3go",
  });

  const posts = await createContentLoader("posts/**/*.md", {
    excerpt: true,
    render: true,
  }).load();

  posts.sort((a, b) => Number(+new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)));

  for (const { url, excerpt, html, frontmatter } of posts) {
    // 仅保留最近5篇文章
    if (feed.items.length >= 5) {
      break;
    }

    feed.addItem({
      title: frontmatter.title,
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: "Justin3go",
          email: "just@justin3go.com",
          link: "https://justin3go.com",
        },
      ],
      date: frontmatter.date,
    });
  }

  writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2(), "utf-8");
}
