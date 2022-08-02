import { useState, createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        toggleModal,
        toggleSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
