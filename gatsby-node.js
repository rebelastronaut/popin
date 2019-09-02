const path = require('path');
const _ = require('lodash');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  // Search for MDX filenodes
  if (node.internal.type === 'Mdx') {
    // If the frontmatter has a "slug", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    // If not derive a slug from the "title" in the frontmatter
    else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                fileAbsolutePath
                frontmatter {
                  path
                }
              }
            }
          }
        }
    `)
  );

  const projectPosts = result.data.allMarkdownRemark.edges

  projectPosts.forEach((n, index) => {
    const next = index === 0 ? null : projectPosts[index - 1]
    const prev = index === projectPosts.length - 1 ? null : projectPosts[index + 1]
    console.log(n)
    if (n.node.frontmatter.path === "/about/") {
      projectTemplate = require.resolve('./src/templates/aboutTemplate.js')
    }
    else {
      projectTemplate = require.resolve('./src/templates/blogTemplate.js')
    }
    createPage({
      path: n.node.frontmatter.path,
      component: projectTemplate,
      context: {
        // Pass the current directory of the project as regex in context so that the GraphQL query can filter by it
        absolutePathRegex: n.node.frontmatter.path,
      },
    })
  })
}

// const path = require(`path`)

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   const aboutTemplate = path.resolve(`src/templates/blogTemplate.js`)

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//     return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: aboutTemplate,
//         context: {}, // additional data can be passed via context
//         absolutePathRegex: "/testing/",
//       })
//     })
//   })
// }