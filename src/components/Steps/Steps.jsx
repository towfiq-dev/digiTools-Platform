import React from 'react';
import Account from '../../assets/user.png'
import Choose from '../../assets/package.png'
import Start from '../../assets/rocket.png'
const Steps = () => {
  return (
  <section className='bg-[#F9FAFC] my-10 md:my-25 py-16 md:py-20 px-4'>

  <div className='text-center mb-12 space-y-2'>
    <h2 className='text-3xl md:text-4xl font-bold'>Get Started in 3 Steps</h2>
    <p className='text-gray-500 max-w-md mx-auto'>
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>

  <div className='max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
    
    <div className="card bg-base-100 shadow-xl border border-gray-100 relative overflow-visible w-full max-w-sm">

      <div className='absolute top-4 right-4 h-10 w-10 bg-[#9514fa] text-white rounded-full flex items-center justify-center font-bold shadow-lg'>
        01
      </div>
      
      <figure className="px-10 pt-10">
        <div className='bg-[#E1E7FF] p-5 rounded-full'>
          <img className='w-12 h-12 object-contain' src={Account} alt="Account" />
        </div>
      </figure>
      
      <div className="card-body items-center text-center p-8">
        <h2 className="card-title text-xl mb-2">Create Account</h2>
        <p className='text-gray-500 leading-relaxed'>
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>
    </div>


    <div className="card bg-base-100 shadow-xl border border-gray-100 relative overflow-visible w-full max-w-sm">
      <div className='absolute top-4 right-4 h-10 w-10 bg-[#9514fa] text-white rounded-full flex items-center justify-center font-bold shadow-lg'>
        02
      </div>
      
      <figure className="px-10 pt-10">
        <div className='bg-[#E1E7FF] p-5 rounded-full'>
          <img className='w-12 h-12 object-contain' src={Choose} alt="Choose" />
        </div>
      </figure>
      
      <div className="card-body items-center text-center p-8">
        <h2 className="card-title text-xl mb-2">Choose Products</h2>
        <p className='text-gray-500 leading-relaxed'>
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>
    </div>


    <div className="card bg-base-100 shadow-xl border border-gray-100 relative overflow-visible w-full max-w-sm">
      <div className='absolute top-4 right-4 h-10 w-10 bg-[#9514fa] text-white rounded-full flex items-center justify-center font-bold shadow-lg'>
        03
      </div>
      
      <figure className="px-10 pt-10">
        <div className='bg-[#E1E7FF] p-5 rounded-full'>
          <img className='w-12 h-12 object-contain' src={Start} alt="Start" />
        </div>
      </figure>
      
      <div className="card-body items-center text-center p-8">
        <h2 className="card-title text-xl mb-2">Start Creating</h2>
        <p className='text-gray-500 leading-relaxed'>
          Download and start using your premium tools immediately.
        </p>
      </div>
    </div>

  </div>
</section>
  );
};

export default Steps;