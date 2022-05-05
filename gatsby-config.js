module.exports = {
  siteMetadata: {
    title: `business-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-mdx",
    'gatsby-plugin-postcss',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};