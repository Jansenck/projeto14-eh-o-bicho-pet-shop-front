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

function getSingleProduct(productId) {
  return axios.get(`${BASE_URL}/products/${productId}`);
}

function selectProduct(productId, config) {
  return axios.post(`${BASE_URL}/products/${productId}`, {}, config);
}

export { postSignIn, postSignUp, handleForm, getSingleProduct, selectProduct };
