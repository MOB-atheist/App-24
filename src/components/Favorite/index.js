import React, { Component } from 'react';
import './styles.css';

export default class Favorite extends Component {
    constructor(props) {
        super(props)

        if( props.idUser === void(0) ) throw Error('idUser is undefined')
        if( typeof(props.idUser) !== "number" ) throw Error('idUser is not a number')

        if( props.idProduct === void(0) ) throw Error('idProduct is undefined')
        if( typeof(props.idProduct) !== 'number' ) throw Error('idProduct is not a number')
    }

    state = {
        favorite: false,
    }

    componentDidMount() {
        // todo load
    }
    
    toggleFavorite = () => {
        this.setState({
            favorite: !this.state.favorite
        })
    }

    isFavorite() {
        if ( this.state.favorite ) return 'favorite-selected'
    }

    render() {
        
        return (
            <span className="wish-icon" onClick={this.toggleFavorite}>
                <i className={`fa fa-heart-o ${this.isFavorite}`}></i>
            </span>
        )
    }
}