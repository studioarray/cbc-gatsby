import React from "react"
import Layout from "../components/Layout"
import ChangeLogoColour from "../components/ChangeLogoColour"
import { Headline } from "../components/Styled"

export default () => (
  <Layout>
    <ChangeLogoColour newColour="0,0,0" />
    <Headline>Contact</Headline>
  </Layout>
)
