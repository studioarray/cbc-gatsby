import React from "react"
import Layout from "./components/Layout"
import { ColourProvider } from "./utils/colourContext"
import { FeaturedProvider } from "./utils/featuredContext"
import { FrontpageProvider } from "./utils/frontpageContext"

export default props => (
  <ColourProvider>
    <FeaturedProvider>
      <FrontpageProvider>
        <Layout>{props.children}</Layout>
      </FrontpageProvider>
    </FeaturedProvider>
  </ColourProvider>
)
