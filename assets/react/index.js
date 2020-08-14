import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

var elem = React.createElement(App);
render(elem, document.getElementById('container'));