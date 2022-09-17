import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import UserContext from "../contexts/UserContext";

import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetails from "../pages/ProductDetails";
import FavoriteProductsPage from "../pages/FavoriteProductsPage";

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
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route
              path="/products/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/favorites" element={<FavoriteProductsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}
