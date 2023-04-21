import React, { useEffect, useState } from "react";
import SliderMeesage from './sliderMessage';
import axios from "axios";

const ServiciosForm = ()=>{

    const [servicio, setServicio] = useState([]);

    const [formData, setFormData] = useState({
        nombre: '',
        documento: '',
        telefono: '',
        email: '',
        direccion: '',
        asunto: '',
        observacion: ''
    });

    const GetList = () =>  {
        axios.get("http://localhost:1337/api/servicios?populate=*").then((value)=>{
        setServicio(value.data.data);
        });
    };

    useEffect(()=>{
        GetList();
    });


    function handleInputChange(event) {

        const { name, value } = event.target;
        
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData();
        data.append('files', formData.documentoUrl);

        axios.post('http://localhost:1337/api/solicitu-servicios',{data: formData})
        .then(response => {
            alert("Los datos han sido enviados correctamente");
            setFormData({
                nombre: '',
                documento: '',
                telefono: '',
                email: '',
                direccion: '',
                asunto: '',
                observacion: '',
                servicio: ''
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

        return(
        <React.Fragment>
            <SliderMeesage/>
            <div className="container presentarPqrds">
                    <h1>Servicio de Pagos</h1>
                    <hr></hr>
                    
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                        <p className="campoObligatorio pt-5">Los campos con * son obligatorios</p>
                            <form onSubmit={handleSubmit}> 
                            <div className="form-group col-12 indicadores-form mb-3">
                                <p className="m-0 p-0">Tipo de Persona</p>
                            </div>
                            <div className="d-flex">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault1"/>
                                    <label class="form-check-label">
                                        Natural
                                    </label>
                                </div>
                                <div class="form-check ps-5">
                                    <input class="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault1"  />
                                    <label class="form-check-label">
                                        Juridica
                                    </label>
                                </div>
                            </div>
                            <div className="row pt-4 indicadores-form">
                                <p className="">Natural</p>
                                <div className="form-group col-12 mt-2">
                                    <label>Tipo Documento <span>*</span></label>
                                    <select className="form-select form-select-sm"  name="tipo_solicitud"  value={formData.tipo_solicitud} onChange={handleInputChange} required>
                                        <option value="1">Cedula</option>
                                        <option value="1">Cedula</option>
                                        <option value="1">Cedula</option>
                                        <option value="1">Cedula</option>
                                        <option value="1">Cedula</option>
                                    </select>
                                </div>
                                <div className="form-group col-12 mt-2">
                                    <label>Nombres <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="nombres" value={formData.nombres} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 mt-2">
                                    <label>Apellidos <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="apellidos" value={formData.apellidos} onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="row pt-4 indicadores-form">
                                <p>Juridica</p>
                                <div className="form-group col-12 mt-2">
                                    <label>Nit <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="nombres" value={formData.nombres} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 mt-2">
                                    <label>Identificacion <span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" name="apellidos" value={formData.apellidos} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 mt-2">
                                    <label>Rut</label>
                                    <input type='file' className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="row pt-5">

                                <div className="form-group col-12 indicadores-form pb-4">
                                    <p className="m-0 p-0">Datos de Contacto</p>
                                </div>
                                <div className="form-group col-12 col-md-6 mt-3">
                                    <label>Telefono <span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" name="telefono" value={formData.telefono} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 col-md-6 mt-3">
                                    <label>Direccion <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="direccion" value={formData.direccion} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 col-md-6 mt-3">
                                    <label>Email <span>*</span></label>
                                    <input type="email" className="form-control form-control-sm" name="email" value={formData.email} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 col-md-6 mt-3">
                                    <label>Asunto <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="asunto" value={formData.asunto} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 col-md-12 mt-3">
                                    <label>Observacion <span>*</span></label>
                                    <textArea type="text" className="form-control form-control-sm" name="observacion" value={formData.observacion} onChange={handleInputChange}/>
                                </div>
                                <div className="form-group col-12 mt-3">
                                    <label>Seleccion Archivo</label>
                                    <input type='file' className="form-control form-control-sm"/>
                                </div>
                                <div class="mb-3 form-group col-12 pt-4">
                                    <input type="checkbox" class="form-check-input me-2" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Politica de tratamiento de datos personales</label>
                                </div>
                                <div className="col-3">
                                    <button type="submit" class="btn btn-dark">Enviar</button>
                                </div>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="separador"></div>
        </React.Fragment>
        );
    }

export default ServiciosForm;
