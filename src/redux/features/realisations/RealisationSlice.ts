import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";
export interface IRealisation {
  name: string;
  git_url: string;
  id: string;
  description?: string;
  archived: boolean;
  created_at: string;
  edited_at: string;
  download_path: string;
  languages_url?: string;
  size: number;
  visibility: string;
  url: string;
}
export interface RealisationState {
  realisationsFormatted: IRealisation[];
  data?: any[];
}

const initialState: RealisationState = {
  realisationsFormatted: [],
  data: undefined,
};

export const realisationsSlice = createSlice({
  name: "realisations",
  initialState,
  reducers: {
    fetchGithubRealisation: (
      state,
      action: PayloadAction<{
        data?: any[];
        realisations: IRealisation[];
      }>
    ) => {
      state.data = action.payload.data;
      state.realisationsFormatted = action.payload.realisations;
    },
  },
});
export const { fetchGithubRealisation } = realisationsSlice.actions;
export const getRealisations = (state: RootState) =>
  state.realisations.realisationsFormatted;

export const getRealisationBy = (state: RootState, id: string) =>
  _.find(state.realisations.realisationsFormatted, { id });
export default realisationsSlice.reducer;
