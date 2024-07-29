import React from 'react';

function LandingText() {
  return (
    <div className="h-full  text-white p-10 bg-gradient-to-tl from-orange-200 to-orange-600 bg-clip-text text-transparent">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold font-mono ">
        Welcome to My Programming Portfolio!
      </h1>
      <div className="text-base md:text-lg lg:text-xl leading-relaxed ">
        <p className='mt-14'>
          Here, you'll find a curated selection of my projects and experiences that showcase my journey and expertise in software development.
        </p>
        <p className="mt-4">
          Whether you're here to explore my work, understand my skill set, I hope this portfolio provides a clear insight into my passion for coding. 
        </p>
      </div>
    </div>
  );
}

export default LandingText;
