import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';
import Empty from '../../../assets/image.png'


const Carts = ({addCarts, setAddCarts}) => {
  const totalPrice = addCarts.reduce((sum, item)=>{
  return(sum + item.price)
}, 0)

  const handlePayment = () => {
  const confirmToast = ({ closeToast }) => (
    <div className="p-2">
      <p className="mb-3 font-semibold">Do you want to make the payment?</p>
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-3 py-1 cursor-pointer rounded text-sm"
          onClick={() => {
            setAddCarts([]);
            toast.success('Your Payment is Successfully done');
            closeToast();
          }}
        >
          Yes
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded text-sm"
          onClick={()=>{
          toast.error('Your Payment is Cancel')
          closeToast();
          }}
          
        >
          No
        </button>
      </div>
    </div>
  );

  toast.info(confirmToast, {
    position: "top-center",
    autoClose: false,
    closeOnClick: false,
    draggable: false,
  });
};

  return (
    <div className='max-w-310 mx-auto'>
      
      <div className='bg-gray-200 p-3 rounded-2xl'>
      {
        addCarts.length === 0?
        ''
        :
        <h2 className='text-[20px] font-bold mb-5'>Your Cart</h2>
      }
      <div>
      {
        addCarts.map((cart, index)=> <Cart 
        cart = {cart}
        key ={index}
        addCarts={addCarts} 
        setAddCarts={setAddCarts}
        ></Cart>)
      }
      </div>
      {
        addCarts.length === 0? 
        <div className='grid text-center justify-center items-center'>
          <img className='w-40 h-auto ml-23' src={Empty} alt="" />
        <h2 className='text-4xl font-bold mb-1.5'>Your Cart is Empty</h2>
        <p>Add to Cart our products and start your subscription.</p>
        </div>
        :
        <div>
      <div className='flex justify-between items-center bg-amber-100 py-2 px-3 rounded-xl mb-3 font-bold'>
      <p className='text-[20px]'>Total</p>
      <span className='text-2xl'>${totalPrice}</span>
      </div>
      <button onClick={()=>handlePayment()} className='btn w-full rounded-full bg-[linear-gradient(to_right,#4F39F6,#9514FA)]'>
      Proceed To CheckOut
      </button>
      </div>
      }
      </div>
    </div>
  );
};

export default Carts;