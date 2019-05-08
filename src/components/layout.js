import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import LogoWordMark from "./LogoWordMark"
import { FullHeight, Main, Footer } from "./Styled"
import { ColourProvider } from "../utils/colourContext"

export default props => {
  return (
    <ColourProvider>
      <LogoWordMark />
      <Logo />
      <FullHeight>
        <header>
          <Menu />
        </header>
        <Main>{props.children}</Main>
        <Footer>
          &copy; {new Date().getFullYear()} Christian Bjelland Collection. All
          Rights Reserved.
        </Footer>
      </FullHeight>
    </ColourProvider>
  )
}
