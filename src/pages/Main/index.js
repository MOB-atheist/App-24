import React, { Component } from 'react';
import api from '../../services/api';
import Carousel from "../.././components/Carousel";
import Banners from '../.././components/Banners';
import Cardflips from '../.././components/Cardflips';
import './styles.css';

export default class Main extends Component {
    
    
    // loadProducts = async (page = 1) => {
    //     const Response = await api.get(`/products?page=${page}`);
    // 
    //     const { docs, ...productInfo } = Response.data
    //     this.setState({ products: docs, productInfo, page });
    // };

    render() {
        return (
            <div>
                <Carousel />
                <Banners />
                <Cardflips />
                
            </div>   
        )
    }
}