import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { DataContext } from "../context/contextApi";


const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu, theme, setTheme } =
    useContext(DataContext);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`w-[240px] md:block overflow-y-auto h-full py-4 bg-black md:bg-white dark:bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "translate-x-[-240px]"
        }`}
    >

      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${selectedCategory === item.name
                  ? "bg-white/[0.15] md:bg-black/[0.15] dark:bg-white/[0.15]"
                  : ""
                  }`}
              />
              {item.divider && (
                <hr className="my-5 border-white/[0.2] md:border-black/[0.2] border dark:border dark:border-white/[0.2]" />
              )}
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default LeftNav;
