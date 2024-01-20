import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UseSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {

  const {cart} = useSelector((state)=>state);

  return (
    <div>
      <nav className="flex bg-gray-900 justify-around py-2 ">
        <div>
          <Link to="/" ><img src="https://ecomzy-shopping-cart.vercel.app/logo.png" height={150} width={150} /></Link>
        </div>
        <div className="flex mt-3 text-white gap-x-4">
         <Link to="/" > <p className="font-semibold cursor-pointer text-1xl">Home</p></Link>
         <div className="relative">
         <Link to="/cart" > <p className=" cursor-pointer"> <FaShoppingCart size={25}/></p></Link>
        <div className={` animate-bounce  w-[25px] h-[25px] text-center bg-green-800  border rounded-full absolute bottom-6 left-3 ${cart.length===0 ? 'hidden': ''} `}>
          {
            cart.length>0 && <span>{cart.length}</span>
          }
        </div>
         </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
