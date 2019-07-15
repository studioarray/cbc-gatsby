require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Christian Bjelland Collection`,
    description: `The private art collection of Christian Bjelland.`,
    author: `Christian Bjelland`,
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
        url: `${process.env.CBC_AWS_APPSYNC_API_URL}`,
        headers: {
          "x-api-key": `${process.env.CBC_AWS_APPSYNC_API_KEY}`,
        },
        refetchInterval: 10,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
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
        bucketName: `${process.env.CBC_AWS_S3_BUCKET_NAME}`,
        protocol: "https",
        region: "eu-west-1",
        accessKeyId: `${process.env.CBC_IAM_ACCESS_KEY_ID}`,
        secretAccessKey: `${process.env.CBC_IAM_SECRET_ACCESS_KEY}`,
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
