function convertPathToUnixStyle(path) {
  // 使用 replace() 函数将所有反斜杠替换为斜杠
  return path.replace(/\\/g, '/');
}

function replaceImagePath(mdText, dataDir) {
  const regex = /!\[(.*?)\]\(([^\s]*?)\)/g;
  return mdText.replace(regex, (match, p1, p2) => {
    let imagePath = p2;

    if (!imagePath.startsWith(dataDir)) {
      return match;
    }

    const relativePath = convertPathToUnixStyle(
      imagePath.substring(dataDir.length)
    );
    console.log("relativePath=>", relativePath)

    return `![${p1}](${relativePath})`;
  });
}

// 示例用法：
// const md = `这是一张图片：![example](/data/images/example.png)`
// console.log(md)
// console.log(replaceImagePath(md, '/data/images'))

const md = `![](C:\\Users\\terwer\\Documents\\mydocs\\SiyuanWorkspace\\public\\data/assets/import/cover.jpeg) bbbbb`
console.log(md)
console.log(replaceImagePath(md, 'C:\\Users\\terwer\\Documents\\mydocs\\SiyuanWorkspace\\public\\data'))
