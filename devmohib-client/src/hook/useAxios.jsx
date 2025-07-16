import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:4000',
});
// baseURL: 'https://mohibullah-mohim-server.vercel.app'
export default instance;