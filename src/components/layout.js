import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"

export default props => {
  return (
    <div>
      <div>
        <Logo />
        <Menu />
      </div>
      {props.children}
    </div>
  )
}
