import { useNavigate } from "react-router-dom"
import { CharacterInterface } from "../../../types/types"
import "../style.scss"

interface Props {
  character: CharacterInterface
}

const CharacterCard = ({ character }: Props) => {
  const navigate = useNavigate()

  return (
    <button
      className="card"
      onClick={() => navigate(`/characters/${character.Name}`)}
    >
      <p className="card-name">{character.Name}</p>
      <img
        className="card-image"
        src={character["Inspirational images"]?.[0].thumbnails["large"].url}
        alt={`Portrait of ${character.Name}`}
        style={{ width: "300px", height: "auto" }}
      />
    </button>
  )
}

export default CharacterCard
