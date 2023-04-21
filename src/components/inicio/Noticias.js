import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaEye} from 'react-icons/fa';
import { NavLink,Link } from "react-router-dom";
import foto from "../../assets/img/inicio/loading.gif";

const Noticias = () =>{
    const [lista, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    
    const GetList = () =>  {
        setIsLoading(false);
        axios.get("http://localhost:1337/api/noticias?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
        setIsLoading(false);
    });
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
                                                    <img  src={"http://localhost:1337"+item.attributes.img.data[0].attributes.url} alt="contenido fallo" width="100%"></img>
                                                    </div>
                                                    <div className="noticia-contenido">
                                                        <h2>{item.attributes.titulo}</h2>
                                                        <h3>Fecha Publicación: {item.attributes.fecha}</h3>
                                                        <p className="limitado">{recortarTexto(item.attributes.descripcion)}</p>
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