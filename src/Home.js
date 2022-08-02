import React from "react";
import { TiThMenu } from "react-icons/ti";
import { useGlobalContext } from "./AppContext";

const Home = () => {
  const { toggleModal, toggleSideBar } = useGlobalContext();

  return (
    <div className={`w-full`}>
      <div className="main-container">
        <div className="flex items-center justify-center w-full h-screen">
          <button
            className="absolute text-3xl top-10 left-10"
            onClick={toggleSideBar}
          >
            <TiThMenu />
          </button>
          <button
            className="px-5 py-3 font-extrabold bg-white rounded-sm"
            onClick={toggleModal}
          >
            Open Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
