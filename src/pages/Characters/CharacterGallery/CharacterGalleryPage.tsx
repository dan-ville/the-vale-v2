import React, { useContext } from "react"
import { AppContext, ContextType } from "../../../context/AppContext"
import CharacterGallery from "./CharacterGallery"

const CharacterGalleryPage = () => {
  const { characters, status, error } = useContext(AppContext) as ContextType

  if (status === "pending") return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <div>
      <h2>Characters</h2>
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default CharacterGalleryPage
