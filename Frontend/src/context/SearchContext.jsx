import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext("dark");

const DarkMode = ({ children }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);


  const handleOpen = (e) => {
    setOpen(!open);

    if (e.which === 17) {
      setOpen(true);
    } else if (e.key === "Escape") {
      setOpen(false);
    }

  };

  useEffect(() => {
    document.addEventListener("keydown", handleOpen);
  }, []);

  return (
    <SearchContext.Provider value={{ text, setText, handleOpen, open }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default DarkMode;
