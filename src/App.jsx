import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import StatsSection from './components/StatsSection/StatsSection';
import Footer from './components/Footer/Footer';
import Workflow from './components/Workflow/Workflow';
import Steps from './components/Steps/Steps';
import Products from './components/Premium Tools/Products/Products';


const productsFetch = async()=>{
  const jsonRes = await fetch('products.json') 
  return jsonRes.json()
}
const App = () => {
  const productsPromise = productsFetch()
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Suspense>
      <Products 
      productsPromise ={productsPromise}
      ></Products>
      </Suspense>
      <Steps></Steps>
      <Workflow></Workflow>
      <Footer></Footer>
    </div>
  );
};

export default App;
