import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';           //imported styling from index.css 
import App from './components/App';  //imported App


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
