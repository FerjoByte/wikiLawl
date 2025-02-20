import React from "react";

const LotteryWiki = () => {

return(
    <div className="my-6 border-[3px] border-[#AC8237] rounded-xl mx-4 bg-[#232625] flex flex-col items-center justify-center lg:w-56 lg:p-0 lg:mx-auto lg:rounded-lg hover:border-[#E8A733]">
        <img src="/lottery-home.png" alt="loterry-home"
        className="h-56 w-48 lg:w-2/3 my-4 lg:h-36"
        />
        <div className="flex items-center justify-center w-full bg-[#AC8237] hover:bg-[#E8A733] transition duration-300">
        <button className="flex items-center justify-center text-white transition duration-300 h-8 lg:w-48">
            Lottery wiki</button>
        </div>
    </div>
)

}

export default LotteryWiki;