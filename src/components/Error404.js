import { NavLink } from "react-router-dom";

const Error404 = () =>{
    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"400px"}}>
            <h3>Error 404</h3>
            <p>Pagina no encontrada</p>
            <NavLink className="btn btn-primary" to="home">Inicio</NavLink>
        </div>
    )
}

export default Error404