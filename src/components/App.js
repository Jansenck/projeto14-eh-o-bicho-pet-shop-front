import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import FavoriteProductsPage from "../pages/FavoriteProductsPage";
import GlobalStyle from "../styles/GlobalStyles";
import UserContext from "../contexts/UserContext";
import SingleProductPage from "../pages/SingleProductPage";
import ProductsPage from "../pages/ProductsPage";

const theme = {
  white: "#FFFFFF",
  black: "#000000",
  darkblue: "#05668d",
  lightblue: "#028090",
  darkgreen: "#00a896",
  lightgreen: "#02c39a",
  lightyellow: "#f0f3bd",
  red: "#FF0000",
};

export default function App() {
  const [userData, setUserData] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [config, setConfig] = useState(
    localStorage.getItem("user")
      ? { headers: { Authorization: `Bearer ${userData.token}` } }
      : null
  );

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        config,
        setConfig,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route
              path="/products/:productId"
              element={<SingleProductPage />}
            ></Route>
            <Route path="/favorites" element={<FavoriteProductsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}
