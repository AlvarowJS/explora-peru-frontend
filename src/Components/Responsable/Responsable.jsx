import React from 'react'
import './Responsable.css'
import mincetur from './../../assets/Responsable/mincetur.png'
import protegeme from './../../assets/Responsable/protegeme.png'
const Responsable = ({ idioma }) => {
    const handleDescargarProtegeme = () => {
        window.open('./Responsable/afiche_esnna.pdf', '_blank');
    };
    const handleDescargarMincetur = () => {
        window.open('./Responsable/CONSTANCIA MINCETUR PEX.pdf', '_blank');
    };
    return (
        <div className='responsable'>
            {
                idioma == 'spanish' ?
                    <h3>Turismo Responsable</h3>
                    :
                    <h3>Responsable tourism</h3>
            }

            <div className='responsable__cards'>
                <div className='responsable__cards--info'>
                    <img src={protegeme} alt="" />
                    <div className='responsable__cards--text'>
                        {
                            idioma == 'spanish' ?
                                <p>En esta agencia <br />
                                    NO PROMOVEMOS NI <br />
                                    PERMITIMOS LA EXPLOTACIÓN <br />
                                    SEXUAL DE NIÑOS, NIÑAS <br />
                                    Y ADOLESCENTES</p>
                                :
                                <p> in this agency  <br />
                                    WE DO NOT PROMOTE OR <br />
                                    WE ALLOW THE EXPLOITATION <br />
                                    SEX OF BOYS, GIRLS <br />
                                    AND TEENS </p>
                        }
                        <button onClick={handleDescargarProtegeme}>
                            Ver Más
                        </button>
                    </div>
                </div>
                <div className='responsable__cards--info'>
                    <img src={mincetur} alt="" />
                    <div className='responsable__cards--text'>
                        {
                            idioma == 'spanish' ?
                                <p>Estamos inscritos en el<br />
                                    Directorio Nacional de Prestadores de<br />
                                    Servicios Turísticos Calificados</p>
                                :
                                <p>
                                    We are enrolled in the<br />
                                    National Directory of Service Providers<br />
                                    Qualified Tourist Services</p>
                        }
                        <button onClick={handleDescargarMincetur}>
                            Ver Más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Responsable