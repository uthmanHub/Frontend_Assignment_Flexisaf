import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../provider/Context";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const shopUrl = import.meta.env.VITE_SHOP_URL;
  const [_, setCart] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  function addToCart(product) {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    navigate("/cart");
  }

  return (
    <div className='px-3 md:px-6 lg:px-10 '>
      {products.length <= 0 ? (
        <div className='flex justify-center items-center h-screen '>
          <div className='loader'></div>
        </div>
      ) : (
        <div className='mt-2 grid grid-cols-1 md:grid-cols-2 md:mt-5 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
          {products &&
            products.map(product => (
              <div key={product.id}>
                <div className='head' data-category={product.category}></div>
                <div className='grid gap-5 w-full bg-gray-200 shadow-lg shadow-slate-500 p-3 rounded-e-3xl'>
                  {/* product image */}
                  <Link to={`product/${product.id}`}>
                    <div className='relative w-full h-full  z-0 border-b border-bg'>
                      <img
                        src={product.thumbnail}
                        loading='lazy'
                        alt={product.title}
                        className='w-1/2 min-h-36 block mx-auto  object-cover'
                        onLoad={e => (e.target.style.opacity = 1)}
                        style={{
                          opacity: 0,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      />
                    </div>
                  </Link>

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

                  {/* buy now or add product to cart */}
                  <div className='flex gap-10 justify-between w-full'>
                    <button
                      onClick={() => addToCart(product)}
                      className=' w-1/3 py-2 font-bold border-2 border-bg rounded-lg bg text-bg hover:bg-card hover:text-bg'
                    >
                      Buy Now
                    </button>
                    <Link
                      className=' w-1/3 py-2 text-center font-bold text-white rounded-lg bg-bg hover:bg-card hover:text-bg'
                      to={`product/${product.id}`}
                    >
                      Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
