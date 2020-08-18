import React, { Component } from 'react';
import './styles.css';

export default class Navbar extends Component {
    render(){
        return (
            <div>
                <ul className="nav justify-content-center bottomnav">
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Restaurantes</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item">Ação</a>
                            <a className="dropdown-item">Outra ação</a>
                            <a className="dropdown-item">Algo mais aqui</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item">Link isolado</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Medicamentos</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item">Ação</a>
                            <a className="dropdown-item">Outra ação</a>
                            <a className="dropdown-item">Algo mais aqui</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item">Link isolado</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vestuario</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item">Ação</a>
                        <a className="dropdown-item">Outra ação</a>
                        <a className="dropdown-item">Algo mais aqui</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Link isolado</a>
                    </div>
                    </li>
                    <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Serviços</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item">Ação</a>
                        <a className="dropdown-item">Outra ação</a>
                        <a className="dropdown-item">Algo mais aqui</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Link isolado</a>
                    </div>
                    </li>
                </ul>
                <ul className="nav justify-content-center bottomnav bottomnavsmall">
                    <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item">Restaurantes</a>
                        <a className="dropdown-item">Medicamentos</a>
                        <a className="dropdown-item">Vestuario</a>
                        <a className="dropdown-item">Serviços</a>
                    </div>
                    </li>
                </ul>
            </div>
        );
    }
}