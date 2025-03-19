// import React from 'react';
// import { createRoot } from 'react-dom/client'; 
// import { Provider } from 'react-redux'; // Import the Provider
// import store from './store'; // Import your Redux store
// import App from './App'; 
// import './index.css';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // Wrap the App component with the Provider
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Import your Redux store
import App from './App'; 
import './index.css';
import './i18n'; // Import i18n configuration

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Wrap the App component with the Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
