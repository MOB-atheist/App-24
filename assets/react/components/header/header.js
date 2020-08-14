import React, { Component } from 'react';
import Header from './header.rt';

export class header extends Component{
    render() {
        return React.createClass({
            displayName: 'Header',
            render: Header
        })
    }
}