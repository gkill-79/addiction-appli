// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from "./Signup";
import Signin from "./Signin";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
        <h1>Welcome to our app</h1>
        <Signup />
        <Signin />
      </div>
      <Router>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
