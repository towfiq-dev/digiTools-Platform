import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const Cart = ({cart}) => {
  const {name, image, price} =cart
  return (
    <div className='flex justify-between items-center bg-[#F9FAFC] mb-6 p-3 rounded-xl'>
    <div className='flex gap-2'>
      <img className='w-10 rounded-full' src={image} alt="" />
    <div>
    <h2 className='text-black font-bold'>{name}</h2>
    <h3 className='text-gray-500'>${price}</h3>
    </div>
    </div>
    <button className='btn text-red-500'>
      <MdDeleteOutline size={24}></MdDeleteOutline>
    </button>
    </div>
  );
};

export default Cart;