import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { CiMedal, CiStickyNote } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className=" flex flex-col pr-4 gap-3">
      <button className="flex items-center gap-4 text-lg p-3 rounded-r-full hover:text-blue-600 hover:bg-gray-200">
        <BsBarChartFill /> <p className="hidden sm:block"> Dashboard</p>
      </button>
      <button className="flex items-center gap-4 text-lg p-3 rounded-r-full text-blue-600 bg-gray-200">
        <CiMedal />

        <p className="hidden sm:block"> Skill Test</p>
      </button>
      <button className="flex items-center gap-4 text-lg p-3 rounded-r-full hover:text-blue-600 hover:bg-gray-200">
        <CiStickyNote />
        <p className="hidden sm:block"> Internship</p>
      </button>
    </div>
  );
};

export default SideBar;
