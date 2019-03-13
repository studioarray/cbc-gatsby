import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = function Image(props) {
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
        // console.log(props.fileKey)
        const file = data.images.edges.find(image =>
          isMatch(props.fileKey, image.node.base)
        )
        return gatsbyImage(file)
      }}
    />
  )
}

// Check for match with file base name and file URI key
const isMatch = (key, base) => (key.match(base) ? true : false)
// Render the image
const gatsbyImage = file => <Img fluid={file.node.childImageSharp.fluid} />

export default Image
