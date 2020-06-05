module.exports = {
  siteMetadata: {
    title: `Tim Phillips`,
    author: {
      name: `Tim Phillips`,
      summary: `Full Stack Software Engineer`
    },
    description: `Personal website of Tim Phillips`,
    siteUrl: `https://www.tim-phillips.com`,
    social: {
      twitter: `tim__phillips`
    }
  },
  plugins: [
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/assets/theme.js`).light,
        dark: require(`${__dirname}/src/assets/theme.js`).dark
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/images`,
        name: `images`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg"
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-166861528-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tim-phillips.com`,
        short_name: `Tim Phillips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#37474f`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.ico`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
