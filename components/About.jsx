import React from 'react';
import Image from 'next/image';
import Tabs from './Tabs';

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-contain bg-gradient-to-b from-black/30 to-white/80">
      {/* <h1 className="text-3xl font-semibold text-indigo-600">About</h1> */}
      <Tabs />
    </div>
  );
};

export default About;
