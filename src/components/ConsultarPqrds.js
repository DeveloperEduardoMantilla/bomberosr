import React, { Component } from 'react';

class ConsultarPqrds extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="separador"></div>
                <div className="container">
                    <div className="consultarPqrds">
                        <h1>Consultar Pqrds</h1>
                        <form action="">
                            <div className="forn-group">
                                <label>Numero Radicado</label>
                                <input type="text" className="form-control"></input>
                                    <button type="submit" className="btn">Consultar</button>
                            </div>
                        </form>
                        <br></br>
                            <table className="table table-bordered table-hover tablas">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Id</th>
                                        <th>Radicado</th>
                                        <th>Asunto</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                    </div>
                </div>

                <div className="separador"></div>
            </React.Fragment>
        );
    }
}

export default ConsultarPqrds;
