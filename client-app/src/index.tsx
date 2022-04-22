import React from 'react';
import ReactDOM from 'react-dom';

import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.css'
import { store, StoreContext } from './app/stores/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);

reportWebVitals();
