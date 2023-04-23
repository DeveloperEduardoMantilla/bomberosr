import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import foto from "../assets/img/inicio/loading.gif";
import * as global from "../components/global.js";

const VerNoticia = () =>{
    const [isLoading, setIsLoading] = useState(true); 
    const [noticia, setNoticia] = useState({});
 
    let params = useParams();
    var ruta = global.direccionAcceso+"/api/noticias/"+params.id+"?populate=*";
 
    useEffect(()=>{
        axios.get(ruta).then(value=>{
            setNoticia(value.data.data);
            setIsLoading(false);
        }).catch(error =>{
            console.log(error);
        });
    },[]);
    
    if (isLoading) {
        return (
        <div className="container d-flex justify-content-center">
            <img src={foto} style={{maxWidth:"100px", padding:"100px 0"}}></img>
        </div>);
    }

    return(
        <div className="verNoticia-content">
            <div className="container">
                <div className="contenido-noticia">
                    <h1>{noticia.attributes.titulo}</h1>
                    <h2> Noticia | {noticia.attributes.fecha} | Bomberos de Lebrija</h2>
                    <img src={global.direccionAcceso+noticia.attributes.img.data[0].attributes.url} style={{maxWidth:'400px'}} />
                    <p>{noticia.attributes.descripcion}</p>    
                </div>
            </div>
        </div>
    );
}
export default VerNoticia;

