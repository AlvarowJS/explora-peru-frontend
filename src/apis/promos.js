import axios from 'axios';

const promosBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/v1/promos'    
})

export default promosBD