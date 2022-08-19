import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://hora-certa-phi.vercel.app',
})