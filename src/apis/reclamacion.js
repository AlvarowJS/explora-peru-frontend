import axios from 'axios';

const reclamacionBD = axios.create({    
    baseURL: 'http://127.0.0.1:8000/api/v1/libros'    
})

export default reclamacionBD