import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import "leaflet/dist/leaflet.css";
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './i18n';

import { Provider } from 'react-redux';
import { configureStore } from './Redux/store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={configureStore()}>
    <App />
  </Provider>
  /* </React.StrictMode>, */,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
