module.exports = {
  pages: {
    page1: {
      // page 的入口
      entry: 'src/pages/page1/main.js',
      // 模板来源
      template: 'src/pages/page1/index.html',
      // 在 dist/index.html 的输出
      filename: 'page1.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'page 1',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]

    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'src/pages/page1/index.html',
      filename: 'page2.html',
      title: 'page 2',
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
  }
}
