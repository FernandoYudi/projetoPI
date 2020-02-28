/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Blog-FL',
    author:'Created by Fernando Yudi Kikuchi, © 2020'
  },
  
  plugins: [
    'gatsby-plugin-sass',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`
   }
  },
  'gatsby-transformer-remark'
 ]
}

//2:06:59
