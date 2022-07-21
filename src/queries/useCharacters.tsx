import { useEffect, useState } from "react"
import { CharacterInterface } from "../types/types"

interface State {
  characters: CharacterInterface[]
  status: "idle" | "fulfilled" | "rejected" | "pending"
  error: Error | null
}

const useCharacters = () => {
  const [state, setState] = useState<State>({
    characters: [],
    status: "idle",
    error: null,
  })

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setState((prev) => ({ ...prev, status: "pending" }))
        const response = await window.fetch("http://localhost:3500/characters")
        const data = await response.json()
        setState((prev) => ({
          ...prev,
          characters: data.characters,
          status: "fulfilled",
        }))
      } catch (error) {
        setState((prev) => ({
          ...prev,
          status: "rejected",
          error: error as Error,
        }))
      }
    }

    fetchCharacters()
  }, [])

  return {
    characters: state.characters,
    status: state.status,
    error: state.error,
  }
}

export default useCharacters
