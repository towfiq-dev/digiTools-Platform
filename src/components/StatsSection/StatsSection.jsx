import React from 'react';

const StatsSection = () => {
  return (
    <div class="stats stats-vertical lg:stats-horizontal shadow w-full bg-[linear-gradient(to_right,#4F39F6,#9514FA)] text-white py-10 rounded max-w-310 mx-auto grid">
  
  <div class="stat place-items-center border-white/20">
    <div class="stat-value text-4xl font-bold">50K+</div>
    <div class="stat-desc text-white/80 text-lg">Active Users</div>
  </div>
  
  <div class="stat place-items-center border-white/20">
    <div class="stat-value text-4xl font-bold">200+</div>
    <div class="stat-desc text-white/80 text-lg">Premium Tools</div>
  </div>
  
  <div class="stat place-items-center border-white/20">
    <div class="stat-value text-4xl font-bold">4.9★</div>
    <div class="stat-desc text-white/80 text-lg">Rating</div>
  </div>
  
</div>
  );
};

export default StatsSection;