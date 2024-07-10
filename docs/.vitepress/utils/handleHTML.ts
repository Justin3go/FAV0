export function addTitleAttribute(htmlString: string) {
  // 定义匹配 <a> 标签的正则表达式
  const aTagRegex = /<a([^>]+)>(.*?)<\/a>/g;
  // 定义匹配 href 属性的正则表达式
  const hrefRegex = /href="([^"]*)"/;
  // 定义匹配 <p> 标签内容的正则表达式
  const contentRegex = /<p class="text"[^>]*>([^<]*)<\/p>/;

  // 使用 replace 方法处理所有匹配到的 <a> 标签
  return htmlString.replace(aTagRegex, (match, attributes, innerHtml) => {
      // 提取 href 和 <p> 标签内容
      const hrefMatch = attributes.match(hrefRegex);
      const contentMatch = innerHtml.match(contentRegex);

      if (hrefMatch && contentMatch) {
          const href = hrefMatch[1];
          const content = contentMatch[1];

          // 构造新的 <a> 标签，添加 title 属性
          const newAttributes = attributes.replace(hrefRegex, `href="${href}" title="${content}"`);
          return `<a${newAttributes}>${innerHtml}</a>`;
      }

      return match; // 如果没有匹配到，返回原始的 <a> 标签
  });
}
