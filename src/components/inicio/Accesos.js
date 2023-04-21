import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import Direcotorio from '../../assets/img/inicio/acceso1.svg';
import Noticias from '../../assets/img/inicio/acceso2.png';
import Pqrds from '../../assets/img/inicio/acceso3.svg';
import Normatividad from '../../assets/img/inicio/acceso4.svg';

class Accesos extends Component {

    render() {
        return(
            <React.Fragment>
                <div className="accesos-rapidos">
                    <div className="container">
                        <div className="box-accesos-rapidos">
                            <NavLink to="directorio" className="box-accesos">
                                <img src={Direcotorio} alt="DIRECTORIO"></img>
                                <h1>Directorio</h1>
                            </NavLink>
                            <NavLink to="noticias" className="box-accesos">
                                <img src={Noticias} alt="NOTICIAS"></img>
                                <h1>Noticias</h1>
                            </NavLink>
                            <NavLink to="pqrds" className="box-accesos">
                                <img src={Pqrds} alt="PQRDS"></img>
                                <h1>Pqrds</h1>
                            </NavLink>
                            <NavLink to="normatividad" className="box-accesos">
                                <img src={Normatividad} alt="TRANSPARENCIA Y ACCESO A LA INFORMACION"></img>
                                <h1>Normatividad</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Accesos;
