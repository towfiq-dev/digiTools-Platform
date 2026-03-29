import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import StatsSection from './components/StatsSection/StatsSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Footer></Footer>
    </div>
  );
};

export default App;
