import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext, ContextType } from "../../../context/AppContext"
import CharacterProfile from "./CharacterProfile"

const CharacterPage = () => {
  const { characterName } = useParams()
  const { characters } = useContext(AppContext) as ContextType

  const indexedCharacters = characters.map((character, index) => ({
    ...character,
    index,
  }))

  const character = indexedCharacters.find((character) => {
    const match =
      character.Name.trim().toLowerCase() ===
      characterName?.trim().toLowerCase()

    return match
  })

  return (
    <section id="character-page">
      <div className="character-links">
        <h3 className="main-character">{character?.Name}</h3>
      </div>
      {character ? (
        <CharacterProfile character={character} />
      ) : (
        <p>That character does not exist</p>
      )}
    </section>
  )
}

export default CharacterPage
