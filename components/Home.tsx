import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import PostContainer from "./PostContainer";
import LotteryWiki from "./LotteryWIki";
import FanpageSection from "./FanpageSection";
import Colaborate from "./Collaborate";
import Collaborate from "./Collaborate";
import Ourteam from "./Ourteam";

const Home = () => {
   return (
      <div 
         className="min-h-screen bg-cover bg-center bg-no-repeat lg:flex" 
         style={{ backgroundImage: 'url(/img-background.jpg)' }}>

         <Navbar />
         <div className="lg:w-1/2">
         <SearchBar />  
         <PostContainer />
         </div>
         <div className="lg:w-1/4 lg:items-center">
         <FanpageSection />
         <LotteryWiki />
         <Collaborate/>
         <div className="lg:hidden">
          <Ourteam />
         </div>
         </div>

      
      </div>
   );
};

export default Home;