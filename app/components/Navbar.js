import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-1">
      <div className='flex items-center space-x-2'> {/* Adjusted for vertical center alignment */}
        <Image src="/logo.png" width={100} height={50} alt="Logo" /> {/* Added alt prop for accessibility */}
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-4">
          <a href="/" className="hover:bg-gray-700 px-4 py-3 rounded  text-2xl ">Home</a>
          <a href="/aboutme" className="hover:bg-gray-700 px-4 py-3 rounded text-2xl">About Me</a>
          <a href="/contact" className="hover:bg-gray-700 px-4 py-3 rounded  text-2xl">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar