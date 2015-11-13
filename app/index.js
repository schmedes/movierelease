require('./styles/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/app.jsx';

const root = document.querySelector('.root');
ReactDOM.render(<App/>, root);
