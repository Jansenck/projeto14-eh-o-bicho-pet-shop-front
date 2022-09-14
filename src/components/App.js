import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ProductPage from "../pages/ProductPage";
import SignInPage from "../pages/SignInPage"
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
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
