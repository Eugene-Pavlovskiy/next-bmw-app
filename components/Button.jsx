import React from 'react';
import Link from 'next/link';

const Button = () => {
  return (
    <div className="flex justify-center mt-5">
      <Link href="/shop">
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default Button;
