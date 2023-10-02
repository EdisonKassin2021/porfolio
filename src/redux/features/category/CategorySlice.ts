import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SidebarItems } from "../../../utils/constants/SidebarItem";

export interface CategoryState {
  currentPageId: string;
  currentPageLabel: string;
}

const initialState: CategoryState = {
  currentPageId: SidebarItems[1].key,
  currentPageLabel: SidebarItems[1].label,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setNewPage: (
      state,
      action: PayloadAction<{
        itemKey: string;
        itemLabel: string;
      }>
    ) => {
      state.currentPageId = action.payload.itemKey;
      state.currentPageLabel = action.payload.itemLabel;
    },
  },
});
export const { setNewPage } = categorySlice.actions;
export const getCurrentPageId = (state: RootState) => state.page.currentPageId;
export const getCurrentPageLabel = (state: RootState) =>
  state.page.currentPageLabel;
export default categorySlice.reducer;
