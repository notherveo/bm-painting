export interface MuralItem {
  id: string;
  title: string;
  category: string;
  seed: string;
}

export const muralItems: MuralItem[] = [
  { id: "m1", title: "Starry Night Sky", category: "Space", seed: "sky1" },
  { id: "m2", title: "Jungle Adventure", category: "Jungle", seed: "jungle1" },
  { id: "m3", title: "Ocean Depths", category: "Underwater", seed: "ocean1" },
  { id: "m4", title: "Whimsical Forest", category: "Fantasy", seed: "forest1" },
  { id: "m5", title: "Colorful Animals", category: "Animals", seed: "animals1" },
  { id: "m6", title: "Sunset Meadow", category: "Nature", seed: "meadow1" },
  { id: "m7", title: "Cozy Library", category: "Interiors", seed: "library1" },
  { id: "m8", title: "City Skyline", category: "Exteriors", seed: "city1" },
  { id: "m9", title: "Moonlit Garden", category: "Fantasy", seed: "garden1" },
  { id: "m10", title: "Pirate Cove", category: "Jungle", seed: "pirate1" },
  { id: "m11", title: "Northern Lights", category: "Space", seed: "aurora1" },
  { id: "m12", title: "Tropical Paradise", category: "Nature", seed: "tropical1" },
];

export const muralCategories = [
  "All",
  "Space",
  "Jungle",
  "Underwater",
  "Fantasy",
  "Animals",
  "Nature",
  "Interiors",
  "Exteriors",
];
