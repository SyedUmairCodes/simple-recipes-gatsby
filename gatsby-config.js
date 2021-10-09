/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipes",
    description: "Simple and quick cooking recipes resource",
    author: "@SyedUmairAli",
    person: { name: "Syed Umair Ali", age: 21 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "Syed Umair Ali", age: 21 },
      { name: "Syed Uzair Ali", age: 12 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
