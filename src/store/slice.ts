import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isLoaded: boolean;
}

const initialState: AppState = {
  isLoaded: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.isLoaded = true;
    },
  },
});

export const { setLoaded } = appSlice.actions;

export default appSlice.reducer;
