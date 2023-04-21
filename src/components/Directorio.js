import React, { useEffect, useState } from "react";
import axios from "axios";
import testimonial1 from "../assets/img/contacto/testimonial-1.jpg";
import * as global from "./global.js";

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
        <div className="d-flex justify-content-center">
            <div id="carouselDirectorio" className="carousel carousel-dark slide col-12 " data-bs-ride="carousel">
                <div className="carousel-inner carousel_inner_directorio ">
                    {
                        lista.map((item,key)=>{
                            
                            var secuencia="carousel-item";
                            var fotografia="../assets/img/contacto/testimonial-1.jpg";
                            if(key==1){
                                secuencia="carousel-item active";
                            }else{
                                secuencia="carousel-item";
                            }
                            console.log();
                            if(item.attributes.foto.data!=null){
                                fotografia="http://"+global.direccionAcceso+":1337"+item.attributes.foto.data[0].attributes.url;
                            }

                            return(
                                <div className={secuencia} key={item.id}>
                                    <div className="d-flex justify-content-center">
                                        <div className="directorio_contact_info col-10">
                                            <div className="col-12 col-md-4 img-contact">
                                                <img src={fotografia}/>
                                            </div>
                                            <div className="col-12 col-md-6 info-contact">
                                                <h5>{item.attributes.nombre}</h5>
                                                <h4>{item.attributes.rol_bombero.data.attributes.nombre}</h4>
                                                <p>{item.attributes.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselDirectorio" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselDirectorio" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="separador"></div>
        </React.Fragment>
            );
    };

export default Directorio;

