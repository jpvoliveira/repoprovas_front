import axios from "axios";

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}

async function login(user){
  const token = await axios.post(`${BASE_URL}/sign-in`, user)
  return token
}

async function register(user){
  await axios.post(`${BASE_URL}/sign-up`, user)
}

async function addTest(testData, token){
  await axios.post(`${BASE_URL}/add`, testData, createConfig(token))
}

async function findTeacher(token){
  const result = await axios.get(`${BASE_URL}/findtestteacher`, createConfig(token))
  return result
}

async function findCategory(token){
  const result = await axios.get(`${BASE_URL}/findtestcategory`, createConfig(token))
  return result
}

const api = {
  login,
  register,
  addTest,
  findTeacher,
  findCategory
}

export default api;