import React from "react"
import { FeaturedArtwork } from "../components/FeaturedArtwork"
import { FadeWrapper } from "../components/Transitions"

const IndexPage = () => {
  return (
    <FadeWrapper>
      <FeaturedArtwork />
    </FadeWrapper>
  )
}

export default IndexPage
