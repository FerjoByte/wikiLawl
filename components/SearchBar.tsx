import React from "react";

const SearchBar = () => {
    return(
        <div className="flex justify-center items-center mt-4 lg:w-1/2 lg:items-start lg:mt-0 lg:py-4 lg:h-16 lg:mt-16">
        <div className="flex items-center w-96 border-2 border-[#232625] rounded-lg p-2 bg-[#DE7112] mx-2 lg:w-full lg:h-8 ">
          <input type="text" placeholder="Encuentra lo que busques aca"
           className="w-full bg-transparent focus:outline-none text-white placeholder-white" />
           <span>
             <img src="icon-search.png" alt="icon-search"/>
          </span>
        </div>
        </div>
    )
}

export default SearchBar