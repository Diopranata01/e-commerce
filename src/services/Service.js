import Axios from "axios"

const { REACT_APP_BASE_URL } = process.env

// Buat instance axios
const Services = Axios.create({
    baseURL: REACT_APP_BASE_URL,
  })

export const api = REACT_APP_BASE_URL
export default Services