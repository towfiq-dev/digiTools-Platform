import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({cardsPromise}) => {
  const cardsData = use(cardsPromise)
  return (
    <div className='max-w-310 mx-auto'>
      <div className='text-center mb-10'>
      <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
      <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className='grid gap-8  md:grid-cols-2 lg:grid-cols-3 items-center mb-20'>
      {
        cardsData.map((card, index)=> <Card 
        card ={card}
        key={index}
        ></Card>)
      }
      </div>
    </div>
  );
};

export default Cards;