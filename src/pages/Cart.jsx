import React, { useContext } from "react";
import { useCart } from "../provider/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useCart();

  let total = cart.reduce((item, product) => {
    return item + product.price * product.quantity;
  }, 0);
  // make number to a comma seperated format
  total = Number(total).toLocaleString();

  function handleRemoveFromCart(id) {
    // remove the item that containd the item-id i clicked on
    setCart(
      cart.filter(item => {
        return item.id != id;
      })
    );
  }

  const updateCartQuantity = (productId, action) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity > 9 // prevent going above 10
                    ? item.quantity
                    : item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1, // Prevent going below 1
            }
          : item
      )
    );
  };

  return (
    <>
      <div className='px-3 md:px-6 lg:px-10 my-10 lg:mt-10 '>
        {cart.length > 0 ? (
          <div className='flex flex-col w-full lg:flex-row gap-10 '>
            {/* cart items details */}
            <div className='w-full space-y-5 h-fit max-h-[400px] overflow-y-auto px-5 '>
              {cart.map(item => (
                <div
                  key={item.id}
                  className='flex flex-col items-center md:flex-row border-2 rounded border-bg gap-5 mb-3'
                >
                  <img src={item.thumbnail} alt='' className='w-[120px]' />
                  <div className=' lg:border-l-2 p-2 border-bg space-y-1 w-full'>
                    <h4 className='font-bold '>{item.title} </h4>
                    <span className='line-clamp-1'>{item.description} </span>
                    <span className='font-medium'>${item.price} </span>

                    <div className='flex justify-between w-full'>
                      {/* product quantity controls */}
                      <div className='flex items-center gap-2 mt-2'>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, "decrease")
                          }
                          className='border px-2 bg-gray-300 hover:bg-gray-400'
                        >
                          -
                        </button>
                        <span className='font-bold'>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, "increase")
                          }
                          className='border px-2 bg-gray-300 hover:bg-gray-400'
                        >
                          +
                        </button>
                      </div>

                      {/* remove item button */}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className='border-2 px-2 bg-primary text-white border-bg hover:border-danger hover:font-bold hover:bg-danger mt-2 rounded-md cursor-pointer'
                      >
                        Del
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* cart payment summary */}
            <div className='w-full lg:w-4/5 bg-bg flex flex-col h-96 gap-10  text-white rounded-lg p-5'>
              <h4>Select Method of payment: </h4>

              <div className='w-full flex flex-col justify-between h-full'>
                <div className="flex items-center gap-2 border p-4 font-semibold rounded hover:bg-primary">
                  <input className="size-5 accent-card" type='radio' name='payment_method' id='paystack' />
                  <label htmlFor='paystack'>PayStack</label>
                </div>

                <div className="flex items-center gap-2 border p-4 font-semibold rounded hover:bg-primary">
                  <input className="size-5 accent-card" type='radio' name='payment_method' id='flutter_wave' />
                  <label htmlFor='flutter_wave'>Flutter Wave</label>
                </div>
            
                <div className="flex items-center gap-2 border p-4 font-semibold rounded hover:bg-primary">
                  <input checked className="size-5 accent-card" type='radio' name='payment_method' id='bank_transfer' />
                  <label htmlFor='bank_transfer'>Bank Transfer</label>
                </div>
              </div>

              <button
                onClick={() => {
                  confirm("are you sure you want to checkout");
                }}
                className='button font-bold w-full mt-auto hover:bg-primary'
              >
                Checkout (${total})
              </button>
            </div>
          </div>
        ) : (
          <center className='mx-auto h-[50vh] w-full space-y-2'>
            <i className='fa fa-2xl fa-shopping-cart'></i>
            <h4>your cart is empty!</h4>
            <p>browse our shop list and discover our best deals</p>
            <Link className='button' to='/shop/'>
              <button className='mt-5'>Start Shopping</button>
            </Link>
          </center>
        )}
      </div>
    </>
  );
};

export default Cart;
