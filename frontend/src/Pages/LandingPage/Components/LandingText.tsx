import React from 'react';

function LandingText() {
  return (
    <div className="h-full  p-10 bg-gradient-to-t from-white to-orange-300 bg-clip-text text-transparent overflow-hidden hover:overflow-scroll " >
      <h1 className="text-4xl md:text-5xl lg:text-5xl mb-4 font-bold font-mono ">
        Welcome to My Programming Portfolio!
      </h1>
      <div className="text-base md:text-lg lg:text-2xl leading-relaxed font-semibold">
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
