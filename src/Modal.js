import React from "react";
import { useGlobalContext } from "./AppContext";
import { CgClose } from "react-icons/cg";

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen
          ? "fixed top-0 left-0 w-full h-screen  bg-overlay flex items-center justify-center transition-all duration-500 ease-in opacity-100"
          : "opacity-0"
      }`}
    >
      <div className="w-[500px] relative h-[200px] rounded-lg bg-white flex items-center justify-center">
        <button
          className="absolute text-xl text-red-500 top-7 right-7"
          onClick={toggleModal}
        >
          <CgClose />
        </button>
        <h1 className="text-2xl font-extrabold">Modal Content</h1>
      </div>
    </div>
  );
};

export default Modal;
