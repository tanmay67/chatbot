import { configureStore } from "@reduxjs/toolkit";
import chatBotSlice from "./chatBotSlice";
const store = configureStore({
  reducer: {
    chatBotSlice: chatBotSlice,
  },
});

export default store;
