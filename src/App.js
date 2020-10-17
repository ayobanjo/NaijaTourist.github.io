import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />

    </div>
  
    
  );
}

export default App;