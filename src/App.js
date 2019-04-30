import React from 'react';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header headerTitle="Simple chuchu portfolio website" />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
