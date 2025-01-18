import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeConnections: (state, action) => null,
  },
});
export const { addConnections, removeConnections } = collectionSlice.actions;

export default collectionSlice.reducer;
