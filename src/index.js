import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const container = document.getElementById('root');

// Create a root using createRoot
// const root = ReactDOM.createRoot(container);


root.render(
  <Provider store={store}>

    <App />
  </Provider>
);

