import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "#F6F6F6",
      default: "#fff",
      dark: "#354259",
    },
    primary: {
      main: "#0078aa",
    },
    secondary: {
      main: "#FDF6EC",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#FDF6EC",
      disabled: "rgba(74, 74, 74, 1)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
export default theme;
