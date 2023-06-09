import React, { useEffect, useState } from "react";
import axios from 'axios';
import img from '../assets/img/logo.png';
import * as global from "../components/global.js";

function SolicitarPqrds(){


    const [servicio, setServicio] = useState([]);
    const [file, setFile] = useState(null);

    
    const [formData, setFormData] = useState({
        nombre: '',
        documento: '',
        email: '',
        telefono: '',
        tipo_pqrd: '',
        asunto: '',
        observacion: '',
        documentoUrl: null
    });
    
    const GetList = () =>  {
        axios.get(global.direccionAcceso+"/api/tipo-pqrds?populate=*").then((value)=>{
        setServicio(value.data.data);
        });
    };

    useEffect(()=>{
        GetList();
    });

    const handleChange = (event) =>{
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    function handleInputChange(event) {

        const { name, value } = event.target;
        
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append('documentoUrl', file);

        try {
            await axios.post(global.direccionAcceso+'/api/pqrds',{formData}, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log('Solicitud enviada con éxito');
          } catch (error) {
            console.error('Error al enviar la solicitud', error);
          }

    }

    return(
        <React.Fragment>
        <div className="container presentarPqrds">
            <h1>Presentar Pqrds</h1>
            <hr></hr>
            <div className="info-presentarPqrds">
                <div className="mod-img">
                    <img src={img} width="100%" alt="Logo Bomberos"></img>
                </div>
                <div className="mod-info-pqrds">
                    <h3>Buzón de quejas, peticiones y reclamos</h3>
                    <p className="p-0 m-0"><strong >Apreciado ciudadano,</strong></p>
                    <p>La Ley 1437 de 2011 en su articulo 13 establece que "Toda actuación que inicie cualquier persona ante las autoridades implica el ejercicio del derecho de petición consagrado en el artículo 23 de la Constitución Política, sin que sea necesario invocarlo."</p>
                    <p>Recuerde que su petición estará sujeta a los términos interpuestos por la <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1755_2015.html">ley 1755 de 2015</a></p>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
                <div className="col-12 col-md-10 col-lg-8">   
                <p className="campoObligatorio mb-3">Los campos con * son obligatorios</p> 
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="form-group col-12 indicadores-form">
                            <p className="m-0 p-0">Tipo Solicitud</p>
                        </div>
                        <div className="col-12">
                            <div className="form-group col-12 col-md-6">
                                <label>Tipo Solicitud<span>*</span></label>
                                <select className="form-select form-select-sm" name="tipo_pqrd"  required value={formData.tipo_pqrd} onChange={handleInputChange}>
                                    {servicio.map((item)=>{
                                        return(
                                            <option value={(item.id)} key={item.id}>{item.attributes.nombre}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-12 indicadores-form">
                            <p className="m-0 p-0">Datos Personales</p>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Nombre <span>*</span></label>
                            <input type="text" className="form-control form-control-sm" name="nombre" required value={formData.nombre} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Documento <span>*</span></label>
                            <input type="number" className="form-control form-control-sm" name="documento" required value={formData.documento} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Email <span>*</span></label>
                            <input type="email" className="form-control form-control-sm" name="email" required value={formData.email} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Telefono <span>*</span></label>
                            <input type="number" className="form-control form-control-sm" name="telefono" required value={formData.telefono} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-12 indicadores-form">
                            <p className="m-0 p-0">Datos Pqrds</p>
                        </div>
                        <div className="form-group col-12">
                            <label>Asunto <span>*</span></label>
                            <input type="text" className="form-control form-control-sm" name="asunto" value={formData.asunto} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group col-12">
                            <label>Contenido <span>*</span></label>
                            <textarea className="form-control form-control-sm" name="observacion" value={formData.observacion} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <input onChange={handleChange} type='file' className="form-control form-control-sm" />
                        </div>
                        <div>
                        <button className="btn btn-dark" >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="separador"></div>
    </React.Fragment>
    )
}
export default SolicitarPqrds;