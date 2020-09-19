import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Instructors from './Component/Intructors';
import Facilities from './Component/Facilities';
import AboutUs from './Component/AboutUs';
import Contact from './Component/Contact'
import Footer from './Component/Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Header/>
    <Instructors/>
    <Facilities/>
    <AboutUs/>
    <Contact/>
    <Footer/>
   </>
   
  );
}

export default App;
