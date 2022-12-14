import axios from "axios";

const BASE_URL = "https://ehobicho.herokuapp.com";

function postSignIn(data) {
  const promise = axios.post(`${BASE_URL}/signin`, data);
  return promise;
}

function postSignUp(data) {
  const promise = axios.post(`${BASE_URL}/signup`, data);
  return promise;
}

function handleForm({ name, value }, form, setForm) {
  setForm({
    ...form,
    [name]: value,
  });
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

function getDogProducts() {
  return axios.get(`${BASE_URL}/products?category=Cachorros`);
}

function getCatProducts() {
  return axios.get(`${BASE_URL}/products?category=Gatos`);
}

function getFishProducts() {
  return axios.get(`${BASE_URL}/products?category=Peixes`);
}

function getProductDetails(productId) {
  return axios.get(`${BASE_URL}/products/${productId}`);
}

function postAddtoCart(productId, config) {
  return axios.post(`${BASE_URL}/products/${productId}/addtocart`, {}, config);
}
function getProductsInCart(config) {
  return axios.get(`${BASE_URL}/cart`, config);
}
function deleteProductInCart(productId, config){
  return axios.delete(`${BASE_URL}/cart/${productId}`, config);
}
function postTicketCheckout(body, config){
  return axios.post(`${BASE_URL}/cart`, body, config);
}

function listFavoriteProducts(config) {
  return axios.get(`${BASE_URL}/favorites`, config);
}
function deleteFavoriteProduct(config, productId) {
  return axios.delete(`${BASE_URL}/favorites/${productId}`, config);
}

function listCheckoutProducts(config) {
  return axios.get(`${BASE_URL}/checkout`, config);
}

function deleteSession(config) {
  return axios.delete(`${BASE_URL}/logout`, config);
}

export {
  postSignIn,
  postSignUp,
  handleForm,
  getProducts,
  getProductDetails,
  postAddtoCart,
  deleteFavoriteProduct,
  listFavoriteProducts,
  getProductsInCart,
  deleteProductInCart,
  listCheckoutProducts,
  deleteSession,
  getDogProducts,
  getCatProducts,
  getFishProducts,
  postTicketCheckout,
};
