import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Characters from "../pages/Characters"
import CharacterPage from "../pages/Characters/Character/CharacterPage"
import CharacterGallery from "../pages/Characters/CharacterGallery"
import Homepage from "../pages/Homepage"
// import Read from "../pages/Read"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/characters" element={<Characters />}>
            <Route index element={<CharacterGallery />} />
            <Route path=":characterName" element={<CharacterPage />} />
          </Route>
          {/* <Route path="read" element={<Read />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
