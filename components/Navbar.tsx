import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return(
        <nav className="flex justify-between items-center h-16 lg:h-auto bg-[#232625] lg:bg-transparent lg:block">
            <div className="flex-1 flex justify-center lg:justify-start  ">
                <img src="/logo.png" alt="wikiLawl logo" className="w-24 h-auto"/>
            </div>
            
            <button onClick={toggleMenu} 
            className={`mr-4 lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/hamburger-menu.png" alt="Menu" 
            className="w-10 h-10"/>
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <ul>
                    <li><a href="#">Primeros pasos</a></li>
                    <li><a href="#">Monturas</a></li>
                    <li><a href="#">Trajes</a></li>
                </ul>
            </div>
        </nav>
    )
    

}

export default Navbar