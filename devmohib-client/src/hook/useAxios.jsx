import axios from "axios";
const instance = axios.create({
    baseURL: 'https://mohibullah-mohim-server.vercel.app',
});
// baseURL: 'http://localhost:4000'
export default instance;