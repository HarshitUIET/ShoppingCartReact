import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setloading] = useState(false);
  const [posts,setposts] = useState([]);

  async function fetchData() {
     setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log("fetch data",data);
       setposts(data);

    } catch (error) {
      console.log("Error is ",error);
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className=" grid  xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] max-w-6xl">
       { 
       loading ? <Spinner/> : 
        posts.length>0 ? (
          
            posts.map((post)=>{
               return <Product key={post.id} post={post} />
            })
          
        ) : <p className=" flex items-center justify-center h-screen">No Data found</p>

       }
    </div>
  )
};

export default Home;
