import { FcDeleteDatabase } from "react-icons/fc";
import { add, remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  function deleteCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className=" flex flex-col mb-4">
      <div className=" max-w-4xl px-6 mx-auto  py-8  flex justify-around mt-5  gap-3">
        <div className=" mr-4">
          <img className=" h-[320px] w-[480px]" src={item.image} />
        </div>
        <div className=" flex flex-col ">
          <h1 className=" py-6 font-semibold text-2xl ">{item.title}</h1>
          <h1 className=" text-[20px] text-gray-700 ">{item.description}</h1>
          <div className=" flex justify-between mx-2 ">
            <p className=" text-green-600 mt-5">${item.price}</p>
            <div className="mt-5  cursor-pointer" onClick={deleteCart}>
              <FcDeleteDatabase size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[2px] rounded-lg bg-slate-700 leading-3">
       
      </div>
    </div>
  )
};

export default CartItem;
