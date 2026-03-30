import React, { use } from 'react';
import Product from './Product';


const Products = ({productsPromise}) => {
  const productsData = use(productsPromise)
  return (
    <div className='grid grid-cols-3 gap-8 mx-auto max-w-310'>
    {
      productsData.map(productData=> <Product 
      productData ={productData}
      key={productData.id}
      ></Product>)
    }
    </div>
  );
};

export default Products;