import React, { useEffect, useState } from "react";
import axios from "axios";
import {FaAngleDoubleRight} from 'react-icons/fa';
import foto from "../../assets/img/inicio/loading.gif"

const Preguntas = () =>{
    const [listaPreguntas, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const GetList = () =>  {
        axios.get("http://localhost:1337/api/preguntas-frecuentes").then((value)=>{
        setLista(value.data.data);
        setIsLoading(false);
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

    return(
        <React.Fragment>
                <div className="separador"></div>
                <div className="container">
                <div className="pregFrecuentes">
                        {listaPreguntas.map((itemPreguntas) =>{
                            return (
                            <div className="pregFrecuente" key={itemPreguntas.id}>
                               <h2><FaAngleDoubleRight/> {itemPreguntas.attributes.titulo}</h2>
                               <p>{itemPreguntas.attributes.contenido}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="separador"></div>
        </React.Fragment >
    );
};
export default Preguntas;