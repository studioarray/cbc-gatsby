import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { PropTypes } from "prop-types"
import React from "react"
import isMatch from "../utils/isMatch"

const Image = function Image({ fileKey }) {
  // Get all files and match them against the fileKey from props
  // If there is a match create and return a gatsby image
  // It's an unfortunate hack because StaticQuery's graphql call can't use variables
  try {
    return (
      <StaticQuery
        query={graphql`
          query {
            images: allFile {
              edges {
                node {
                  base
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const file = data.images.edges.find(image =>
            isMatch(fileKey, image.node.base)
          )
          if (!file) console.error("file not found", fileKey)
          return gatsbyImage(file)
        }}
      />
    )
  } catch (err) {
    // console.log(err)
    console.log(fileKey)
  }
}

// Render the image
const gatsbyImage = file =>
  file && <Img fluid={file.node.childImageSharp.fluid} />

Image.propTypes = {
  fileKey: PropTypes.string.isRequired,
}

export default Image
