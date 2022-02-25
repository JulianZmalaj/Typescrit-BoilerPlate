import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  visible: boolean;
}

const initialState: NavigationState = {
  visible: true,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    show: (state) => {
      state.visible = true;
    },
    hide: (state) => {
      state.visible = false;
    },
    toggle: (state) => {
      state.visible = !state.visible;
    },
    visible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const { show, hide, toggle, visible } = navigationSlice.actions;

export default navigationSlice.reducer;
