import { CharacterInterface } from "../../../types/types"
import "./CharacterPage.scss"

interface Props {
  character: CharacterInterface
}

const CharacterProfile = ({ character }: Props) => {
  return (
    <div className="character">
      <p className="subheader">
        Species: {character["Name (from Species)"]?.join(" ")}
      </p>
      <img
        src={character["Inspirational images"]?.[0].thumbnails["large"].url}
        alt={`Portrait of ${character.Name}`}
        style={{ width: "300px", height: "auto" }}
      />
      <section className="description">{character.Biography}</section>
    </div>
  )
}

export default CharacterProfile
