import React from "react";

const Ourteam = () => {

return(
    <div className="border-[3px] bg-[#AC8237] border-[#AC8237] rounded-xl mx-4 flex flex-col items-center justify-center lg:w-64 my-4 lg:mx-auto lg:rounded-lg hover:border-[#E8A733]">
        <img src="/team-img.png" alt="Team img"
        className="rounded-lg"
        />
        <div className="flex items-center justify-center w-full bg-[#AC8237] hover:bg-[#E8A733] transition duration-300">
        <button className="flex items-center justify-center text-white transition duration-300 h-8 lg:w-48">
            Our Team</button>
        </div>
    </div>
)

}

export default Ourteam;