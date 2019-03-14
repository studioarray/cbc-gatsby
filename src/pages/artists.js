import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"
import Layout from "../components/Layout"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  return (
    <Layout>
      <h1>Artists</h1>
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
