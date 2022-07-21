import { createContext } from "react"
import useCharacters from "../queries/useCharacters"
import { CharacterInterface } from "../types/types"

export interface ContextType {
  characters: CharacterInterface[]
  status: "idle" | "fulfilled" | "rejected" | "pending"
  error: Error | null
}

export const AppContext = createContext<ContextType | null>(null)

const AppContextProvider = ({ children }: { children: any }) => {
  const { characters, status, error } = useCharacters()

  const value = { characters, status, error }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider
