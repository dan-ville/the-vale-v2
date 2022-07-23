import React, { useContext } from "react"
import PageHeader from "../../../components/PageHeader"
import { AppContext, ContextType } from "../../../context/AppContext"
import CharacterGallery from "./CharacterGallery"

const CharacterGalleryPage = () => {
  const { characters, status, error } = useContext(AppContext) as ContextType

  if (status === "pending") return <p>Loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <section id="character-profile">
      <PageHeader text="Characters" />
      <CharacterGallery characters={characters} />
    </section>
  )
}

export default CharacterGalleryPage
