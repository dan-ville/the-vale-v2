import { CharacterInterface } from "../../../types/types"
import { Link } from "react-router-dom"

interface Props {
  characters: CharacterInterface[]
}
const CharacterGallery = ({ characters }: Props) => {
  return (
    <div>
      {characters.map((character, key) => (
        <div key={key}>
          <Link to={`/characters/${character.Name.trim()}`}>
            {character.Name.trim()}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CharacterGallery
