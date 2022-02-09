export const darkTheme = {
  colors: {
    main: "#181a1b",
    nav: "#ff6600",
    text: {
      primary: "#E8E6E3",
      secondary: "#999083",
      mid: "#D3CFC9",
    },
    borders: {
      light: "#736B5E",
      dark: "#303436",
    },
  },
};

export const lightTheme = {
  colors: {
    ...darkTheme.colors,
    main: "#F6F6EF",
    text: {
      primary: "#000000",
      secondary: "#828282",
      mid: "#222222",
    },
    borders: {
      light: "#FFFFFF",
      dark: "#767676",
    },
  },
};
