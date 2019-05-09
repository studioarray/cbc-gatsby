import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import LogoWordMark from "./LogoWordMark"
import { Copyright } from "./Copyright"
import { FullHeight, Main, Footer } from "./Styled"
import { useImageZoom } from "../utils/imageZoomContext"

export default props => {
  const { imageZoom } = useImageZoom()
  return (
    <>
      {!imageZoom && (
        <>
          <LogoWordMark />
          <Logo />
        </>
      )}
      <FullHeight>
        {!imageZoom && (
          <header>
            <Menu />
          </header>
        )}
        <Main>{props.children}</Main>
        <Footer>
          <Copyright />
        </Footer>
      </FullHeight>
    </>
  )
}
