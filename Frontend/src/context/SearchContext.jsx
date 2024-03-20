import { createContext, useContext, useState } from "react";

const SearchContext = createContext("dark");

const DarkMode = ({ children }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <SearchContext.Provider value={{ text, setText, handleOpen, open}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default DarkMode;
