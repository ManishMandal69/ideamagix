import Axios from 'axios'


const BASE_URL="https://ideamagixweb.onrender.com/api/"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})
