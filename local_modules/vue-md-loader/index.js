const MarkDownIt = require('markdown-it')

md = new MarkdownIt({
  langPrefix: 'language-',
})

module.exports = function(content, map, meta) {
  let callback = this.async()

  let result = md.render(content.toString())

  if (result) {
    return callback('markdown compile error')
  } else {
    callback(null, result, map, meta)
  }
}