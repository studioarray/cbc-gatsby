import React from "react"
import Menu from "./Menu"

export default props => (
  <div>
    <div>
      <h1>CBC Logo</h1>
      <Menu />
    </div>
    {props.children}
  </div>
)
