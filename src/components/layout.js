import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import LogoWordMark from "./LogoWordMark"
import { FullHeight, Main, Footer } from "./Styled"

export default props => {
  return (
    <FullHeight>
      <header>
        <Menu />
        <LogoWordMark />
        <Logo />
      </header>
      <Main>{props.children}</Main>
      <Footer>
        &copy; {new Date().getFullYear()} Christian Bjelland Collection. All
        Rights Reserved.
      </Footer>
    </FullHeight>
  )
}
