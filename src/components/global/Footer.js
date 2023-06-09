import React, { useEffect, useState } from "react";
import axios from "axios";
import footer from '../../assets/img/footer/logo-footer.png';
import { FaChevronRight,FaMapPin,FaAddressBook,FaWindowMaximize  } from "react-icons/fa";
import * as global from "../global.js";

const Footer = () =>{

    const [data, setData] = useState([]);

    const GetList = () =>  {
        axios.get(global.direccionAcceso+"/api/informacion-bomberos/1?populate=*/").then((value)=>{
            setData(value.data.data);
        });
    };

    useEffect(()=>{
        GetList();
    });

        return (
            <footer>
                <div className="contenido-footer">
                    <div className="box-footer">
                        <h1>NOS ENCUENTRAS EN:</h1>
                        <p><FaMapPin />{(data.length!==0)? data.attributes.direccion :" "  }</p>
                        <p><FaAddressBook /> {(data.length!==0)? data.attributes.email :" "  }</p>
                        <p><FaWindowMaximize /> {(data.length!==0)? data.attributes.celular :" "  }</p>
                    </div>
                    <div className="box-footer">
                        <h1>ENLACES DE INTERÉS</h1>
                        <a  target="t_blank" href="https://santander.gov.co/"><FaChevronRight  /> Gobernación de Santander</a>
                        <a  target="t_blank" href="https://www.lebrija-santander.gov.co/Paginas/default.aspx"> <FaChevronRight  /> Alcaldia de Lebrija</a>
                        <a  target="t_blank" href="https://dnbc.gov.co/"> <FaChevronRight  /> DNBC</a>
                        <a  target="t_blank" href="https://www.essa.com.co/site/"> <FaChevronRight  /> ESSA</a>
                        <a  target="t_blank" href="https://www.contraloria.gov.co/"> <FaChevronRight  /> Contraloria</a>
                    </div>
                    <div className="box-footer d-flex align-items-center">
                        <img src={footer} alt=""></img>
                    </div>
                </div>
            </footer>
        )
    }
export default Footer;