import React, { useEffect, useState } from "react";
import axios from "axios";
import * as global from "../global.js";

const Slider = () =>{
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        const url = process.env.REACT_APP_SLIDER
        axios.get(url).then(response=>{
            setLista(response.data);
        }).catch(error =>{
          console.log("Error al obtener la data: ", error);
        });
    },[]);

    return(
        <React.Fragment>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    
                    {lista.map((item, key) =>{
                        var secuencia = "carousel-item";
                        if(key===0){
                            secuencia = "carousel-item active";
                        }else{
                            secuencia = "carousel-item";
                        }
                        return (
                        <div className={secuencia} key={item.id}>
                            <img src={item.img} alt="Slider bomberos"></img>
                        </div>
                        )
                    })}
                    
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div className="capa-slider-inicio">
                </div>
                </div>
                
            </React.Fragment >
    );
};
export default Slider;