const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-posts-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\templates\\blog-posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\projects.js"))),
  "component---src-pages-techstack-js": hot(preferDefault(require("C:\\projeto\\projetoPI\\gatsby-site\\src\\pages\\techstack.js")))
}

