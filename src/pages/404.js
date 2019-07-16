import React from "react"
import SEO from "../components/metaSEO"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"

const NotFoundPage = () => {
  const { setColour } = useColour()
  setColour("0,0,0")
  return (
    <FadeWrapper>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
    </FadeWrapper>
  )
}
export default NotFoundPage
