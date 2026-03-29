import React from 'react';
import Group from '../../assets/Group 5.png'
import Play from '../../assets/watchPlay.png'
import Hero from '../../assets/banner.png'
const Banner = () => {
  return (
  <div className="hero min-h-screen mt-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12">
    <img className='w-125 h-147.5 border-gray-400 border rounded-xl' src={Hero} alt="" />
    <div>
      <span className='text-[14px] flex gap-2 w-68  justify-center bg-[#E1E7FF] py-2 px-4 rounded-full text-[linear-gradient(to_right,#4F39F6,#9514FA)] mb-3'>
        <img className='w-5' h-5 src={Group} alt="" />
        <p className= 'text-[#9514FA]'>New: AI-Powered Tools Available</p>
        </span>
      <h1 className="text-5xl font-bold">Supercharge Your <br/> Digital Workflow</h1>
      <p className="py-6 text-justify">
      Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
      </p>
      <div className='flex gap-5'>
      <button className="btn btn-primary rounded-full bg-[linear-gradient(to_right,#4F39F6,#9514FA)]">Explore Products</button>
      <button className="btn btn-soft btn-primary rounded-full duration-2000 border-[#9514FA] border"><img src={Play} alt="" />Watch Demo</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Banner;