import axios from 'axios';

const circuitosBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/v1/circuitos/'    
})

export default circuitosBD