import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink,Link } from "react-router-dom";
import foto from "../assets/img/inicio/loading.gif"
import { padding } from "@mui/system";
import * as global from "../components/global.js";

const Noticias = ()  =>{
    const [isLoading, setIsLoading] = useState(true); 
    
    const [lista, setLista] = useState([]);

    useEffect(()=>{
        const url = process.env.REACT_APP_NOTICIA
        axios.get(url).then(response=>{
            setLista(response.data);
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
        <div>
        <div className="separador"></div>
            <div className="container">
                <div className="pag-noticias">
                    <div className="d-flex align-items-center flex-wrap justify-content-center">
                        <h1> <strong>Publicaciones</strong><br/>en nuestro Blog</h1>
                        <p>Manténgase actualizado con nuestras más recientes publicaciones.</p>
                    </div>
                    <hr></hr>
                    {lista.map((item) =>{
                        return (
                            <a href={"verNoticia/"+item.id} className="pag-noticias-box" key={item.id}>
                                <div className="pag-img">
                                    <img src={item.imgUrl} alt=""></img>
                                </div>
                                <div className="pag-noticia">
                                    <h1>{item.titulo}</h1>
                                    <p>{item.fecha}</p>
                                    <p>{item.descripcion}</p>
                                    <p className="btn-ver">Ver Mas</p>
                                </div>
                            </a>
                            )
                    })}
                </div>
            </div>
        <div className="separador"></div>
        </div>
        );
    };

export default Noticias;