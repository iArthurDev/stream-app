import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profiles",
  initialState: [
    {
      idUser: 1,
      userName: "Admin",
      urlImageProfile: "/images/profiles/r2d2.jpg",
    },
    {
      idUser: 2,
      userName: "LuisD",
      urlImageProfile: "/images/profiles/aquaman.jpg",
    },
  ],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProfile } = ProfileSlice.actions;
