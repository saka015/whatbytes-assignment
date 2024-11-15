import Image from "next/image";
import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[20%] pt-16 flex flex-col border-r-2 pr-4 gap-3">
        <button className="flex items-center gap-4 text-lg p-3 rounded-r-full hover:text-blue-600 hover:bg-gray-200">
          <BsBarChartFill /> Dashboard
        </button>
        <button className="flex items-center gap-4 text-lg p-3 rounded-r-full text-blue-600 bg-gray-200">
          <CiMedal />
          Skill Test
        </button>
        <button className="flex items-center gap-4 text-lg p-3 rounded-r-full hover:text-blue-600 hover:bg-gray-200">
          <CiStickyNote />
          Internship
        </button>
      </div>
      <div className="w-[80%] pt-12 pl-14 pr-4">
        <h1 className="text-lg text-gray-500">Skill Test</h1>

        <div className="flex gap-4 pt-10">
          <div className="border p-3 rounded-md flex justify-center items-center  gap-2">
            <Image src="html.svg" alt="html" width={70} height={70} />
            <div>
              <h1 className="font-semibold">HyperText Markup Language</h1>
              <div className="flex justify-center items-center gap-2 mr-8">
                <p>Questions : 08 | </p>
                <p>Duration : 15 mins | </p>
                <p>Submitted on : 17 Nov 2024  </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white border hover:border-black rounded-md font-semibold px-5 py-2">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
