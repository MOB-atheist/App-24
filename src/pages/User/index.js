import React, { Component } from 'react';
import './styles.css';

export default class User extends Component {
    constructor(props) {
        super(props)

        if ( props.idUser === void(0) ) throw Error('idUser is undefined');
        if ( typeof(props.idUser) !== 'number' ) throw Error('idUser is not a number');

        this.setState({
            idUser: this.props.idUser
        })

    }

    state = {
        idUser: 0,
        firstName: '',
        lastName: '',
    }
    
    componentDidMount() {
        var { firstName, lastName } = this.state 
        firstName = 'PABLO'
        lastName = 'JUSTINO'

        this.setState({
            firstName,
            lastName
        })
    }

    render() {
        const { firstName, lastName } = this.state

        return (
            <div>
                <span>Primeiro nome:{firstName}</span>
                <span>Ultimo nome:{lastName}</span>
            </div>
        )
    }
}