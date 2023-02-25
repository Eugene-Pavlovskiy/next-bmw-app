import Image from 'next/image';
import React from 'react';
import Layout from '@/components/Layout';
import HeroSm from '@/components/HeroSm';
import Products from '../lib/products.json';
// import { productsData } from '../lib/productsData.js';

const product = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-black/30 to-white/80 pt-10">
        <HeroSm />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 -mx-5 overflow-x-scroll snap-x scrollbar-hide">
        {Products &&
          Products.map(product => {
            return (
              <div className="px-5 snap-start" key={product.id}>
                <div className="bg-blue-100 p-5 rounded-xl">
                  <Image
                    src={product.picture}
                    alt=""
                    width={600}
                    height={300}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                </div>
                <p className="text-sm mt-1 leading-4 text-gray-500">
                  {product.description}
                </p>
                <div className="flex mt-1">
                  <div className="text-2xl font-bold grow">
                    €{product.price}
                  </div>
                  <button
                    // onClick={addProduct}
                    className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default product;
