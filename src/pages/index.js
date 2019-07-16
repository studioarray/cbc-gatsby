import React, { useEffect } from "react"
import { FeaturedArtwork } from "../components/FeaturedArtwork"
import SEO from "../components/metaSEO"
import { FadeWrapper } from "../components/Transitions"
import { useFrontpage } from "../utils/frontpageContext"

const IndexPage = ({ location }) => {
  const { setFrontpage } = useFrontpage()
  useEffect(() => {
    // Set frontpage to true on mount
    setFrontpage(true)
    return () => {
      // Set frontpage to false on unMount
      setFrontpage(false)
    }
  }, [])
  return (
    <FadeWrapper>
      <SEO />
      <FeaturedArtwork />
    </FadeWrapper>
  )
}

export default IndexPage
