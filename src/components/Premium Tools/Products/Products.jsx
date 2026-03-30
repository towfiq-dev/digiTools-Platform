import React, { use } from 'react';
import Product from './Product';


const Products = ({productsPromise, addCarts, setAddCarts}) => {
  const productsData = use(productsPromise)
  
  
  return (
    <section className='mx-auto max-w-310 mt-20'>
    
    <div className='grid grid-cols-3 gap-8'>
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