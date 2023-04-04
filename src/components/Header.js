import React from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const Header = ({ setDarkMode, darkMode }) => {
  return (
    <section className="flex flex-col top-0 md:flex-row md:justify-between w-full py-2 md:py-6 px-4 border-b-2 fixed bg-white dark:bg-slate-950  shadow-lg dark:shadow-teal-800 z-40">
      <div className=" flex justify-between items-center">
        <p className="font-burtons mr-4 md:text-xl">Developed by Juandre1298</p>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <BsMoonStarsFill className="text-teal-600 text-2xl" />
          ) : (
            <BsFillSunFill className="text-yellow-500 text-3xl" />
          )}
        </button>
      </div>
      <div className="w-full lg:w-[600px]">
        <ul className="flex flex-wrap justify-between lg:justify-right mx-auto mt-4 sm:font-bold md:mt-0 gap-2 lg:gap-6  px-2 md:py-2 ml-8">
          <li className="text-sm  md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Homa
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Projects
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Experience
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Contact
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Resume
          </li>
        </ul>
      </div>
    </section>
  );
};
