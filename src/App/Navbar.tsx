import { NavLink } from "react-router-dom"
import ValeTitle from "../components/ValeTitle"

const links = [
  { to: "/", text: "Home" },
  { to: "characters", text: "Characters" },
  // { to: "read", text: "Read" },
]

const Navbar = () => {
  const activeStyle = "active"

  return (
    <nav>
      <ValeTitle />
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
