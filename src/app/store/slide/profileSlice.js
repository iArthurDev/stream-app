import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profiles",
  initialState: [
    {
      idUser: "1",
      userName: "Admin",
      urlImageProfile: "/images/profiles/peliculas/r2d2.jpg",
    },
    {
      idUser: "2",
      userName: "LuisD",
      urlImageProfile: "/images/profiles/seriesAnimadas/luffy.jpg",
    },
    {
      idUser: "3",
      userName: "ioMero",
      urlImageProfile: "/images/profiles/superheroes/ironman.jpg",
    },
  ],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
    setProfile: (state, action) => {
      const { idUser, nuevoNombre, nuevaImagen } = action.payload;

      const profileIndex = state.findIndex(
        (profile) => profile.idUser === idUser
      );

      if (profileIndex !== -1) {
        console.log("llego al reducer");
        state[profileIndex] = {
          ...state[profileIndex],
          userName: nuevoNombre,
          urlImageProfile: nuevaImagen,
        };
      }
    },
  },
});

export const { addProfile, setProfile } = ProfileSlice.actions;
