import React from 'react';

const StatsSection = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white py-10 rounded max-w-310 mx-auto grid mt-10">
  
  <div className="stat place-items-center border-white/20">
    <div className="stat-value text-4xl font-bold">50K+</div>
    <div className="stat-desc text-white/80 text-lg">Active Users</div>
  </div>
  
  <div className="stat place-items-center border-white/20">
    <div className="stat-value text-4xl font-bold">200+</div>
    <div className="stat-desc text-white/80 text-lg">Premium Tools</div>
  </div>
  
  <div className="stat place-items-center border-white/20">
    <div className="stat-value text-4xl font-bold">4.9★</div>
    <div className="stat-desc text-white/80 text-lg">Rating</div>
  </div>
  
</div>
  );
};

export default StatsSection;