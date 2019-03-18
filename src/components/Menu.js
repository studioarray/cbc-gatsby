import React, { useState } from "react"
import Hamburger from "./Hamburger"
import { Menu, Link } from "./Styled"

export default () => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <Hamburger active={active} setActive={setActive} />
      <Menu active={active}>
        <ul>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Menu>
    </div>
  )
}
