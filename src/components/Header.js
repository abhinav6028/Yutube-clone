import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";

import { DataContext } from "../context/contextApi";
import Loader from "../shared/Loader";


const Header = () => {
  const { loading, mobileMenu, setMobileMenu } =
    useContext(DataContext);



  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="flex flex-row h-14 px-4 md:px-5 justify-between items-center sticky top-0 z-20 bg-white shadow-md">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            onClick={mobileMenuToggle}
            className="flex h-10 w-10 justify-center items-center rounded-full  md:hidden md:mr-6 cursor-pointer hover:bg-[#303030]/[0.6]"
          >
            {mobileMenu ? (
              <CgClose className="text-black dark:text-white text-xl" />
            ) : (
              <SlMenu className="text-black dark:text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-7 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="PlayTube"
            className="h-full hidden md:block"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="PlayTube"
            className="h-8 w-8 md:hidden rounded-full"
          />
        </Link>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
          <div className="w-10 justify-center items-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-black/[0.7] dark:text-white text-xl" />
          </div>
          <input
            type="text"
            className="w-44 px-5 bg-transparent outline-none text-black dark:text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>

        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.15]"
        >
          <IoIosSearch className="text-black/[0.9] dark:text-white text-xl" />
        </button>
      </div>



      <div className="flex items-center">

        <div className="hidden md:flex">
          <div
            className={"flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"}
          >

            <IoIosNotificationsOutline className="text-[#1795a8] h-6 w-6 dark:text-[#7cf6fd] text-xl" />

          </div>
        </div>



        <div className="flex h-9 w-9 overflow-hidden rounded-full md:ml-4">
          <Link>
            <img
              src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
              alt="avatar image"
            />
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Header;
