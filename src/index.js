import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalStyle} from './styles/StylesGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
