import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { Headline } from "../components/Styled"
import ArtistsAlphabetic from "../components/ArtistsAlphabetic"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"
import SEO from "../components/SEO"

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
