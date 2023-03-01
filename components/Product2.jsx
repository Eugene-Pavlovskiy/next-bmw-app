import Image from 'next/image';
import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

export default function Product2({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts(prev => [...prev, _id]);
  }
  return (
    <div className="w-full">
      <div className="px-5 snap-start" key={_id}>
        <div className="bg-blue-100 p-5 rounded-xl">
          <Image src={picture} alt="" width={600} height={300} />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow">€{price}</div>
          <button
            onClick={addProduct}
            className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
    // <div className="w-52">
    //   <div className="px-5 snap-start" key={item.id}>
    //     <div className="bg-blue-100 p-5 rounded-xl">
    //       <Image src={item.picture} alt="" width={600} height={300} />
    //     </div>
    //     <div className="mt-2">
    //       <h3 className="font-bold text-lg">{item.name}</h3>
    //     </div>
    //     <p className="text-sm mt-1 leading-4 text-gray-500">
    //       {item.description}
    //     </p>
    //     <div className="flex mt-1">
    //       <div className="text-2xl font-bold grow">€{item.price}</div>
    //       <button
    //         onClick={addProduct}
    //         className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
    //       >
    //         +
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
