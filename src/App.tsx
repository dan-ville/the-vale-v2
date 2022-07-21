import { Outlet, Link } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/characters">Characters</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
