import { configureStore } from "@reduxjs/toolkit";
import { ProfileSlice } from "./slide/profileSlice";
import { userProfileSlice } from "./slide/userProfileSlice";
import { imagesProfilesSlice } from "./slide/profileImagesSlice";

export default configureStore({
  reducer: {
    profiles: ProfileSlice.reducer,
    profile: userProfileSlice.reducer,
    images: imagesProfilesSlice.reducer,
  },
});
