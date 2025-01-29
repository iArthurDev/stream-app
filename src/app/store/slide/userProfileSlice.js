import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "profile",
  initialState: { userName: "", urlImageProfile: "" },
  reducers: {
    selectProfile: (state, action) => {
      state.userName = action.payload.userName;
      state.urlImageProfile = action.payload.urlImageProfile;
    },
  },
});

export const { selectProfile } = userProfileSlice.actions;
