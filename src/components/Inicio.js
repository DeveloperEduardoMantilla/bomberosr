import React, {Component} from 'react';
import Slider from './inicio/slider';
import Accesos from './inicio/Accesos';
import Conozcanos from './inicio/Conozcanos';
import Invitacion from './inicio/Invitacion';
import Noticias from './inicio/Noticias';
import Preguntas from './inicio/Preguntas';

class Router extends Component {

    render() {
       
        return(
        <React.Fragment>
            <Slider/>
            <Accesos/>
            <Conozcanos/>
            <Invitacion/>
            <Noticias/>

        </React.Fragment>
        );
    }
}

export default Router;
