import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProduct } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function Product() {
  // const [products, setProducts] = useState([]);
  const {data : products, status} = useSelector((state)=> state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
    // const fetchProductData = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProductData();
  }, []);

  if(status === STATUSES.LOADING){
    return <h2 className="font-bold text-2xl h-[85vh] flex justify-center items-center" >Loading...</h2>
  }

  if(status === STATUSES.ERROR){
    return <h2 className="font-bold text-2xl text-red-500 h-[85vh] flex justify-center items-center">Something went wrong!</h2>
  }

const handleAdd = (product) =>{
  dispatch(add(product));
}

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center  p-5 gap-4 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm border border-1  rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-contain"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="font-bold text-sm mb-2 truncate h-6 overflow-hidden">
                {product.title}
              </h2>
              {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="flex items-center">
                  <span className="text-yellow-500 mr-1">
                    {"★".repeat(Math.round(product.rating.rate))}
                  </span>
                  <span className="text-gray-500">
                    ({product.rating.count})
                  </span>
                </span>
              </div>
              <button onClick={()=> handleAdd(product)} className="bg-black text-white px-4 py-2 rounded-lg mt-5 w-full">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
