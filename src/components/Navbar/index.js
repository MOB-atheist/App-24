import React, { Component } from 'react';
import './styles.css';
import Navitem from '../Navitem';

export default class Navbar extends Component {

    constructor(props){
        super(props)
    }

    render(){

        const { menus } = this.props
        
        // Se não receber nemhum prop chamado menus, retornar null, o react entende que não é pra ser renderizado nada
        if (typeof( menus ) === "undefined" ) return null;
        
        return (
            <div>
                <ul className="nav justify-content-center bottomnav">
                    {menus.map( menu => (
                        <li className="nav-item dropdown">
                            <Navitem menu={menu} />
                        </li>
                    ))}
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