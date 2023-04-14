import axios from 'axios';

const toursBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/v1/tours'    
})

export default toursBD