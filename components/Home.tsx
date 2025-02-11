import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import PostContainer from "./PostContainer";
import LotteryWiki from "./LotteryWIki";

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
         <LotteryWiki />

         {/* Puedes agregar más contenido aquí si lo necesitas */}
      </div>
   );
};

export default Home;