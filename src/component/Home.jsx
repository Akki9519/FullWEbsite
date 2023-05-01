import React from 'react';
import Header from  './Header';
import DemoCarousel from './DemoCarousel';
import Footer from './Footer';
import Card from './Card';
import Feature from './Feature';
import About from './About';


function Home() {
  return (
    <>
    <Header/>
    <DemoCarousel/>
    <About/>
    <Feature/>
   
    <Feature/>
    <Card/>
    <Footer/>
    </>
  )
}

export default Home;