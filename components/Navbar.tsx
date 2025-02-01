import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="flex items-center h-16 lg:h-auto bg-[#232625] lg:bg-transparent lg:block">
            <div className="flex-1 flex justify-center lg:justify-start p-8 ml-24">
                <img src="/logo.png" alt="wikiLawl logo" className="w-24 h-auto"/>
            </div>
            
            <button onClick={toggleMenu} 
            className={`mr-4 lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/hamburger-menu.png" alt="Menu" 
            className="w-10 h-10"/>
            </button>

            <button onClick={toggleMenu} 
                className={`mr-4 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <img src="/close-menu.png" alt="Close-menu" className="w-6 h-8"/>
            </button>

            <div className={`${isMenuOpen ? 'absolute top-14 right-0 block p-4  z-50 w-64' : 'hidden'} lg:block`}>
                <ul className="text-center text-white lg:w-64 ml-10">
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem] "><a href="#">PRIMEROS PASOS</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem]"><a href="#">MONTURAS</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem]"><a href="#">TRAJES</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem]"><a href="#">MISIONES</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem]"><a href="#">SUPPORT</a></li>
                    <li className="bg-[#232625] border-[3px] border-[#655333] p-2 rounded-lg mb-2 lg:hover:bg-[#3a3b3c] lg:hover:border-[#8b6f4d] lg:hover:text-[1.02rem]"><a href="#">CASAS</a></li>
                </ul>
            </div>
        </nav>
    )
    

}

export default Navbar