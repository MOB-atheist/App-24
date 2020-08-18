import React, { Component } from 'react';
import './styles.css';

export default class Search extends Component {
    render() {
        return(
            <div className="col-xl-6 col-lg-5">
                {/* Barra de pesquisa */}
                <form className="searchbar">
                    <input type="text" placeholder="Pesquisar...." />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}