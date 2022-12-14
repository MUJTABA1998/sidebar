import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="w-full h-screen">
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}

export default App;
