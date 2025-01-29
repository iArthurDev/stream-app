import { createSlice } from "@reduxjs/toolkit";

export const imagesProfilesSlice = createSlice({
  name: "images",
  initialState: [
    {
      idImage: 1,
      category: "peliculas",
      urlImage: "/images/profiles/peliculas/r2d2.jpg",
    },
    {
      idImage: 2,
      category: "seriesAnimadas",
      urlImage: "/images/profiles/seriesAnimadas/jinx.jpg",
    },
    {
      idImage: 3,
      category: "seriesAnimadas",
      urlImage: "/images/profiles/seriesAnimadas/vi.jpg",
    },
    {
      idImage: 4,
      category: "superheroes",
      urlImage: "/images/profiles/superheroes/aquaman.jpg",
    },
    {
      idImage: 5,
      category: "superheroes",
      urlImage: "/images/profiles/superheroes/batman.jpg",
    },
    {
      idImage: 6,
      category: "superheroes",
      urlImage: "/images/profiles/superheroes/ironman.jpg",
    },
    {
      idImage: 7,
      category: "seriesAnimadas",
      urlImage: "/images/profiles/seriesAnimadas/luffy.jpg",
    },
    {
      idImage: 8,
      category: "seriesAnimadas",
      urlImage: "/images/profiles/seriesAnimadas/coraje.jpg",
    },
  ],
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addImage } = imagesProfilesSlice.reducer;
