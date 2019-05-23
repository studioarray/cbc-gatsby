import React from "react"
import styled from "styled-components"
import { List, Link } from "./Styled"
import { settings } from "../utils/settings"

export default ({ artists }) => {
  // Group artists under surname 1st character key
  let alphaList = []
  artists.forEach(artist => {
    const char = artist.lastName.toLowerCase().charAt(0)
    alphaList[char] === undefined
      ? (alphaList[char] = [artist])
      : alphaList[char].push(artist)
  })

  return (
    <ArtistsList>
      {Object.keys(alphaList).map(key => {
        return (
          <ArtistsListItem key={key}>
            <ArtistsAlphaChar>{key.toUpperCase()}</ArtistsAlphaChar>
            <ArtistsColumn>
              {alphaList[key].map(({ firstName, lastName, slug, id }) => (
                <div key={id}>
                  <ArtistLink to={`/artists/${slug}`}>
                    {firstName} {lastName}
                  </ArtistLink>
                </div>
              ))}
            </ArtistsColumn>
          </ArtistsListItem>
        )
      })}
    </ArtistsList>
  )
}

const ArtistsList = styled(List)`
  font-size: ${settings.fontSize.medium};
  li:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${settings.spacing}px;
    li:not(:last-child) {
      border-bottom: none;
    }
    li {
      border-top: 1px solid #ddd;
      padding-top: 1em;
    }
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const ArtistsListItem = styled.li`
  display: flex;
  margin: 0 0 1em;
`
const ArtistsAlphaChar = styled.div`
  font-weight: bold;
  width: 50%;
`
const ArtistsColumn = styled.div`
  width: 50%;
`
const ArtistLink = styled(Link)`
  display: block;
  padding-bottom: 1em;
`
