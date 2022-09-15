import axios from "axios";

const BASE_URL = "http://localhost:5000";

function getSingleProduct(productId) {
  return axios.get(`${BASE_URL}/products/${productId}`);
}

export { getSingleProduct };
