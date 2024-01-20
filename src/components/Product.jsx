import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state)=>state);
  const dispatch  = useDispatch();
  console.log("In product",cart);

  function AddtoCart() {
      dispatch(add(post));
      toast.success("Item Added to Cart");
  }

  function RemoveFromCart() {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className=" hover:shadow-lg bg-white flex flex-col items-center hover:scale-110 transition duration-300 ease-in justify-between gap-3 p-4 mt-10 ml-5 rounded-xl  ">
      <div>
      <p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
     <div>
     <p className=" w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.substr(0,50)+"..."}</p>
     </div>
      <div className=" h-[180px]">
        <img className="h-full w-full" src={post.image}/>
      </div>
     <div className=" flex justify-between items-center gap-12">
     <div>
      <p className=" text-green-600 font-semibold">${post.price}</p>
      </div>
      {
       cart.some((c) => c.id===post.id) ? (<button className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={RemoveFromCart}>Remove from Cart</button>) : (<button  className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={AddtoCart}>Add to Cart</button>)
      }
     </div>
    </div>
  )
};

export default Product;
