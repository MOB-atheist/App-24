import React, { Component } from 'react';
import './style.css';

export default class Carousel extends Component {
    render(){
        return (
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                            {/* Carousel indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>   
                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/1.jpeg" className="img-fluid" alt="" />								
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Restaurantes</h4>									
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/2.jpeg" className="img-fluid" alt="Headphone" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Farmacias</h4>									
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>		
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/3.jpeg" className="img-fluid" alt="Macbook" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Vestuario</h4>									
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>								
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/4.jpeg" className="img-fluid" alt="Nikon" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Serviços</h4>									
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item carousel-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/5.jpeg" className="img-fluid" alt="Play Station" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Bebidas</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/6.jpeg" className="img-fluid" alt="Macbook" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Serviços</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/7.jpeg" className="img-fluid" alt="Speaker" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Tecnologia</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/8.jpeg" className="img-fluid" alt="Galaxy" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Joias e Relogios</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>						
                                    </div>
                                </div>
                                <div className="item carousel-item">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/9.jpeg" className="img-fluid" alt="iPhone" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Ferramentas</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/10.jpeg" className="img-fluid" alt="Canon" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Acessorios</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/1.jpeg" className="img-fluid" alt="Pixel" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Construção</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>	
                                        <div className="col-sm-3">
                                            <div className="thumb-wrapper">
                                                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                                                <div className="img-box">
                                                    <img src="assets/img/2.jpeg" className="img-fluid" alt="Watch" />
                                                </div>
                                                <div className="thumb-content">
                                                    <h4>Calçados</h4>
                                                    {/* <a href="#" className="btn btn-primary">Acessar</a> */}
                                                </div>						
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Carousel controls */}
                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}