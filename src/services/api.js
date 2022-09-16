import axios from "axios";

const BASE_URL = "http://localhost:5000";

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

function getSingleProduct(productId) {
  return axios.get(`${BASE_URL}/products/${productId}`);
}

function postProductCart(productId, config) {
  return axios.post(`${BASE_URL}/products/${productId}/addtocart`, {}, config);
}

export {
  postSignIn,
  postSignUp,
  handleForm,
  getProducts,
  getSingleProduct,
  postProductCart,
};
