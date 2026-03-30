import React, { useState } from 'react';
import Features from './Features';
import { toast } from 'react-toastify';

const Product = ({productData, addCarts, setAddCarts}) => {
  const {name, image, description, price, period, tag, features} = productData
  const [isBuy, setIsBuy] = useState(false)
  const buyNow=()=>{
    setIsBuy(true)
    const isFound= addCarts.find(item=> item.id === productData.id)
    if (isFound) {
      {
        toast.error('This item already added')
      }
      return
    }
    toast.success(`${name} Add to Cart Successfully`)
    setAddCarts([...addCarts, productData])
  }
  return (
    <div className='bg-gray-100 rounded-xl py-5 px-3 space-y-4'>
      <div className='flex justify-between items-center'>
      <img className='w-10 h-10 ml-2 mt-2 rounded-full' src={image} alt=""/>
      <p className='border px-2 py-1.5 rounded-3xl .mt-\[-17px\]'>{tag}</p>
      </div>
      <h2 className='text-[20px] font-bold'>{name}</h2>
      <p className='text-gray-500'>{description}</p>
      <div className='flex'>
      <h3 className='text-[20px] font-bold'>${price}</h3>
      <p className='text-gray-500'>/{period}</p>
      </div>
      <div>
        {
          features.map((feature, index)=> <Features 
          feature={feature}
          key={index}
          ></Features>)
        }
      </div>
      <button 
      onClick={()=>buyNow()} 
      className={`btn w-full rounded-full 
      ${isBuy === false? 
      'bg-[linear-gradient(to_right,#4F39F6,#9514FA)]': 
      ''}`} 
      disabled={isBuy === true? true : false}>
      {isBuy === false? 'Buy Now': 'Added to cart'}
      </button>
    </div>
  );
};

export default Product;