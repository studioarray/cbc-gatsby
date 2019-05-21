import React, { useState } from "react"
import Hamburger from "./Hamburger"
import { Link } from "./Transitions"
import styled, { css } from "styled-components"
import { settings } from "../utils/settings"

export default () => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <Hamburger active={active} setActive={setActive} />
      <Menu active={active}>
        <ul>
          <li onClick={() => setActive(false)}>
            <Link to="/collection">Collection</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/artists">Artists</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Menu>
    </div>
  )
}

const Menu = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(240, 240, 240, 0.95);
  @supports (backdrop-filter: blur(3px)) {
    background: rgba(240, 240, 240, 0.7);
    backdrop-filter: blur(15px);
  }
  transition: ${({ active }) =>
    active ? css`opacity 0.2s ease-out` : css`opacity 0.2s ease-in .5s`};
  ${({ active }) =>
    active
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    transition: ${({ active }) =>
      active
        ? css`opacity 0.2s ease-out 0.3s, transform 0.3s ease-out 0.2s`
        : css`opacity 0.2s ease-out, transform 0.2s ease-out`};
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${settings.fontSize.xLarge};
    letter-spacing: 0.025em;
    line-height: 2em;
    ${({ active }) =>
      active
        ? css`
            transform: translateY(0);
            opacity: 1;
          `
        : css`
            transform: translateY(-100%);
            opacity: 0;
          `}
    a {
      text-decoration: none;
      transition: color 0.25s ease-out;
      &:link,
      &:visited,
      &:active {
        color: rgba(0, 0, 0, 0.8);
      }
      &:hover {
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
  li:nth-child(1) {
    transition-delay: 0.2s;
  }
  li:nth-child(2) {
    transition-delay: 0.25s;
  }
  li:nth-child(3) {
    transition-delay: 0.3s;
  }
  li:nth-child(4) {
    transition-delay: 0.35s;
  }
`
