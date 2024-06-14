import { act, useState } from "react";

const Header=()=>{
     const [brandName, setBrandName]=useState("Vidushi Choudhary");
    const [menuLinks, setMenuLinks] =useState([
        {
            title: 'Home',
             link: '/Home',
             id: 1

        },
        {
            title: 'About',
             link: '/About',
             id: 2

        },
        {
            title: 'Contact',
             link: '/Contact',
             id: 3

        },
        {
            title: 'Skills',
             link: '/Skills',
             id: 4

        },
        {
            title: 'LinkedIn',
             link: '/linkedIn',
             id: 5

        }
     ]);
     const[actionButton,setActionButton]=useState({
        title:"Hire Me",
        link:"/HireMe"
     })
       return(
        <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100 ">
            <div>

            {/*Brnd Logo*/}
            <h1 className="text-3xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-3">
            {menuLinks.map((link)=>(
                
             <a href={link.link} key={link.id} className="hover:text-orange-600">{link.title}</a>
            ))}
            
            </div>

            <div>
                <a href={actionButton.link} className="px-3 py-2 bg-orange-600 rounded-full text-white shadow text-1xl">{actionButton.title}</a>
            </div>
        </div>
       );
};

export default Header