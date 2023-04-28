import axios from 'axios';

const usuarioBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/all-users'    
})

export default usuarioBD