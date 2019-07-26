module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader').options({
      svgo: {
        full: true,
        plugins: [
          {
            inlineStyles:  {
              onlyMatchedOnce: false
            }
          },
          {
            cleanupIDs: {
              remove: false,
              minify: true,
              prefix: {
                toString() {
                  this.counter = this.counter || 0;
                  return `id_${this.counter++}`;
                }
              }
            }
          }
        ],
      },
    });
  },
}
