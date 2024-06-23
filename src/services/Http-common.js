import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5164/",
  // baseURL: process.env.REACT_APP_API_BASE_URL || "http://api-gateway:8080/",
});
