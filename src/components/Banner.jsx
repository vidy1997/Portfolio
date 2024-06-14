
import wallpaper from "../assets/wallpaper.jpg";
import userLogo from "../assets/userLogo.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner=()=>{
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Data Analyst", "DevOps Engineer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
      
    });
   // Destropying
   return () => {
    typed.destroy();
  };
}, []);
    return(
        <div className="main-container flex items-center h-screen"
             style={{
                //backgroundImage:`url(${wallpaper})`,
                backgroundImage:'linear-gradient(135deg, #FF6B6B, #FFA8A8, #FFD3B6, #FFEC94, #F3FFB6)',
                backgroundSize:"cover"
            }}>
            <div
            className=" w-full flex justify-center items-center h-full ">
            <div className="w-2/3">
            <h3 className="mt-4 text-4xl font-semibold"> Hi I am</h3>
            <h1 className="text-4xl font bold"> Vidushi Choudhary</h1>
            <h2 className="  text-2xl ">I am a <span ref={el}></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat officiis aperiam illo ipsa beatae ex rerum tempora voluptatibus, atque ducimus iste saepe ab numquam quam? Soluta eveniet, vero iste, velit, numquam modi cupiditate reiciendis cum optio corporis libero autem voluptate tempora fugit qui suscipit nisi. Architecto animi soluta repellendus!</p>
            <br/>
            <div className="iconContainer flex space-x-4 items-center text-2xl">
                <a href="#" className="hover:bg-orange-600  cursor-pointer bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="hover:bg-orange-600  cursor-pointer bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fab fa-youtube text-white"></i>
                </a>
                <a href="#"className="hover:bg-orange-600  cursor-pointer bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fab fa-linkedin text-white"></i>
                </a>
            </div>  
            <br/>
            <a className="mt-3 px-3 py-2 bg-orange-600 rounded-full shadow-lg" href="/contact">Contact Me</a>
            </div>
            </div>
            <div className=" w-full flex justify-center ">
           <img  className='rounded-full shadow-lg w-fit'src={userLogo}/>
            </div>
        </div>
    )
}

export default Banner;