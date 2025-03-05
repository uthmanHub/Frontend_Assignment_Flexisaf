import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from "../provider/Context";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [_, setCart] = useCart();
  const shopUrl = import.meta.env.VITE_PRODUCT_URL;
  const notify = () => toast("😍 Item added Successfully 🧺");

  useEffect(() => {
      window.scrollTo(0, 0);
      async function getProduct() {
        const controller = new AbortController();
        const { signal } = controller;
  
        try {
          let response = await fetch(shopUrl + id, { signal });
          let data = await response.json();
          setProduct(data);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Fetch error:", error);
          }
        }
  
        return () => {
          controller.abort();
        };
      }
  
      getProduct();
    }, []);

  function addToCart(product) {
    notify()
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
    
    setTimeout(() => {
      navigate("/shop");
    }, 3000);
  }

  return (
    <div className='px-3 md:px-6 lg:px-10 mb-64 md:mb-5'>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} theme="dark" />
      <i
        className='fa fa-arrow-left fa-lg mt-5 cursor-pointer p-2 rounded text-bg hover:bg-card'
        onClick={() => navigate(-1)}
      >
        {" "}
        <span className='ml-2 text-sm'>back</span>
      </i>

      {product.length > 0 ? (
        <div className='flex justify-center items-center h-[100vh] '>
          <div className='loader'></div>
        </div>
      ) : (
        <div>
          <div className='flex gap-2 flex-col md:flex-row w-full justify-start '>
            {/* img lhs */}
            <div className=' w-full md:w-1/2'>
              <img
                src={product.thumbnail}
                alt={product.title}
                onLoad={e => (e.target.style.opacity = 1)}
                style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
              />
            </div>

            {/* content rhs */}
            <div className='flex flex-col  gap-1 border-2 rounded p-3 md:p-10 w-full'>
              <h1 className='p-2 font-bold border-b border-bg'>
                {product.title}
              </h1>
              <p className='p-2 font-extrabold'>${product.price}</p>
              <span
                className={`${
                  product.stock < 6 ? "text-red-500" : "text-black"
                }`}
              >
                <i className='fa fa-circle-info fa-md'></i> {product.stock}{" "}
                units left
              </span>
              <span>
                <i className='fa fa-plus fa-xs mr-2'></i>
                {product.shippingInformation}
              </span>
              <p className='mt-3'>{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                className='justify-end mt-5 w-full py-3 font-bold text-white rounded-lg bg-bg hover:bg-card hover:text-bg'
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* reviews */}
          <div className='w-full md:mt-10 h-44 '>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
              {
                // add reviews here
                product.reviews &&
                  product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className='flex flex-col rounded-lg  [#8bcde7] bg-gray-200 shadow-xl w-full justify-between items-center py-3 p-2 border-b border-bg'
                    >
                      <span>
                        {Array.from({ length: review.rating }, (_, i) => (
                          <i
                            key={i}
                            className='fa fa-star fa-md text-yellow-500'
                          ></i>
                        ))}
                      </span>
                      <q>{review.comment}</q>
                      <span className='font-bold italic '>
                        {review.reviewerName}
                      </span>
                      <span className=' italic '>
                        {new Date(review.date).toDateString()}
                      </span>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
