import { configureStore } from "@reduxjs/toolkit";
import { i18nReducer } from "react-redux-i18n";
import navigationReducer from "./features/navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    i18n: i18nReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
