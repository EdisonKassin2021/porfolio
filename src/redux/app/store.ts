import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistConfig } from "./persist";
import counterReducer from "../features/counter/counterSlice";
import categoryReducer from "./../features/category/CategorySlice";
import loginReducer from "./../features/login/LoginSlice";
import realisationReducer from "./../features/realisations/RealisationSlice";

const rootReducer = combineReducers({
  // reducer: {
  counter: counterReducer,
  page: categoryReducer,
  login: loginReducer,
  realisations: realisationReducer,
  // },
});

const persistedReducer: any = persistReducer<RootState>(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { persistor };
export default store;
