import React from 'react';
import PortfolioPage from '../PortfolioPage/LandingPage';

function LandingPage() {
  return (
    <div className="px-16 pt-16 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white col-span-2 h-80 rounded-lg"></div>
        <div className="row-span-2  h-full rounded-lg">
        <div className='grid grid-rows-8 h-full gap-4'>
                <div className='row-span-5 bg-white rounded-lg '></div>
                <div className='row-span-3 bg-white rounded-lg '></div>
            </div>
        </div>
        
        <div className= "bg-white row-span-2  h-full rounded-lg"></div>
        <div className="bg-slate-500 aspect-square rounded-lg text-center"> Profile Picture</div>
        <div className="bg-slate-500 aspect-square rounded-lg text-center"> Contact </div>
      </div>
    </div>
  );
}

export default LandingPage;
