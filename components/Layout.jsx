import Footer from './Footer';
// import { useContext, useEffect, useState } from 'react';
// import { ProductsContext } from './ProductsContext';
import Navbar from './Navbar';

export default function Layout({ children }) {
  // const { setSelectedProducts } = useContext(ProductsContext);
  //   const [success, setSuccess] = useState(false);
  //   useEffect(() => {
  //     if (window.location.href.includes('success')) {
  //       setSelectedProducts([]);
  //       setSuccess(true);
  //     }
  //   }, [setSelectedProducts]);
  return (
    <>
      <div className="pt-0">
        <div className="pt-0">
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
