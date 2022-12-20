const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/@jordanmace/5-benefits-of-quality-coaching-5cecefdf446c')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});