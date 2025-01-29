import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profiles",
  initialState: [
    {
      idUser: 1,
      userName: "Admin",
      urlImageProfile: "/images/profiles/peliculas/r2d2.jpg",
    },
    {
      idUser: 2,
      userName: "LuisD",
      urlImageProfile: "/images/profiles/seriesAnimadas/luffy.jpg",
    },
    {
      idUser: 3,
      userName: "ioMero",
      urlImageProfile: "/images/profiles/superheroes/ironman.jpg",
    },
  ],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProfile } = ProfileSlice.actions;
