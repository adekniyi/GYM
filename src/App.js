import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Facilities from './Component/Facilities';
import AboutUs from './Component/AboutUs';
import Contact from './Component/Contact'
import Footer from './Component/Footer';

function App() {
  return (
   <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route path="/Facilities" component={Facilities}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/AboutUs" component={AboutUs}/>
      </Switch>
    <Footer/>
   </>
   
  );
}

export default App;
