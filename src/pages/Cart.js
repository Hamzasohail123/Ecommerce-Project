import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice"; 
import { CiTrash } from "react-icons/ci";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
console.log(cartItems.length);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>

        {/* Item List */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
              <div className="col-span-12 lg:col-span-2 img box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{item.title}</h5>
                  <button className="rounded-full group flex items-center justify-center" onClick={() => handleRemove(item.id)}>
                  <CiTrash className="w-6 h-6" />

                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">{item.description}</p>
                <div className="flex justify-between items-center">
                  <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">${item.price.toFixed(2)}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        {/* Subtotal and Checkout Section */}
        {cartItems.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Subtotal
            </h5>
            <div className="flex items-center justify-between gap-5">
             
              <h6 className="font-manrope font-bold text-3xl leading-10 text-indigo-600">
                ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </h6>
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
