import path from "node:path";
import { writeFileSync } from "node:fs";
import { Feed } from "feed";
import { createContentLoader, type SiteConfig } from "vitepress";

const hostname = "https://fav0.com";

export async function createRssFileZH(config: SiteConfig) {
  const feed = new Feed({
    title: "FAV0周刊",
    description: "《FAV0周刊》：记录每周所见所闻，主要关注前端、AI领域、独立开发以及计算机相关内容",
    id: hostname,
    link: hostname,
    language: "zh-Hans",
    image: `${hostname}/favicon.png`,
    favicon: `${hostname}/favicon.ico`,
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

  // 生成 RSS 字符串
  let rssContent = feed.rss2();

  // 插入自定义标签
  const customTag = `
<follow_challenge>
    <feedId>54247025141998592</feedId>
    <userId>41451588612609024</userId>
</follow_challenge>  
  `;
  rssContent = rssContent.replace("</channel>", `${customTag}</channel>`);

  writeFileSync(path.join(config.outDir, "feed.xml"), rssContent, "utf-8");
}

export async function createRssFileEN(config: SiteConfig) {
  const feed = new Feed({
    title: "FAV0 Weekly",
    description: "FAV0 Weekly: Documenting Weekly Observations and Experiences, with a Focus on Front-end Development, AI, independent developer, and Computer-related Topics",
    id: hostname,
    link: hostname,
    language: "en-US",
    image: `${hostname}/favicon.png`,
    favicon: `${hostname}/favicon.ico`,
    copyright: "Copyright© 2024-present Justin3go",
  });

  const posts = await createContentLoader("en/posts/**/*.md", {
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

  // 生成 RSS 字符串
  let rssContent = feed.rss2();

  // 插入自定义标签
  const customTag = `
  <follow_challenge>
      <feedId>54247025141998592</feedId>
      <userId>41451588612609024</userId>
  </follow_challenge>  
    `;
  rssContent = rssContent.replace("</channel>", `${customTag}</channel>`);

  writeFileSync(path.join(config.outDir, "feed-en.xml"), rssContent, "utf-8");
}
