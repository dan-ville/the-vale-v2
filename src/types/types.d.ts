type Thumbnail = {
  url: string
  width: number
  height: number
}
export interface CharacterInterface {
  Type?:
    | "Viewpoint"
    | "Secondary Character"
    | "Antagonist"
    | "Guide"
    | "Tertiary Character"
    | "Flat Character"
    | "Confidante"
    | "Villain"
  "Personality Keywords"?: string
  Scenes?: string[]
  "Inspirational images"?: Array<{
    id: string
    width: number
    height: number
    url: string
    filename: string
    size: number
    type: string
    thumbnails: {
      small: Thumbnail
      large: Thumbnail
      full: Thumbnail
    }
  }>
  "Hair Color"?: string
  Age?: number
  "Character Building"?: string
  Tribe?: string[]
  Species?: string[]
  Tagline?: string
  "Full Name"?: string
  Name: string
  Factions?: string[]
  "Skin Color"?: string
  "Eye Color"?: string
  "Name (from Tribe)"?: string[]
  "Name (from Species)": string[]
}
