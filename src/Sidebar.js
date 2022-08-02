import React from "react";
import { useGlobalContext } from "./AppContext";
import { CgClose } from "react-icons/cg";

const Sidebar = () => {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext();

  return (
    <div
      className={`w-[300px] md:w-[500px] fixed top-0 left-0 transition-all duration-300 ease-in h-screen flex-col  bg-white justify-start items-start px-10 py-10 ${
        isSideBarOpen ? "translate-x-[0px]" : "translate-x-[-500px]"
      }`}
    >
      <button
        className="absolute text-3xl font-extrabold text-red-600 top-10 right-7"
        onClick={toggleSideBar}
      >
        <CgClose />
      </button>
      <div>
        <h1 className="text-3xl font-extrabold">Speecto</h1>
      </div>
      <ul className="flex flex-col gap-5 mt-20">
        <li>Home</li>
        <li>Services</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
