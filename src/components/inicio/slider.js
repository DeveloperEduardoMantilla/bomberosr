import React, { useEffect, useState } from "react";
import axios from "axios";
import * as global from "../global.js";

const Slider = () =>{
    const [lista, setLista] = useState([]);
    
    const GetList = () =>  {
        axios.get(global.direccionAcceso+"/api/sliders?populate=*").then((value)=>{
        setLista(value.data.data);
        });
    };
    
    useEffect(()=>{
        GetList();
    });

    return(
        <React.Fragment>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {lista.map((item, key) =>{
                        var secuencia = "carousel-item";
                        if(key==1){
                            secuencia = "carousel-item active";
                        }else{
                            secuencia = "carousel-item";
                        }
                        return (
                        <div className={secuencia} key={item.id}>
                            <img src={global.direccionAcceso+item.attributes.sliderImg.data[0].attributes.url} className=""></img>
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