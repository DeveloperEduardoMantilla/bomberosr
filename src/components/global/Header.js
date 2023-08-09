import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';
import axios from "axios";
import { FaFacebook,FaInstagram,FaYoutube,FaPhoneVolume,FaEnvelope} from "react-icons/fa";
import * as global from "../global.js";

const Header = () =>{

    const [data, setData] = useState([]);
    const url2 = process.env.data;
    useEffect(()=>{
        const url = process.env.REACT_APP_ESTACION_INFO
        axios.get(url).then(response=>{
          setData(response.data[0]);
        }).catch(error =>{
          console.log("Error al obtener la data: ", error);
        });
    },[]);

    return (
        <React.Fragment>
        {console.log(url2)}
        <header>
            <div className='header-first-small'>
                <h1>Número de emergencias: {(data.length!==0)? data.celular :" "  }</h1>
            </div>
            <div className='header-first'>
                <div className='container-first'>
                <div className='header-address'>
                    <h1>{(data.length!==0)? " "+data.direccion :" "  }</h1>
                </div>
                <div className='header-social'>
                    <div className='header-redes'>
                        <div><a target="_blank" rel="noreferrer" href={(data.length!==0)? " "+data.urlFacebook :" "  }><FaFacebook/></a></div>
                        <div><a target="_blank" rel="noreferrer" href={(data.length!==0)? " "+data.urlInstagram :" "  }><FaInstagram/></a></div>
                        <div><a target="_blank" rel="noreferrer" href={(data.length!==0)? " "+data.urlYoutube :" "  }><FaYoutube/></a></div>
                    </div>
                    <div className='header-contacto'>
                        <h1>Número de emergencias: 
                        {(data.length!==0)? " "+data.celular :" "  }
                        </h1>
                    </div>
                </div>
                </div>
            </div>
            <div className='header-second'>
                <div className='header_second_logo'>
                    <img src={imgLogo}></img>
                </div>
                <div className='header_second_contact'>
                        <div className='contact_header'>
                            <div className='icon-contact'>
                                <FaPhoneVolume />
                            </div>
                            <div className='linea-contact'>
                                <h3>Linea</h3>
                                <p>{(data.length!==0)? data.fijo :" "  }</p>
                            </div>
                        </div>
                        <div className='contact_header'>
                            <div className='icon-contact'>
                                <FaEnvelope />
                            </div>
                            <div className='linea-contact'>
                                <h3>Correo</h3>
                                <p>{(data.length!==0)? data.email :" "  }</p>
                            </div>
                        </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand d-lg-none" href="#"><img src={imgLogo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    
                        <NavLink className="nav-link " activeClassName="active-menu" to="/home">Inicio</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/servicios">Servicios</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/noticias">Noticias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/emergencias">Emergencias</NavLink>
                        <NavLink className="nav-link" activeClassName="active-menu" to="/contacto">Contacto</NavLink>
                        <a className="nav-link" target="_blank" rel="noreferrer" activeClassName="active-menu" href="https://intranet-lebrija.herokuapp.com/">Intranet</a>
                        <a className="nav-link" target="_blank" rel="noreferrer" activeClassName="active-menu" href={global.direccionAcceso+"/admin"}>Admin</a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tramites 
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item" to="pqrds">Pqrds</NavLink>
                            <NavLink className="dropdown-item" to="pagosForm">Pagos</NavLink>
                            <NavLink className="dropdown-item" to="serviciosForm">Servicios</NavLink>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </React.Fragment>
    )
    
}

export default Header;