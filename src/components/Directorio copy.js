import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import foto from "../assets/img/logo.png"
const Directorio = () =>{
    const [lista, setLista] = useState([]);

    const GetList = () =>  {
        axios.get("http://localhost:1337/api/equipo-bomberos?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
        <div className="separador"></div>
            <div className="container directorioList">
                <h1>Directorio de Cuerpos de Bomberos</h1>
                <hr></hr>
                <br></br>
                <div className="d-flex justify-content-center">
                {lista.map((item) =>{
                    return (
                        <div className="contacto-style" key={item.id}>
                            <img src={"http://localhost:1337"+item.attributes.foto.data[0].attributes.url}></img>
                            <h1>{item.attributes.nombre}</h1>
                            <h2>{item.attributes.rol_bombero.data.attributes.nombre}</h2>
                            <p>{item.attributes.telefono}</p>
                            <p>{item.attributes.email}</p>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="separador"></div>
        </React.Fragment>
            );
    };

export default Directorio;

