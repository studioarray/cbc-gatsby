require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Christian Bjelland Collection`,
    description: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
        url: `${process.env.AWS_APPSYNC_API_URL}`,
        headers: {
          "x-api-key": `${process.env.AWS_APPSYNC_API_KEY}`,
        },
        refetchInterval: 10,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-s3-image",
      options: {
        bucketName: "aws-testcd908bd94cdc4951991587c78925e6c9-dev",
        protocol: "https",
      },
    },
  ],
}
