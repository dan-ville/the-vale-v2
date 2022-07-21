import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Characters from "../pages/Characters"
import Character from "../pages/Characters/Character"
import CharacterGallery from "../pages/Characters/CharacterGallery"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/characters" element={<Characters />}>
            <Route index element={<CharacterGallery />} />
            <Route path=":characterName" element={<Character />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
