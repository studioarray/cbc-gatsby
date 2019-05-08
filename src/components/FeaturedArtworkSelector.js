import React from "react"
import { StaticQuery, graphql } from "gatsby"
import _ from "lodash"
import FeaturedArtwork from "./FeaturedArtwork"

const FeaturedArtworkSelector = () => (
  <StaticQuery
    query={graphql`
      query {
        cbc {
          listArtworks(
            filter: { featured: { eq: true }, visibility: { eq: public } }
            limit: 10000
          ) {
            items {
              title
              date
              slug
              images {
                items {
                  colour
                  file {
                    key
                  }
                }
              }
              artist {
                firstName
                lastName
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Get a random sample from the result
      const selectedArtwork = _.sample(data.cbc.listArtworks.items)
      console.log(data.cbc.listArtworks.items)
      console.log(selectedArtwork)
      return <FeaturedArtwork {...selectedArtwork} />
    }}
  />
)

export default FeaturedArtworkSelector
