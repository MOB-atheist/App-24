import React, { Component } from 'react';
import './styles.css';

export default class Cart extends Component {
    render() {
        return(
            <div className="col-xl-4 col-lg-5">
            {/* Area carrinho */}
                <div className="right">
                    <div className="navitem">
                        <i className="fas fa-user-circle"></i>
                        <a href="#">Entrar</a> ou <a href="#">Criar uma conta</a>
                    </div>
                    <div className="navitem">
                        <div className="shoppingbag">
                            <i className="fas fa-shopping-bag"></i>
                            <span>0</span>
                        </div>
                        <a href="#">Carrinho</a>
                    </div>
                </div>
            </div>
        )
    }
}