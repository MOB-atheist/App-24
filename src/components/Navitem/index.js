import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './styles.css';

function Divider({ isolated }) {
    if(isolated) return <div className="dropdown-divider"></div>; else return ''
}


const Item = class Item extends Component {
    constructor (props) {
        super(props)
    }
    render (){
        const { name, isolated, path } = this.props.item
        return (
            <span>
                <Divider isolated={isolated} />
                <BrowserRouter>
                    <Link className="dropdown-item" to={`${path}`} >{name}</Link>
                </BrowserRouter>
            </span>
        )
    }
}

export default class Navitem extends Component {
    constructor(props){
        
        super(props)
        if(typeof(props.name) === "undefined") return;
        if(typeof(props.subitens) === "undefined") return;
        
    }

    render() {
        const { menu } = this.props.menu;
        console.log(this.props.menu);
        return (
            <span>
                <button className="nav-link dropdown-toggle btnbottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {menu.name}
                </button>
                <div className="dropdown-menu">
                    {menu.subitens.map( item => (
                        <Item item={item} />
                    ))}
                </div>
            </span>
        )
    }
}