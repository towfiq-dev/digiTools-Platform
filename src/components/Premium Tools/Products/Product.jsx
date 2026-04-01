import React, { useState } from 'react';
import Features from './Features';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
const Product = ({productData, addCarts, setAddCarts}) => {
  const {name, image, description, price, period, tag, features, tagType} = productData
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
    <div className='bg-gray-100 rounded-xl py-5 px-3 space-y-4 transition duration-300 transform hover:scale-100 hover:rotate-2'>
      <div className='flex justify-between items-start'>
      <img className='w-13 h-13 ml-2 mt-2 rounded-full' src={image} alt=""/>
      <p className={`border px-2 py-1.5 font-bold rounded-3xl w-25 text-center -mt-3 
        ${tagType === 'best seller'? 'bg-[#FEF3C6]' : 
        tagType === 'popular'? 'bg-blue-200' : 
        'bg-green-200'}
        ${tagType === 'best seller'? 'text-[#BB4D00]' : 
        tagType === 'popular'? 'text-[#9514FA]' : 
        'text-green-600'}
        `}>{tag}</p>
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
      {isBuy === false? 
      'Buy Now': 
      <span className='flex items-center gap-1'>
      <FaCheck className='text-green-500'></FaCheck>Added to cart  
      </span>}
      </button>
    </div>
  );
};
export default Product;