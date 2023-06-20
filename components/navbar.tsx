import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className="flex mb-4">
        <p className="btn btn-ghost w-1/4 bg-gray-500 h-12">Jax Designs</p>
        <span className="w-1/4 bg-gray-500 h-12">
          <Link href="/">Home</Link>
        </span>
        <span className="w-1/4 bg-gray-500 h-12">
          <Link href="/contact">Contact</Link>
        </span>
        <span className='w-1/4 bg-gray-500 h-12'>
          <Link href="/shop">Shop</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;