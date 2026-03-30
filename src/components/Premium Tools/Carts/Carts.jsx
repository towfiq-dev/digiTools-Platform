import React from 'react';
import Cart from './Cart';

const Carts = ({addCarts, setAddCarts}) => {
  return (
    <div className='max-w-310 mx-auto'>
      
      <div className='bg-gray-200 p-3 rounded-2xl'>
      <h2 className='text-[20px] font-bold mb-5'>Your Cart</h2>
      <div>
      {
        addCarts.map((cart, index)=> <Cart 
        cart = {cart}
        key ={index}
        ></Cart>)
      }
      </div>
      <div>
      <p>Total</p>
      <button className='btn w-full rounded-full'>
      Proceed To CheckOut
      </button>
      </div>
      </div>
    </div>
  );
};

export default Carts;