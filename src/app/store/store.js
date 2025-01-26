import { configureStore } from "@reduxjs/toolkit";
import { ProfileSlice } from "./slide/profileSlice";
import { userProfileSlice } from "./slide/userProfileSlice";

export default configureStore({
  reducer: {
    profiles: ProfileSlice.reducer,
    profile: userProfileSlice.reducer,
  },
});
