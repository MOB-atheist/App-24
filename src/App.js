import React from 'react';
import Routes from './routes';

import './styles.css';

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Banners from './components/Banners';
import Cardflips from './components/Cardflips';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Carousel />
    <Banners />
    <Cardflips />
    <Footer />
  </div>
)

export default App;