import axios from 'axios'

const api = axios.create({
    baseURl: `http://localhost:8000`,
})

export default api