import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaMap, FaCodepen} from "react-icons/fa";
import foto from "../assets/img/inicio/loading.gif"
import * as global from "../components/global.js";

const Contacto = () =>{
    const [lista, setLista] = useState([]);
    const [dependencia, setDependencia] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 


    useEffect(()=>{
        const estacionInfo = process.env.REACT_APP_ESTACION_INFO
        const dependencia = process.env.REACT_APP_DEPENDENCIA
        axios.get(estacionInfo).then(response=>{
            setLista(response.data);
        }).catch(error =>{
          console.log("Error al obtener la data: ", error);
        });
        axios.get(dependencia).then(response=>{
            setDependencia(response.data);
        }).catch(error =>{
          console.log("Error al obtener la data: ", error);
        });
        setIsLoading(false);
    },[]);

    if (isLoading) {
        return (
        <div className="container d-flex justify-content-center">
            <img src={foto} style={{maxWidth:"100px", padding:"100px 0"}}></img>
        </div>);
    }
    
    return(
    <React.Fragment>
        <div className="separador"></div>
        <div className="container">
            <div className="linea-contacto">
                <div className="box-contacto-1">
                    <h1> <FaMap className="FaMap"/> <span style={{color: "orange"}}>Google</span> Maps</h1>
                    <br></br>
                    <h3>Lugares de Referencia</h3>
                    {lista.map((item) =>{
                        return (
                            <div key={item.id}>
                                <p>{item.descripcion}</p>
                                <h3>Fijo</h3>
                                <p>{item.fijo}</p>
                                <h3>Celular</h3>
                                <p>{item.celular}</p>
                                <h3>E-mail</h3>
                                <p>{item.email}</p>
                                <h3>Direccion</h3>
                                <p>{item.direccion}</p>
                            </div>
                            )
                    })}
                </div>
                <div className="box-contacto-1">
                    <h1><FaCodepen className="FaMap"/>Dependencias</h1>
                    {dependencia.map((item) =>{
                        return (
                            <div className="box-dependencias" key={item.id}>
                                <div className="box-dependencias-md1">
                                    <img alt=""  src={item.imgUrl}></img>
                                </div>
                                <div className="box-dependencias-md2">
                                    <h1>{item.nombre}</h1>
                                    <h1>{item.email}</h1>
                                    <h1>{item.telefono}</h1>
                                </div>
                            </div>
                            )
                    })}
                    
                </div>
            </div> 
        </div>

        <div className="separador"></div>
        </React.Fragment>
        );
    }

export default Contacto;
