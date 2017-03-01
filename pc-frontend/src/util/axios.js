import axios from 'axios'

export const baseURL = 'http://localhost:3000';

//通用类http-service
export const httpService = axios.create({
  baseURL,
  //withCredentials: true
});

//文件服务类file-service,
export const fileService = axios.create({
  baseURL
});


