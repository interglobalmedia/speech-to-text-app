import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';
import './favicon.ico';

ReactDOM.render(<App />, document.getElementById('app'));
console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
