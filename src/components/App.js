import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyles";

const theme = {
  white: "#FFFFFF",
  black: "#000000",
  darkblue: "#05668d",
  lightblue: "#028090",
  darkgreen: "#00a896",
  lightgreen: "#02c39a",
  lightyellow: "#f0f3bd",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
