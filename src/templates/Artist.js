import React from "react"
import Layout from "../components/Layout"
import _ from "lodash"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"

export default ({ data }) => {
  const { firstName, lastName, artworks } = data.cbc.getArtist
  const sortedArtworks = _.reverse(
    _.sortBy(artworks.items, ["sortYear", "catalogueNumber"])
  )
  return (
    <Layout>
      <h2>
        {firstName} {lastName}
      </h2>
      <div>
        {sortedArtworks.map(
          ({ title, date, id, catalogueNumber, images, slug }) => (
            <div key={id}>
              <h3>
                <Link to={`/artworks/${slug}`}>{title}</Link>
              </h3>
              <p>{date}</p>
              <h4>CBS{catalogueNumber}</h4>
              {images.items.length > 0 ? (
                <img
                  alt={title}
                  src={`https://s3-${
                    images.items[0].file.region
                  }.amazonaws.com/${images.items[0].file.bucket}/${
                    images.items[0].file.key
                  }`}
                />
              ) : (
                `Image missing`
              )}
            </div>
          )
        )}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    cbc {
      getArtist(id: $id) {
        lastName
        firstName
        birthYear
        deathYear
        bio
        slug
        visibility
        lastUpdated
        artworks(limit: 1000, filter: { visibility: { eq: public } }) {
          items {
            id
            title
            catalogueNumber
            sortYear
            date
            measurements
            technique
            images {
              items {
                colour
                index
                file {
                  bucket
                  region
                  key
                }
              }
            }
            slug
            visibility
          }
        }
      }
    }
  }
`
