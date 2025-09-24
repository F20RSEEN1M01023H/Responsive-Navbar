import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="h-screen bg-slate-900/50">
          <h1 className="text-center text-4xl font-bold font-mono pt-5">
            Our Website Start Here
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
