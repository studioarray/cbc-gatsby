import React from "react"
import { useColour } from "../utils/colourContext"
import { Headline, AboutText } from "../components/Styled"
import { FadeWrapper } from "../components/Transitions"

export default () => {
  const { setColour } = useColour()
  setColour("0,0,0")
  return (
    <FadeWrapper>
      <Headline>About</Headline>
      <AboutText>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <p>
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </AboutText>
    </FadeWrapper>
  )
}
