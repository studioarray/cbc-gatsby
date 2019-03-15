import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ChangeLogoColour from "../components/ChangeLogoColour"

const NotFoundPage = () => (
  <Layout>
    <ChangeLogoColour newColour="0,0,0" />
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage
