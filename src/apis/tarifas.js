import axios from 'axios';

const tarifaBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/v1/tarifa'    
})

export default tarifaBD