import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoryReducer from "./../features/category/CategorySlice";
import loginReducer from "./../features/login/LoginSlice";
import realisationReducer from "./../features/realisations/RealisationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    page: categoryReducer,
    login: loginReducer,
    realisations: realisationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
