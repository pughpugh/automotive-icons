module.exports = {
  inputDir: './svg', // (required)
  outputDir: './build', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  templates: {
    html: './templates/html.hbs'
  }
};
