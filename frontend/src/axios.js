import Axios from 'axios'


const BASE_URL="http://localhost:5000/api/"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})
