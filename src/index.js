import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp({
  apiKey: 'AIzaSyBDbw_nROCHJQ_I8R1sV5lpr88isg13OWY',
  authDomain: 'github-app-81cae.firebaseapp.com',
  projectId: 'github-app-81cae',
  storageBucket: 'github-app-81cae.appspot.com',
  messagingSenderId: '179824244956',
  appId: '1:179824244956:web:f778e33a9fe4ce8584dc19',
  measurementId: 'G-NQCGPBGDT9',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
