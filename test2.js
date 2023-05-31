function removeFootnotes(text) {
  const regex = /\^\(\[.*[0-9].*\]\(\#.*\#.*\)\)/g; // 匹配格式为 ^[[数字]](#链接) 的脚注
  return text.replace(regex, ''); // 使用空字符串替换匹配到的脚注
}


// 去除脚注
let mdText =`我衷心期盼，子孙后代们读到这封信时，会带着一种自豪感和正当的优越感。

## 评伯特兰·罗素的知识论^([\[16\]](#part0019.html#footnote_16))

当编者要我就罗素写点东西时，出于对这位作者的钦佩和尊敬，我立刻答应了下来。与阅读托尔斯坦·凡勃伦（Thorstein`
mdText = removeFootnotes(mdText)
console.log(mdText)


