import React from "react"
import _ from "lodash"
import Layout from "../components/Layout"
import ChangeLogoColour from "../components/ChangeLogoColour"
import { graphql, Link } from "gatsby"
import { Headline } from "../components/Styled"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  return (
    <Layout>
      <ChangeLogoColour newColour="0,0,0" />
      <Headline>Artists</Headline>
      <ul>
        {artists.map(({ firstName, lastName, slug, id }) => (
          <li key={id}>
            <Link to={`/artists/${slug}`}>
              {firstName} {lastName}
            </Link>
          </li>
        ))}
      </ul>
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
