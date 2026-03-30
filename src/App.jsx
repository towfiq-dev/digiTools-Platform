import React, { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import StatsSection from './components/StatsSection/StatsSection';
import Footer from './components/Footer/Footer';
import Workflow from './components/Workflow/Workflow';
import Steps from './components/Steps/Steps';
import Products from './components/Premium Tools/Products/Products';
import Carts from './components/Premium Tools/Carts/Carts';
import Cards from './components/PricingCards/Cards/Cards';


const productsFetch = async()=>{
  const jsonRes = await fetch('products.json') 
  return jsonRes.json()
}

const cardsFetch = async()=>{
  const cardsRes = await fetch('pricing.json')
  return cardsRes.json()
}
const App = () => {
  const productsPromise = productsFetch()
  const cardsPromise = cardsFetch()
  const [activeBtn, setActiveBtn] = useState(false)
  const toolBtn = (status) => {
  setActiveBtn(status);
};
const [addCarts, setAddCarts] = useState([])

  return (
    <div fallback={<span className="loading loading-bars loading-xl duration-3000"></span>}>
      <Navbar 
      addCarts= {addCarts}
      setAddCarts = {setAddCarts}
      ></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
    <div className='text-center space-y-6 mb-10 mt-15'>
    <div className='w-130 inline-block justify-center space-y-1.5'>
    <h1 className='text-[35px] font-bold'>Premium Digital Tools</h1>
    <p className='text-gray-400'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
    </div>
    <div className='flex justify-center gap-5 rounded-full'>
  <button 
    onClick={() => toolBtn(false)} 
    className={`btn rounded-full ${!activeBtn ? 
      'bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white' 
      : 'bg-gray-200'}`}
  >
    Products
  </button>

  <button 
    onClick={() => toolBtn(true)} 
    className={`btn rounded-full ${activeBtn ? 
      'bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white' 
      : 'bg-gray-200'}`}
  >
    Cart {addCarts.length}
  </button>
  </div>
    </div>
      {
        activeBtn === false?
        <Suspense 
        fallback={<span className="loading loading-bars loading-xl"></span>}
        >
      <Products 
      productsPromise ={productsPromise}
      addCarts= {addCarts}
      setAddCarts = {setAddCarts}
      ></Products>
      </Suspense>
      :
      <Carts 
      addCarts= {addCarts}
      setAddCarts = {setAddCarts}
      ></Carts>
      }
      
      <Steps></Steps>
      <Suspense>
      <Cards 
      cardsPromise ={cardsPromise}
      ></Cards>
      </Suspense>
      <Workflow></Workflow>
      <Footer></Footer>
    </div>
  );
};
export default App;
