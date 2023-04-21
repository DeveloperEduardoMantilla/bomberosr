import React, { useEffect, useState } from "react";
import axios from "axios";
import foto from "../../assets/img/inicio/loading.gif";
import * as global from "../global.js";

const Conozcanos =() => {
    const [data, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const GetList = () =>  {
        axios.get("http://"+global.direccionAcceso+":1337/api/modulo-inicios?populate=*").then((value)=>{
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

    return (
        <React.Fragment>
            <div className="info-destacada">
                    {data.map((item) =>{
                        return(
                        <div className="box-info-destacada pt-4 pb-4" key={item.id}>
                            <div className="box-info-descatada-md">
                                <h1>{item.attributes.titulo}</h1>
                                <p className="box-info-text">{item.attributes.descripcion}</p>
                            </div>
                            <div className="box-info-descatada-md">
                                <img src={"http://"+global.direccionAcceso+":1337"+item.attributes.img.data[0].attributes.url} alt=""></img>
                            </div>
                        </div>)
                    })}
            </div>
        </React.Fragment>
    );
}

export default Conozcanos;
