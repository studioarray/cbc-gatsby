import { graphql } from "gatsby"
import _ from "lodash"
import React from "react"
import ArtistsAlphabetic from "../components/ArtistsAlphabetic"
import SEO from "../components/metaSEO"
import { Headline } from "../components/Styled"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  const { setColour } = useColour()
  setColour("0,0,0")
  return (
    <FadeWrapper>
      <SEO title="Artists" />
      <Headline>Artists</Headline>
      <ArtistsAlphabetic artists={artists} />
    </FadeWrapper>
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
