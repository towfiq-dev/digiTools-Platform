import React, { use } from 'react';
import Product from './Product';


const Products = ({productsPromise, addCarts, setAddCarts}) => {
  const productsData = use(productsPromise)
  
  return (
    <section className='mx-auto max-w-7xl px-4 mt-10 md:mt-20'>
    
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
      productsData.map(productData=> <Product 
      productData ={productData}
      key={productData.id}
      addCarts= {addCarts}
      setAddCarts = {setAddCarts}
      ></Product>)
    }
    </div>
    </section>
  );
};

export default Products;