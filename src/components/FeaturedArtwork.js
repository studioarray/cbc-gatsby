import React from "react"
import Image from "./Image"
import ChangeLogoColour from "./ChangeLogoColour"
import { Link } from "./Styled"
import {
  FeaturedArtworkWrapper,
  FeaturedArtworkInner,
  FeaturedArtworkMeta,
} from "./Styled"

const FeaturedArtwork = props => {
  const { title, artist, date, images, slug } = props
  const { file, colour } = images.items[0]
  const { firstName, lastName } = artist
  return (
    <FeaturedArtworkWrapper>
      <FeaturedArtworkInner>
        <ChangeLogoColour newColour={colour} />
        <div className="image-wrapper">
          <Link to={`/artworks/${slug}`}>
            <Image fileKey={file.key} />
          </Link>
        </div>
        <FeaturedArtworkMeta>
          <Link to={`/artists/${artist.slug}`}>
            {firstName} {lastName}
          </Link>
          ,{` `}
          <Link to={`/artworks/${slug}`} artworktitle="true">
            {title}
          </Link>
          , {date.replace(/-/gi, "—")}
        </FeaturedArtworkMeta>
      </FeaturedArtworkInner>
    </FeaturedArtworkWrapper>
  )
}

export default FeaturedArtwork
