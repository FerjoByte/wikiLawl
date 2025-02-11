import React from "react";

const LotteryWiki = () => {

return(
    <div className="p-4 border-[3px] border-[#655333] rounded-lg mx-2 bg-[#232625] flex flex-col items-center justify-center lg:justify-start lg:w-1/4 lg:mt-32 lg:h-full lg:mx-8">
        <img src="/lottery-home.png" alt="loterry-home"
        className="lg:w-2/3"
        />
        <button className="w-64 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Lottery Wiki</button>
    </div>
)

}

export default LotteryWiki;