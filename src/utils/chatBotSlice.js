import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "1",
      data: "text 1",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
    {
      user: "2",
      data: "text 2",
      type: "text",
      date: Date()
        .toLocaleString()
        .replace("GMT+0530 (India Standard Time)", "")
        .trim(),
    },
  ],
};

const chatBotSlice = createSlice({
  name: "chatBotSlice",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push(action.payload);
    },
    editLastMessage: (state, action) => {
      state.list[state.list.length - 1].data = action.payload;
    },
  },
});

export const { addToList, editLastMessage } = chatBotSlice.actions;

export default chatBotSlice.reducer;
