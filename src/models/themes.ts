//типизация для темы в файле стилей themes.ts
export interface Theme {
  name: string;
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    textPrimary: string;
  };
}

//типизация для объекта themes в файле стилей themes.ts
export interface Themes {
  [key: string]: Theme;
}
