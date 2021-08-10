/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Favorite Places",
    description: "Beauty places around Stockholm",
    author: "@echerevko",
    person: { name: "evgeniya", age: 35 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "evgeniya", age: 35 },
      { name: "andrii", age: 33 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3bic7l81li8q`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Monserrat",
    //           variants: ["400"],
    //         },
    //         {
    //           family: "Inconsolata",
    //           variants: ["400", "500", "600", "700"],
    //         },
    //       ],
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
  ],
}
