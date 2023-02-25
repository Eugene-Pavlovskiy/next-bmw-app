import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

const HeroSm = () => {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, [setSelectedProducts]);
  return (
    <>
      <div className="flex justify-center p-3">
        <h1 className="mt-10 font-semibold">Auto Shop</h1>
      </div>
      <div className="w-full px-5 py-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSm;
