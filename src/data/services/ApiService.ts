import axios from "axios";

const url = 'localhost:8000';

export const ApiService = axios.create({
  baseURL: url,
})