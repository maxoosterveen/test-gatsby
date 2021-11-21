const path = require('path');
const slug = require("slug")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Add slug for page generation.
  if (node.internal.type === "StripePrice") {
    const value = slug(node.product.name, slug.defaults.modes["rfc3986"])
    createNodeField({
      node,
      name: "slug",
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              template
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = path.resolve(`src/templates/${node.frontmatter.template}.js`);

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {},
      });
    });
  });
};
