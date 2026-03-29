import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import StatsSection from './components/StatsSection/StatsSection';
import Footer from './components/Footer/Footer';
import Workflow from './components/Workflow/Workflow';
import Steps from './components/Steps/Steps';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Steps></Steps>
      <Workflow></Workflow>
      <Footer></Footer>
    </div>
  );
};

export default App;
