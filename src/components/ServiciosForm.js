import React, { useEffect, useState } from "react";
import SliderMeesage from './sliderMessage';
import axios from "axios";
import Swal from 'sweetalert2'

const ServiciosForm = ()=>{

    const Swal = require('sweetalert2')

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
            Swal.fire({
                title: `Solicitud enviada con exito!`,
                timer: 3000,
                icon: 'success',
                position: 'bottom-end',
                showConfirmButton: false,
                timerProgressBar: true,
                toast: true
    
            })
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
                    <h1>Servicios</h1>
                    <hr></hr>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className="col-12 col-md-10 col-lg-8 "> 
                        <p className="campoObligatorio">Los campos con * son obligatorios</p>
                            <form  onSubmit={handleSubmit}>
                            <div className="form-group col-12 indicadores-form mb-4">
                                <p className="m-0 p-0">Tipo de Servicio</p>
                            </div> 
                                <div className='col-sm-12 col-md-4'>
                                    <label>Seleccione el servicio</label>
                                    
                                    <select className="form-select form-select-sm"  name="servicio" required value={formData.servicio} onChange={handleInputChange}>
                                        <option selected>Seleccione</option>
                                        {servicio.map((item)=>{
                                            return(
                                                <option value={(item.id)} key={item.id}>{item.attributes.titulo}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-12 indicadores-form mt-3 mb-3">
                                    <p className="m-0 p-0">Datos Personales</p>
                                </div> 
                                <div className="row">
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Nombre <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="nombre" required value={formData.nombre} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Documento <span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" required name="documento" value={formData.documento} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Telefono<span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" required name="telefono" value={formData.telefono} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Email<span>*</span></label>
                                    <input type="email" className="form-control form-control-sm" name="email" required value={formData.email} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Direccion<span>*</span></label>
                                    <input type="address" className="form-control form-control-sm" name="direccion" required value={formData.direccion} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Asunto<span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" required name="asunto" value={formData.asunto} onChange={handleInputChange}/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Observacion<span>*</span></label>
                                    <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" name="observacion" rows="3" value={formData.observacion} onChange={handleInputChange}></textarea>
                                </div>
                                <div className="col-12 pt-3">
                                    <button className="btn btn-dark" type="submit">Enviar</button>
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
