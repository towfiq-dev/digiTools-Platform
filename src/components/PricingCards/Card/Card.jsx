import React from 'react';
import Feature from './Feature';

const Card = ({card}) => {
  const {planName, tagline, price, billingCycle, features, buttonText, isPopular} = card
  return (
  <div className={`card w-96 shadow ${isPopular === true? 'bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white' : ''}`}>
    <div className="card-body">
      <div className='flex justify-center -mt-9'>
      <span className={`badge badge-xs badge-warning text-[12px] p-3 ${isPopular === true? '' : 'bg-white border-none'}`}>{isPopular === true? 'Most Popular': ''}</span>
      </div>
      <div>
      <div className='space-y-1.5 mb-4'>
      <h2 className="text-3xl font-bold">{planName}</h2>
      <p>{tagline}</p>
      </div>
      <span className="text-[25px] font-bold flex gap-3">
      <h2>{price}</h2>
      <h2>{billingCycle}</h2>
      </span>
      </div>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
    {
    features.map((feature, index)=> <Feature 
    feature={feature}
    isPopular={isPopular}
    key={index}
    ></Feature>)
    }
    </ul>
    <div className="mt-6">
      <button className={`btn btn-primary btn-block rounded-full ${isPopular === true? 'bg-white text-black' : 'bg-[linear-gradient(to_right,#4F39F6,#9514FA)]'}`}>{buttonText}</button>
    </div>
  </div>
</div>
  );
};

export default Card;