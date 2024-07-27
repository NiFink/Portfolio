import React from 'react';

function LandingText() {
  return (
    <div className=" rounded-lg text-white p-10 font-bold">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
        Welcome to My Programming Portfolio!
      </h1>
      <div className="text-base md:text-lg lg:text-xl leading-relaxed ">
        <p className='mt-14'>
          Here, you'll find a curated selection of my projects and experiences that showcase my journey and expertise in software development.
        </p>
        <p className="mt-4">
          Whether you're here to explore my work, understand my skill set, or consider collaboration, I hope this portfolio provides a clear insight into my technical abilities and passion for coding. 
        </p>
      </div>
    </div>
  );
}

export default LandingText;
