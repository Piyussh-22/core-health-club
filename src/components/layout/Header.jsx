import logo from "../../assets/logo.png";
import { Moon, Sun, Settings, LogIn } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handelToggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="piy-header-container w-full rounded-full px-6 py-3 shadow-md bg-gray-300 dark:bg-gray-600 flex justify-between items-center transition-all duration-300 hover:ring-2 hover:ring-primary hover:shadow-[0_0_10px] hover:shadow-primary hover:ring-offset-1 hover:ring-offset-background">
        <div className="piy-left flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-primary bg-white/10 backdrop-blur-md hover:bg-primary hover:text-background hover:shadow-[0_0_10px] hover:shadow-primary transition-all duration-300">
          <button onClick={handelToggleTheme}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button>
            <Settings />
          </button>
        </div>

        <div className="piy-center flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 object-contain " />
          <div className="">Core Health Club</div>
        </div>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full text-primary bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-background hover:shadow-[0_0_10px] hover:shadow-primary transition-all duration-300">
          <LogIn size={18} />
          <span className="font-medium">Login</span>
        </button>
      </div>
    </>
  );
};

export default Header;
