import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaEye} from 'react-icons/fa';
import { NavLink,Link } from "react-router-dom";
import foto from "../../assets/img/inicio/loading.gif";
import * as global from "../global.js";

const Noticias = () =>{
    const [lista, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    
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

    function recortarTexto(text){
        let extraido=text.substring(0,200)
        extraido+="..."
        return extraido
    }

    return(
        <React.Fragment>
                <div className="separador">
                </div>
                <div className="enterate">
                    <div className="container">
                            <div className="box-enterate-contenido">
                                <div className="enterate-titulo">
                                    <p>Publicaciones en <br/><strong>nuestro Blog</strong></p>
                                    <div className="enterate-titulo-content">
                                        <p>Manténgase actualizado con nuestras más recientes publicaciones.</p>
                                        <Link to={"noticias"} className="button_enterate">Ver Mas</Link>
                                    </div>
                                </div>
                                {/*<div id="noticia"></div>*/}
                                <div className="noticias-inicio">
                                {lista.map((item, index) =>{
                                    if(index <=2){
                                        return (
                                            <a href={"VerNoticia/"+item.id} className="noticia-inicio" key={item.id}>
                                                <div className="noticia-inicio-contenido">
                                                    <div className="noticia-inicio-img">
                                                    <img  src={item.imgUrl} alt="contenido fallo" width="100%"></img>
                                                    </div>
                                                    <div className="noticia-contenido">
                                                        <h2>{item.titulo}</h2>
                                                        <h3>Fecha Publicación: {item.fecha}</h3>
                                                        <p className="limitado">{recortarTexto(item.descripcion)}</p>
                                                        <p className="btn-ver">Ver Mas</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }
                                    
                                })}
                                </div>
                                <div className="w-100 d-flex justify-content-center pt-5">
                                </div>
                            </div>
                    </div>

                </div>
            </React.Fragment >
                
            
    );
};
export default Noticias;