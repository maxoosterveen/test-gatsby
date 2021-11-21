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
