import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import LogoWordMark from "./LogoWordMark"
import { Copyright } from "./Copyright"
import styled from "styled-components"
import { settings } from "../utils/settings"
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

const FullHeight = styled.section`
  /* min-height: 100vh; */
  margin: 0;
  position: relative;
`

const Main = styled.main`
  width: 100%;
`

const Footer = styled.footer`
  width: calc(100% - ${settings.spacing * 2}px);
  font-size: ${settings.fontSize.small};
  white-space: nowrap;
  line-height: 1em;
  margin: 20px ${settings.spacing}px;
  @media (min-width: 740px) {
    left: auto;
    line-height: 1em;
    margin: 0;
    width: auto;
    right: ${settings.spacing}px;
  }
`
