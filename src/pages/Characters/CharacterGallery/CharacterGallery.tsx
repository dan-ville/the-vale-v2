import { CharacterInterface } from "../../../types/types"
import CharacterCard from "./CharacterCard"
import "../style.scss"

interface Props {
  characters: CharacterInterface[]
}
const CharacterGallery = ({ characters }: Props) => {

  return (
    <div className="gallery">
      {characters.map((character, key) => (
        <CharacterCard
          key={key}
          character={character}
        />
      ))}
    </div>
  )
}

export default CharacterGallery
