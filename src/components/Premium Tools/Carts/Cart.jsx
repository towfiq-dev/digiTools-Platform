import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({cart, addCarts, setAddCarts}) => {

  const handleDelete = (item) => {
  const filterArray = addCarts.filter(c=> c.id !== item.id)
  const confirmToast = ({ closeToast }) => (
    <div className="p-2">
      <p className="mb-3 font-semibold">Are you sure want to delete <span className='font-bold text-red-500'>{cart.name}</span> item?</p>
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          onClick={() => {
           setAddCarts(filterArray)
           toast.success('Your item has been successfully deleted');
            closeToast();
          }}
        >
          Yes
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          onClick={()=>{
          toast.error('Your item is Cancel')
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
    <button onClick={()=>handleDelete(cart)} className='btn text-red-500'>
      <MdDeleteOutline size={24}></MdDeleteOutline>
    </button>
    </div>
  );
};

export default Cart;