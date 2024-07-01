import axios from "axios";
const api = axios.create({
    baseURL: "https://apiblog.petoman.com/api"
})

export default api