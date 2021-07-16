import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(57, 62, 70, 1)",
      default: "rgba(35, 41, 49, 1)",
    },
    primary: {
      light: "rgba(238, 238, 238, 1)",
      main: "rgba(78, 204, 163, 1)",
      dark: "rgba(39, 99, 79, 1)",
      contrastText: "rgba(0, 0, 0, 1)",
    },
    secondary: {
      light: "rgba(0, 84, 179, 1)",
      main: "rgba(1, 45, 95, 1)",
      dark: "rgba(0, 19, 41, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(238, 238, 238, 1)",
      secondary: "rgba(238, 238, 238, 0.54)",
      disabled: "rgba(74, 74, 74, 1)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
export default theme;
