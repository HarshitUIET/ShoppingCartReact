import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem';
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
   const [totalAmount,setTotalAmount] = useState(0);

   useEffect(()=>{
        setTotalAmount(cart.reduce(((acc,curr)=>acc+curr.price),0))
   },[cart])

  return (
    <div className="flex justify-evenly min-h-[80vh] max-w-8xl gap-x-12 ">
      {
        cart.length > 0 ?

          (
            <div className="  gap-x-12 flex max-w-8xl  ">
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex = {index}/>
                })
              }
            </div>

            <div className=" mt-12 flex flex-col  h-[80vh] w-[420px]  ">
              <div className=" px-6">
                <div className=" font-semibold text-green-600">Your Cart</div>
                <div className=" font-bold text-3xl text-green-600 uppercase">Summary</div>
                <p>
                  <span >Total items : {cart.length}</span>
                </p>
              </div>

              <div className=" ml-2 mt-96">
                <p>Total Amount : <span className=" font-bold text-xl"> ${totalAmount}</span></p>
                <button className="w-3/4 rounded-lg font-bold h-[50px] text-white mt-6 bg-green-600">
                  CheckOut Now
                </button>
              </div>

              </div>
            </div>
          )

          : (<div className=" flex flex-col justify-center items-center h-[80vh]">
            <h1 className=" font-bold text-2xl mb-3">Cart Empty</h1>
            <Link to="/" > <button className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Shop Now</button></Link>
          </div>)
      }
    </div>
  )
};

export default Cart;
