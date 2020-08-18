import React, { Component } from 'react';
import './styles.css';

export default class Banners extends Component {
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col center-banner b1">
                        <img className="img-fluid" src="assets/img/banner1.jpg" />
                    </div>
                    <div className="col center-banner b2">
                        <img className="img-fluid" src="assets/img/banner2.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}