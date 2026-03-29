import React from 'react';

const Workflow = () => {
  return (
    <div className="hero bg-[linear-gradient(to_right,#4F39F6,#9514FA)] h-auto p-15">
  <div className="hero-content text-center">
    <div className="max-w-153">
      <h1 className="text-4xl font-bold text-white">Ready to Transform Your Workflow?</h1>
      <p className="py-6">
      Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
      </p>
      <div className='flex justify-center gap-5 mb-4'>
        <button className="btn bg-white rounded-full ">Explore Products</button>
        <button className="btn btn-soft btn-primary rounded-full duration-2000 text-black bg-[linear-gradient(to_right,#4F39F6,#9514FA)]">View Pricing</button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  </div>
</div>
  );
};

export default Workflow;