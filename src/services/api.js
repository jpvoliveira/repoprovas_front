import axios from "axios";

const BASE_URL = 'http://localhost:5000';

async function login(user){
  const token = await axios.post(`${BASE_URL}/sign-in`, user)
  return token
}

async function register(user){
  await axios.post(`${BASE_URL}/sign-up`, user)
}

const api = {
  login,
  register
}

export default api;