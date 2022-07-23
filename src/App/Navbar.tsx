import { NavLink } from "react-router-dom"

const links = [
  { to: "/", text: "Home" },
  { to: "characters", text: "Characters" },
  { to: "read", text: "Read" },
]
const Navbar = () => {
  const activeStyle = "active"

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
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
