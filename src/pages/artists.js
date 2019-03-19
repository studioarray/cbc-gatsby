import React from "react"
import _ from "lodash"
import Layout from "../components/Layout"
import ChangeLogoColour from "../components/ChangeLogoColour"
import { graphql } from "gatsby"
import { Headline } from "../components/Styled"
import ArtistsAlphabetic from "../components/ArtistsAlphabetic"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  return (
    <Layout>
      <ChangeLogoColour newColour="0,0,0" />
      <Headline>Artists</Headline>
      <ArtistsAlphabetic artists={artists} />
    </Layout>
  )
}

export const query = graphql`
  query {
    cbc {
      listArtists(limit: 1000, filter: { visibility: { eq: public } }) {
        items {
          firstName
          lastName
          slug
          id
        }
        nextToken
      }
    }
  }
`
