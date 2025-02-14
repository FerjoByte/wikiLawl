import React from "react";

const FanpageSection = () => {

return(
    <div className=" border-[3px] bg-[#0b96d9] border-[#AC8237] rounded-xl mx-4 flex flex-col items-center justify-center lg:w-56 my-4 lg:mt-36 lg:mx-auto lg:rounded-lg hover:border-[#E8A733]">
        <img src="/facebook-img.png" alt="loterry-home"
        className="h-56 lg:h-40 rounded-lg"
        />
        <div className="flex items-center justify-center w-full bg-[#AC8237] hover:bg-[#E8A733] transition duration-300">
        <button className="flex items-center justify-center text-white transition duration-300 h-8 lg:w-48">
            JOIN THE COMMUNITY</button>
        </div>
    </div>
)

}

export default FanpageSection;