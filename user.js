
$$DOC.mod('theme-switcher');

// example of using $$DOC.parseContent function to create sections
$$DOC.parseContent(function(){/*

<!--fixed-top-navbar

* [Home]({{=$$DOC.root}}index.html)
* [Layout]({{=$$DOC.root}}layout.html)
* [Components]({{=$$DOC.root}}index.html)
 * [CSS]({{=$$DOC.root}}components/controls.css.html)
 * [Alert]({{=$$DOC.root}}components/controls.alert.html)
 * [Collapse]({{=$$DOC.root}}components/controls.collapse.html)
 * [Tabbed panel]({{=$$DOC.root}}components/controls.tabpanel.html)
 * [Emoji]({{=$$DOC.root}}components/GitHub.gemoji.html)
 * [YouTube Player]({{=$$DOC.root}}components/YouTube.Player.html)
 * [Mediawiki markup]({{=$$DOC.root}}components/wiki.instaview.html)
 
-->

<!--header

# Simple Markdown site template
###Incredible simple but powerful site template

-->

*/});

// another example of creating a page section
$$DOC.sections.footer =
'* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) MIT\n\
* [Free download template from GitHub](http://aplib.github.io/markdown-site-template/markdown-site-template.zip)';




// // marked.js support GitHub Flavored Markdown see on https://github.com/chjj/marked/wiki
// // For enable GitHub Flavored Markdown uncommented next options code lines:
// // Set default options except highlight which has no default
// marked.setOptions({
//   gfm: true,
// //  highlight: function (code, lang, callback) {
// //    pygmentize({ lang: lang, format: 'html' }, code, function (err, result) {
// //      if (err) return callback(err);
// //      callback(null, result.toString());
// //    });
// //  },
//   tables: true,  breaks: false,  pedantic: false,  sanitize: true,  smartLists: true,  smartypants: false,  langPrefix: 'lang-'
// });