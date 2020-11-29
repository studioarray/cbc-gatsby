require("dotenv").config({
  path: `.env`,
})

const AWS = require("aws-sdk")

AWS.config.update({
  accessKeyId: process.env.CBC_IAM_ACCESS_KEY_ID,
  secretAccessKey: process.env.CBC_IAM_SECRET_ACCESS_KEY,
})

const gatsbyConfig = {
  siteMetadata: {
    title: "Christian Bjelland Collection",
    titleTemplate: "%s | Christian Bjelland Collection",
    url: "https://www.bjellandcollection.com",
    description: `The private art collection of Christian Bjelland.`,
    author: `Christian Bjelland`,
    image: "/meta.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Lato:400,400i,700,700i"],
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "AWSAppSync",
        // This is the field under which it's accessible
        fieldName: "cbc",
        // URL to query from
        url: process.env.CBC_APPSYNC_API_URL,
        headers: {
          "x-api-key": process.env.CBC_APPSYNC_API_KEY,
        },
        refetchInterval: 10,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christian Bjelland Collection`,
        short_name: `CBC`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-source-s3-image",
      options: {
        accessKeyId: process.env.CBC_IAM_ACCESS_KEY_ID,
        secretAccessKey: process.env.CBC_IAM_SECRET_ACCESS_KEY,
        bucketName: process.env.CBC_S3_BUCKET_NAME,
        protocol: "https",
        region: "eu-west-1",
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/App.js`),
      },
    },
  ],
}

if (process.env.NODE_ENV === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-145086804-1",
    },
  }
  gatsbyConfig.plugins.push(googleAnalyticsCfg)
}

module.exports = gatsbyConfig
