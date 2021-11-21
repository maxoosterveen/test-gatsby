const path = require('path');
const slug = require("slug");
const fs = require('fs');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Add slug for page generation.
  if (node.internal.type === "StripePrice") {
    console.log('creating StripePrice node');
    const value = slug(node.product.name, slug.defaults.modes["rfc3986"])

    fs.writeFileSync(`./product/${value}.json`, JSON.stringify(node.product));

    createNodeField({
      node,
      name: "slug",
      value,
    })
  }
}

