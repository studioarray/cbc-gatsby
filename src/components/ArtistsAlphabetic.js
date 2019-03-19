import React from "react"
import {
  ArtistsList,
  ArtistsListItem,
  ArtistsAlphaChar,
  ArtistsColumn,
  ArtistLink,
} from "../components/Styled"

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
