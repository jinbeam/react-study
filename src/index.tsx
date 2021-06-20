import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Container } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <header style={{textAlign: 'center', marginBottom: '20px'}}>
        스터디 산출물😃
    </header>
    <BrowserRouter>
      <Container maxWidth="lg">
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
