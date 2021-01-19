import axios from "axios";

// THIS IS DANGEROUS LOH SUPERRR DANGEROUS , tp cuma utk demo ini aja sepertinya ga masalah :)
const api_key = "0bec2897ec01469d6fae0ad7b0b0dd1d" // dang e rous
const api_ver = '3'
// dang e rous

const Axios = axios.create({
    baseURL: `https://api.themoviedb.org/${api_ver}/`,
    params:{
        api_key
    }
})

export default Axios