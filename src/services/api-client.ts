import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fd344cf613764295a935eb1700f9ac85'
    }
})