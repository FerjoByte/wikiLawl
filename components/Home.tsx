import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Home = () => {
   return (
      <div 
         className=" lg:flex min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: 'url(/img-background.jpg)' }}>
         
         <Navbar />
         <SearchBar />  

         {/* Puedes agregar más contenido aquí si lo necesitas */}
      </div>
   );
};

export default Home;