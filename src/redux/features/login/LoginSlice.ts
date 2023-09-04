import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthError, Session, User } from "@supabase/supabase-js";

export interface LoginState {
  error?: {
    message: string;
    status?: number;
    name: string;
  };
  user?: User;
  session?: Session;
  token?: string;
  email?: string;
  created_at?: string;
}

const initialState: LoginState = {
  error: undefined,
  token: undefined,
  user: undefined,
  email: undefined,
  created_at: undefined,
  session: undefined,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccessfully: (
      state,
      action: PayloadAction<{
        user: User;
        session: Session;
        token: string;
        email: string;
        created_at: string;
      }>
    ) => {
      const { user, session, token, email, created_at } = action.payload;

      state.email = email;
      state.created_at = created_at;
      state.email = email;
      state.error = undefined;
      state.user = user;
      state.session = session;
      state.token = token;
    },

    loginFailed: (
      state,
      action: PayloadAction<{
        error: AuthError;
      }>
    ) => {
      state.error = {
        message: action.payload.error.message,
        name: action.payload.error.name,
        status: action.payload.error.status,
      };
    },

    logout: (
      state,
      action: PayloadAction<{
        success: boolean;
        error?: AuthError;
      }>
    ) => {
      if (action.payload.success) {
        state.email = undefined;
        state.created_at = undefined;
        state.email = undefined;
        state.error = undefined;
        state.user = undefined;
        state.session = undefined;
        state.token = undefined;
        return;
      }

      if (action.payload.error) {
        state.error = {
          message: action.payload.error.message,
          name: action.payload.error.name,
          status: action.payload.error.status,
        };
      }
    },
  },
});
export const { loginSuccessfully, loginFailed, logout } = loginSlice.actions;
export const getSessionToken = (state: RootState) => state.login.token;
export const getUserLoggedCreatedDate = (state: RootState) =>
  state.login.created_at;
export default loginSlice.reducer;
