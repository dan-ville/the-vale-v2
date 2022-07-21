import { CharacterInterface } from "../../../types/types"

interface Props {
  character: CharacterInterface
}

const CharacterProfile = ({ character }: Props) => {
  return (
    <div>
      <h3>{character.Name}</h3>
      <p>Species: {character["Name (from Species)"]?.join(" ")}</p>
      <img
        src={character["Inspirational images"]?.[0].thumbnails["large"].url}
        alt={`Portrait of ${character.Name}`}
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  )
}

export default CharacterProfile
