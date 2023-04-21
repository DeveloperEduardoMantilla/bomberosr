import React, {Component} from 'react';
import footer from '../../assets/img/footer/logo-footer.png';
import { FaChevronRight,FaMapPin,FaAddressBook,FaWindowMaximize  } from "react-icons/fa";

class Header extends Component {

    render() {
        return (
            <footer>
                <div className="contenido-footer">
                    <div className="box-footer">
                        <h1>NOS ENCUENTRAS EN:</h1>
                        <p><FaMapPin /> Calle 8 No 9 - 45, Lebrija(Sder), Colombia</p>
                        <p><FaAddressBook /> 316 350 4746 - 037 656 7884</p>
                        <p><FaWindowMaximize /> bomberoslebrija@hotmail.com</p>
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
}

export default Header;