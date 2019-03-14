import React from "react"
import Image from "./Image"
import { Link } from "gatsby"

const FeaturedArtwork = props => {
  const { title, artist, date, images, slug } = props
  const { file, colour } = images.items[0]
  const { firstName, lastName } = artist
  console.log(colour)
  return (
    <section>
      <div>
        <Link to={`/artworks/${slug}`}>
          <Image fileKey={file.key} />
        </Link>
      </div>
      <div>
        <Link to={`/artists/${artist.slug}`}>
          {firstName} {lastName}
        </Link>
        , {title}, {date}
      </div>
    </section>
  )
}

export default FeaturedArtwork
