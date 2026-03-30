import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Features = ({feature}) => {
  return (
    <div className='mb-2'>
      <span className='flex items-center gap-1.5'>
        <FaCheck className='text-green-500'></FaCheck>
        <p>{feature}</p>
        </span>
    </div>
  );
};

export default Features;