import React, { Component } from 'react';
import Carousel from './carousel.rt';


export class Carousel extends Component{
    render() {
        return React.createClass({
            displayName: 'Carousel',
            render: Carousel
        });
    }
}