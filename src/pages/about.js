import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import SEO from "../components/metaSEO"
import { Headline } from "../components/Styled"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"
import { settings } from "../utils/settings"

export default ({ data }) => {
  const { setColour } = useColour()
  const [text, setText] = React.useState()
  setColour("0,0,0")
  React.useEffect(() => {
    console.log(data)
    if (data) {
      setText(data.cbc.listAbouts.items[0].text)
    }
  }, [data])
  return (
    <FadeWrapper>
      <SEO title="About" />
      <Headline>About</Headline>
      <AboutText>{text && text}</AboutText>
    </FadeWrapper>
  )
}

const AboutText = styled.div`
  font-size: ${settings.fontSize.medium};
  line-height: 1.4;
  max-width: 550px;
  position: relative;
  white-space: pre-line;
  left: 50%;
  transform: translateX(-50%);
`

export const query = graphql`
  query {
    cbc {
      listAbouts {
        items {
          text
        }
      }
    }
  }
`
