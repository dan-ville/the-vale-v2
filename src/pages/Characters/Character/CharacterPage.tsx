import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext, ContextType } from "../../../context/AppContext"
import CharacterProfile from "./CharacterProfile"

const CharacterPage = () => {
  const { characterName } = useParams()
  const { characters } = useContext(AppContext) as ContextType

  const character = characters.find(
    (character) =>
      character.Name.trim().toLowerCase() ===
      characterName?.trim().toLowerCase()
  )

  return character ? (
    <CharacterProfile character={character} />
  ) : (
    <p>That character does not exist</p>
  )
}

export default CharacterPage
