import axios from "axios";
import 'dotenv/config'

const baseUrl = process.env.URL_API

const api = axios.create({
    baseUrl,
})

export default api;