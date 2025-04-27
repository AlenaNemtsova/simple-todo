import { Theme, Themes } from '../models/themes';

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: ' #658bbe',
    backgroundSecondary: ' #edf0f1',
    backgroundTertiary: ' #ffffff',
    textPrimary: ' #000000',
  },
};

const dark: Theme = {
  name: 'dark',
  colors: {
    backgroundPrimary: ' #121212',
    backgroundSecondary: ' #3f3f3f',
    backgroundTertiary: ' #8b8b8b',
    textPrimary: ' #ffffff',
  },
};

// export const themes = { light: light, dark: dark };
export const themes: Themes = { light, dark }; //сокращённая запись
