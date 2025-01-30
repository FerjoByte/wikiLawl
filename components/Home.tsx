import React from "react";
import Navbar from "./Navbar";

const Home = () => {
   return (
      <div 
         className="min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: 'url(/img-background.jpg)' }}>
         
         <Navbar />  

         {/* Puedes agregar más contenido aquí si lo necesitas */}
      </div>
   );
};

export default Home;