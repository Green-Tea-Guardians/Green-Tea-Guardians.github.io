import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div style={{
      backgroundImage: `url("https://i.ibb.co/DRZwC2v/image-2.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
    }} className="app-container">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
