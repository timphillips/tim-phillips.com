module.exports = {
  siteMetadata: {
    title: `Tim Phillips`,
    author: {
      name: `Tim Phillips`,
      summary: `Full Stack Software Developer`
    },
    description: `Personal homepage of Tim Phillips`,
    siteUrl: `https://www.tim-phillips.com`,
    social: {
      twitter: `tim__phillips`
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
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
        path: `${__dirname}/content/assets/backgrounds`,
        name: `backgrounds`
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
    `gatsby-plugin-feed`,
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
