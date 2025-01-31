import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "profile",
  initialState: { idUser: "", userName: "", urlImageProfile: "" },
  reducers: {
    selectProfile: (state, action) => {
      state.idUser = action.payload.idUser;
      state.userName = action.payload.userName;
      state.urlImageProfile = action.payload.urlImageProfile;
    },
  },
});

export const { selectProfile } = userProfileSlice.actions;
