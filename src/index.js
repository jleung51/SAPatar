import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App/> , wrapper): false;