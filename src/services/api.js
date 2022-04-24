import axios from "axios";

const BASE_URL = 'http://localhost:5000';

async function login(user){
  const token = await axios.post(`${BASE_URL}/sign-in`, user)
  return token
}

async function register(user){
  await axios.post(`${BASE_URL}/sign-up`, user)
}

async function addTest(testData){
  await axios.post(`${BASE_URL}/add`, testData)
}

async function findTeacher(){
  const result = await axios.get(`${BASE_URL}/findtestteacher`)
  return result
}

async function findCategory(){
  const result = await axios.get(`${BASE_URL}/findtestcategory`)
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