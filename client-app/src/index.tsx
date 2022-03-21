import React from 'react';
import ReactDOM from 'react-dom';

import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
