import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/v1/';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
