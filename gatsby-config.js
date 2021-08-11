const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Qimia Gatsby",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        name: `images`,    
        path: `./src/images`
      },
    },
  ],
};
