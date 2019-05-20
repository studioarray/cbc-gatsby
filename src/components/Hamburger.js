import React from "react"
import styled from "styled-components"
import { PropTypes } from "prop-types"

const paddingY = 0,
  paddingX = 0,
  hoverOpacity = 0.9,
  activeHoverOpacity = 0.9,
  layerColor = "rgb(80, 80, 80)",
  activeLayerColor = "rgb(120, 120, 120)",
  layerWidth = 26,
  layerHeight = 3,
  layerSpacing = 5,
  layerBorderRadius = 3

const HamburgerButton = styled.button`
  padding: ${paddingY}px ${paddingX}px;
  display: inline-block;
  cursor: pointer;
  position: fixed;
  z-index: 20;
  top: 48px;
  left: 30px;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  /* Normalize button */
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: ${hoverOpacity};
  }

  ${({ active }) =>
    active &&
    `  
    &:hover {
      opacity: ${activeHoverOpacity};
    }
  `}
`
const HamburgerBox = styled.span`
  width: ${layerWidth}px;
  height: ${() => layerHeight * 3 + layerHeight * 2}px;
  display: inline-block;
  position: relative;
`
const HamburgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: ${layerHeight} / -2;

  &,
  &::before,
  &::after {
    width: ${layerWidth}px;
    height: ${layerHeight}px;
    background-color: ${layerColor};
    border-radius: ${layerBorderRadius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::before {
    top: ${() => (layerSpacing + layerHeight) * -1}px;
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }

  &::after {
    bottom: ${() => (layerSpacing + layerHeight) * -1}px;
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${({ active }) =>
    active &&
    `  
    &:hover {
      &,
      &::before,
      &::after {
        background-color: ${activeLayerColor};
      }
    }

    & {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    &::before {
      top: 0;
      opacity: 0;
      transition: top 0.075s ease, opacity 0.075s 0.12s ease;
    }

    &::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  `}
`

const Hamburger = ({ active, setActive }) => (
  <HamburgerButton active={active} onClick={() => setActive(!active)}>
    <HamburgerBox active={active}>
      <HamburgerInner active={active} />
    </HamburgerBox>
  </HamburgerButton>
)

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Hamburger
