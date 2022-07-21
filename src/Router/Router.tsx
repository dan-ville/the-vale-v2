import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Characters from "../pages/Characters"
import CharacterPage from "../pages/Characters/Character/CharacterPage"

import CharacterGallery from "../pages/Characters/CharacterGallery"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/characters" element={<Characters />}>
            <Route index element={<CharacterGallery />} />
            <Route path=":characterName" element={<CharacterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
