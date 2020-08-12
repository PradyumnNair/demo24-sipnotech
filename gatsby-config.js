
  
module.exports = {
  siteMetadata: {
    title: `Sipnotech`,
    description: `Digital transformation solutions for small businesses and start ups`,
    siteUrl: `https://sipnotech.com`,
    author: `sipnotech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sipnotech official`,
        short_name: `sipnotech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`  
  ],
}
