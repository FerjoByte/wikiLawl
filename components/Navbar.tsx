import React, { useState } from "react";
import Ourteam from "./Ourteam";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="flex items-center h-20  bg-[#232625] lg:h-auto lg:bg-transparent lg:block lg:w-1/4">
            <div className="flex-1 flex justify-center ml-8 lg:p-2 lg:ml-0">
                <img src="/logo.png" alt="wikiLawl logo" className="w-24 h-auto lg:w-36"/>
            </div>
            
            <button onClick={toggleMenu} 
            className={`p-2 lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/hamburger-menu.png" alt="Menu" 
            className="w-10 h-10"/>
            </button>

            <button onClick={toggleMenu} 
                className={`p-4 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <img src="/close-menu.png" alt="Close-menu" className="w-6 h-8"/>
            </button>

            <div className={`${isMenuOpen ? 'absolute top-20 right-0 block p-4  z-50 w-64' : 'hidden'} lg:block`}>
                <ul className=" text-center text-white lg:w-64 m-auto">
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#E8A733] lg:hover:text-[1.02rem] "><a href="#">PRIMEROS PASOS</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#E8A733] lg:hover:text-[1.02rem]"><a href="#">MONTURAS</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#E8A733] lg:hover:text-[1.02rem]"><a href="#">TRAJES</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#E8A733] lg:hover:text-[1.02rem]"><a href="#">MISIONES</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#E8A733] lg:hover:text-[1.02rem]"><a href="#">SUPPORT</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8A733] lg:hover:text-[1.02rem]"><a href="#">CASAS</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#AC8237] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8A733] lg:hover:text-[1.02rem]"><a href="#">MONSTER</a></li>
                </ul>
            </div>
            <div className="hidden lg:block">
            <Ourteam />
            </div>
        </nav>
    )
    

}

export default Navbar