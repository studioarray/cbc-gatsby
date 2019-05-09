import React from "react"
import Layout from "./components/Layout"
import { ColourProvider } from "./utils/colourContext"
import { ImageZoomProvider } from "./utils/imageZoomContext"

export default props => (
  <ColourProvider>
    <ImageZoomProvider>
      <Layout>{props.children}</Layout>
    </ImageZoomProvider>
  </ColourProvider>
)
