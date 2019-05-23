import React from "react"
import Menu from "./Menu"
import Logo from "./Logo"
import LogoWordMark from "./LogoWordMark"
import FeaturedArtworkMeta from "./FeaturedArtworkMeta"
import { Copyright } from "./Copyright"
import styled from "styled-components"
import { useFeatured } from "../utils/featuredContext"
import { settings } from "../utils/settings"

export default props => {
  const { featured } = useFeatured()
  const { height } = featured
  return (
    <FullFeatured>
      <Header>
        <HeaderInner>
          <HeaderInnerLeft>
            <Menu />
          </HeaderInnerLeft>
          <HeaderInnerCenter>
            <LogoWordMark />
          </HeaderInnerCenter>
          <HeaderInnerRight>
            <Logo />
          </HeaderInnerRight>
        </HeaderInner>
      </Header>
      <Main style={{ minHeight: height }}>{props.children}</Main>
      <Footer>
        <FeaturedArtworkMeta />
        <Copyright />
      </Footer>
    </FullFeatured>
  )
}

const FullFeatured = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Header = styled.header``

const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  max-height: 240px;
`

const HeaderInnerLeft = styled.div`
  flex: 1;
`

const HeaderInnerCenter = styled.div`
  flex: 2;
  text-align: center;
  align-self: center;
`

const HeaderInnerRight = styled.div`
  flex: 1;
  align-self: center;
  text-align: right;
`

const Main = styled.main`
  position: relative;
  min-width: calc(300px - ${settings.spacing * 2}px);
  margin: 0 ${settings.spacing}px;
  flex: 1;
`

const Footer = styled.footer`
  @media (min-width: 740px) {
    position: relative;
    text-align: right;
  }
`
