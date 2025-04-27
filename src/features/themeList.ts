import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../styles/themes';
import { Theme } from '../models/themes';

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: themes['light'],
};

export const themeList = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light'];
    },
  },
});

export const { toggleThemeAction } = themeList.actions;
export default themeList.reducer;
