import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyles";
import CartPage from "../pages/CartPage";

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
          <Route path="/" element={<p>Home Page</p>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
