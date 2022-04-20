import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export default async function login(user){
  const token = await axios.post(`${BASE_URL}/sign-in`, user)
  return token
}