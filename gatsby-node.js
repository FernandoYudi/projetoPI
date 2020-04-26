const path = require ('path')

// MARDKDOWN SLUG GENERATOR LOCAL
// module.exports.onCreateNode = ({node, actions}) => {
//   const {createNodeField} = actions

// if(node.internal.type === 'MarkdownRemark'){
//   const slug = path.basename(node.fileAbsolutePath, '.md')

//   createNodeField({
//       node,
//       name:'slug',
//       value: slug
//   })
//  }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog-posts.js') 
  const res = await graphql(`
query {
  allContentfulBlogPost { 
    edges {
      node {
          slug 
      }
     }
    }
   }
  `)

// get path to template
// get markdown data
// create new pages
//condicional if para apagar dados descenessarios a nao ser pages remark.
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
       component: blogTemplate,
       path: `/blog/${edge.node.slug}`,
       context: {
         slug: edge.node.slug
       }
    })
  })
}

// MARKDOWN REMARK
// res.data.allMarkdownRemark.edges.forEach((edge) => {
//   createPage({
//      component: blogTemplate,
//      path: `/blog/${edge.node.fields.slug}`,
//      context: {
//        slug: edge.node.fields.slug
//      }
//   })
// })
// }




