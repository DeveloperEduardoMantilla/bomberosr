import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Noticias from './components/Noticias';
import Emergencias from './components/Emergencias';
import Contacto from './components/Contacto';
import Pqrds from './components/Pqrds';
import ServiciosForm from './components/ServiciosForm';
import Directorio from './components/Directorio';
import Normatividad from './components/Normatividad';
import VerNoticia from './components/VerNoticia';
import ConsultarPqrds from './components/ConsultarPqrds';
import SolicitarPqrds from './components/SolicitarPqrds';
import Error404 from './components/Error404';
import PagosForm from "./components/pagosForm.js";
import data from "./components/global/data.js";

const Router = () =>{
        return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/home" component={Inicio}/>
                <Route exact path="/servicios" component={Servicios}/>
                <Route exact path="/Noticias" component={Noticias}/>
                <Route exact path="/Emergencias" component={Emergencias}/>
                <Route exact path="/Contacto" component={Contacto}/>
                <Route exact path="/Pqrds" component={Pqrds}/>
                <Route exact path="/serviciosForm" component={ServiciosForm}/>
                <Route exact path="/pagosForm" component={PagosForm}/>
                <Route exact path="/Directorio" component={Directorio}/>
                <Route exact path="/Normatividad" component={Normatividad}/>
                <Route exact path="/VerNoticia/:id" component={VerNoticia}/>
                <Route exact path="/ConsultarPqrds" component={ConsultarPqrds}/>
                <Route exact path="/SolicitarPqrds" component={SolicitarPqrds}/>
                <Route exact path="/data" component={data}/>
                <Route exact path="/" component={Inicio}/>
                <Route path="*" component={Error404}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        );
    }

export default Router;
