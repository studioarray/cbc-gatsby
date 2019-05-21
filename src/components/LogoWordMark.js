import React from "react"
import VerticalLogo from "../images/logo/logotype-vertical.svg"
import HorisontalLogo from "../images/logo/logotype-horisontal.svg"
import { Link } from "./Transitions"
import styled from "styled-components"

const LogoWordMark = () => (
  <>
    <LogoWMWrapperVertical>
      <Link to="/collection">
        <VerticalLogo />
      </Link>
    </LogoWMWrapperVertical>
    <LogoWMWrapperHorisontal>
      <Link to="/collection">
        <HorisontalLogo />
      </Link>
    </LogoWMWrapperHorisontal>
  </>
)

const LogoWMWrapperVertical = styled.div`
  width: 23.46666%;
  position: absolute;
  top: 42px;
  height: 26.5vw;
  left: 50%;
  z-index: 20;
  transform: translateX(-50%);
  max-width: 160px;
  min-width: 64px;
  min-height: 72px;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 270px) {
    left: calc(270px / 2);
  }
  @media (min-width: 460px) {
    display: none;
  }
`
const LogoWMWrapperHorisontal = styled.div`
  display: none;
  @media (min-width: 460px) {
    display: block;
  }
  position: absolute;
  top: 0;
  height: 30vw;
  max-height: 180px;
  width: 40%;
  max-width: 360px;
  left: 50%;
  z-index: 20;
  transform: translateX(-50%);
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  /* max-width: 200px; */
`

export default LogoWordMark
