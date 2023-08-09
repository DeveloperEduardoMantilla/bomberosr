import React, { useEffect, useState } from "react";
import axios from "axios";
import foto from "../../assets/img/inicio/loading.gif";
import * as global from "../global.js";

const Conozcanos =() => {
    const [isLoading, setIsLoading] = useState(true); 
    const [lista, setLista] = useState([]);

    useEffect(()=>{
        const url = process.env.REACT_APP_MODULO_INICIO
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

    return (
        <React.Fragment>
            <div className="info-destacada">
                    {lista.map((item,key) =>{
                        return(
                        <div className="box-info-destacada pt-4 pb-4" key={item.id}>
                            <div className="box-info-descatada-md">
                                <h1>{item.titulo}</h1>
                                <p className="box-info-text">{item.descripcion}</p>
                            </div>
                            <div className="box-info-descatada-md">
                                <img src={item.img} alt=""></img>
                            </div>
                        </div>)
                    })}
            </div>
        </React.Fragment>
    );
}

export default Conozcanos;
