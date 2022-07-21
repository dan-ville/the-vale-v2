import { useContext } from "react"
import { useParams } from "react-router-dom"
import Character from "../../../components/characters/Character"
import { AppContext, ContextType } from "../../../context/AppContext"

const CharacterPage = () => {
  const { characterName } = useParams()
  const { characters } = useContext(AppContext) as ContextType

  const character = characters.find(
    (character) =>
      character.Name.trim().toLowerCase() ===
      characterName?.trim().toLowerCase()
  )

  return character ? (
    <Character character={character} />
  ) : (
    <p>That character does not exist</p>
  )
}

export default CharacterPage
