import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "profile",
  initialState: { userName: "", urlImageProfile: "" },
  reducers: {
    selectProfile: (state, action) => {
      console.log("Entro al reducer");
      state.userName = action.payload.userName;
      state.urlImageProfile = action.payload.urlImageProfile;
    },
  },
});

export const { selectProfile } = userProfileSlice.actions;
