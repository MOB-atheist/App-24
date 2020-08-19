import React from 'react';
import './styles.css';
import Search from '../Search';
import Cart from '../Cart';
import Navbar from '../Navbar';

const Header = () => (
    <header>
		<div className="header">
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <div className="col-lg-2 text-center text-lg-left">
                        {/* <a href="./index.html" className="logo">
                            <img src="assets/img/logo.png" alt="">
                        </a> */}
                    </div>
                    <Search />
                    <Cart />
                </div>
            </div>
            <Navbar menus={[
                {menu: {
                    name:'inicio',
                    subitens: [
                        { name: 'teste', path: '/', isolated: false }
                    ]
                }},
                {menu: {
                    name:'Produtos',
                    subitens: [
                        { name: 'teste', path: '/products', isolated: false }
                    ]
                }},
                {menu: {
                    name:'teste',
                    subitens: [
                        { name: 'teste', path: '/', isolated: false }
                    ]
                }}
            ]}/>
        </div>
    </header>
)

export default Header