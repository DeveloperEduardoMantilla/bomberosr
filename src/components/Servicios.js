import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import axios from "axios";
import foto from "../assets/img/inicio/loading.gif";
import * as global from "../components/global.js";

const Servicios = () =>{
    const [lista, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const GetList = () =>  {
        axios.get(global.direccionAcceso+"/api/servicios?populate=*").then((value)=>{
        setLista(value.data.data);
        setIsLoading(false);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    if (isLoading) {
        return (
        <div className="container d-flex justify-content-center">
            <img src={foto} style={{maxWidth:"100px", padding:"100px 0"}}></img>
        </div>);
    }

    return(
        <React.Fragment>
            
            <div className="separador"></div>
                <div className="servicios">
                    <div className="container">
                        <div className="servicios-info">
                            <div className="servicios-info-contenido">
                                <h1> <span>Nuestros Servicios </span> </h1>
                                <p>Los bomberos no solo apagamos incendios, para toda la comunidad y establecimientos comerciales de nuestro municipio, contamos con personal idóneamente capacitado para prestar eficiente y eficazmente los siguientes servicios</p>
                            </div>
                        </div>
                        <div className="servicios-brindados">
                            {lista.map((item) => {
                                return(
                                <div className="servicio-bomberos" key={item.id}>
                                    <div className="servicios-bomberos-contenido">
                                        <h1>{item.attributes.titulo}</h1>
                                        <p>{item.attributes.descripcion}</p>
                                        <NavLink className="btn btn-solicitar btn-sm" to="serviciosForm"> Solicitar</NavLink>
                                    </div>
                                    <div className="servicios-bomberos-img">
                                        <img src={global.direccionAcceso+item.attributes.img.data[0].attributes.url} alt="Servicios Bomberos"></img>
                                    </div>
                                </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="separador"></div>
        </React.Fragment >
    );
};
export default Servicios;

