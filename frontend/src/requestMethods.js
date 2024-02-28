import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWNmMzFlNmI3YzNjN2I2NWZlODhlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzA0NTc3MCwiZXhwIjoxNzA3MzA0OTcwfQ.ObGv-5d9FCDEWEVKWosXpXXLVJ87QIaVtTjG1noTeqE";


export const publicRequest = axios.create({
    baseURL :BASE_URL,
}) ;
export const userRequest = axios.create({
    baseURL :BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
}) ;
