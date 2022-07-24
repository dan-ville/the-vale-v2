import { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"
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

  const prevCharIndex = character && character.index - 1
  const nextCharIndex = character && character.index + 1

  const prevCharacter = prevCharIndex !== undefined && characters[prevCharIndex]
  const nextCharacter = nextCharIndex !== undefined && characters[nextCharIndex]

  if (!character) return <p>Oops! That character does not exist.</p>

  return (
    <section id="character-page">
      <div className="character-links">
        {character.index === 0
          ? null
          : prevCharacter && (
              <NavLink to={`/characters/${characters[prevCharIndex].Name}`}>
                {` - `} {prevCharacter && characters[prevCharIndex].Name}
              </NavLink>
            )}
        <h3 className="main-character">{character.Name}</h3>
        {character.index === characters.length - 1
          ? null
          : nextCharacter && (
              <NavLink to={`/characters/${nextCharacter.Name}`}>
                {` - `} {nextCharacter && nextCharacter.Name}
              </NavLink>
            )}
      </div>
      <CharacterProfile character={character} />
    </section>
  )
}

export default CharacterPage
