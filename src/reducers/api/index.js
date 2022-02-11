import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3001'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const getProducts = ()=> API.get('/products')
export const getProduct =(id)=> API.get(`/products/${id}`)
export const getProductById = (id)=> API.get(`/products/${id}`)
export const createProducts =(product)=> API.post('/products', product)
export const updateProduct =(id, form)=> API.patch(`/products/${id}`, form)
export const deleteProducts = (id)=> API.delete(`/products/${id}`)

export const signin = (form)=> API.post("/auth/signin", form)
export const signup = (form)=> API.post("/auth/signup", form)