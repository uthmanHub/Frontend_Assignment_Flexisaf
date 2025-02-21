import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const shopUrl = import.meta.env.VITE_SHOP_URL;

  useEffect(() => {
    async function getProducts() {
      const controller = new AbortController();
      const { signal } = controller;

      try {
        let response = await fetch(shopUrl, { signal });
        let data = await response.json();
        setProducts(data.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }

      return () => {
        controller.abort();
      };
    }

    getProducts();
  }, []);

  return (
    <div className='px-3 md:px-6 lg:px-10 '>
      {products.length <= 0 ? (
        <div className='flex justify-center items-center h-screen '>
          <div className='loader'></div>
        </div>
      ) : (
        <div className='mt-2 grid grid-cols-1 md:grid-cols-2 md:mt-5 lg:mt-10 lg:grid-cols-3 gap-5'>
          {products &&
            products.map(product => (
              <Link key={product.id} to={`product/${product.id}`}>
                <div className='head' data-category={product.category}></div>
                <div className='grid gap-5 w-full bg-gray-300 p-3 rounded-e-3xl'>
                  {/* product image */}
                  <div className='relative w-full h-96 z-0 border-b border-bg'>
                    <img
                      src={product.thumbnail}
                      loading='lazy'
                      alt={product.title}
                      className='w-full h-full object-cover'
                      onLoad={e => (e.target.style.opacity = 1)}
                      style={{
                        opacity: 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    />
                  </div>

                  {/* product details */}
                  <div className='space-y-3'>
                    <h2 className='text-xl font-bold line-clamp-1 '>
                      {product.title}
                    </h2>
                    <p className='w-full line-clamp-2'>{product.description}</p>
                    <div className='flex justify-between'>
                      <p className='text-xl font-bold'>
                        price: ${product.price}
                      </p>
                      <p className='text-xl font-bold'>
                        <i className='fa fa-star fa-md text-yellow-500'></i>
                        {product.rating}
                      </p>
                    </div>
                  </div>

                  {/* add product to cart */}
                  <button className='justify-end w-full py-3 font-bold text-white rounded-lg bg-bg hover:bg-card hover:text-bg'>
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
