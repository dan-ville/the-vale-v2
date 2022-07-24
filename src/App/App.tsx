import { Outlet } from "react-router-dom"
import "./App.scss"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        Made by <a href="https://danielvillegas.dev/">Daniel Villegas</a>
      </footer>
    </div>
  )
}

export default App
