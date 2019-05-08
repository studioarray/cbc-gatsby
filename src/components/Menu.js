import React, { useState } from "react"
import Hamburger from "./Hamburger"
import { Link } from "./Transitions"
import { Menu } from "./Styled"

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
