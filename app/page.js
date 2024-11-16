"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import DialogBox from "./components/dialog/Dialog";
import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";
import SideBar from "./components/sidebar/SideBar";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const App = () => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  const chartOptions = {
    chart: {
      id: "quick-stats-chart",
    },
    xaxis: {
      categories: ["HTML", "Tags", "Reference", "Tables"],
    },
  };

  const chartSeries = [
    {
      name: "Your Score",
      data: [10, 12, 8, 14],
    },
  ];

  return (
    <div className="flex min-h-screen w-screen">
      <div className="min-w-[20%] pt-16 flex flex-col border-r pr-4 gap-3">
        <SideBar />
      </div>
      <div className="w-full pt-12 pl-14 ">
        <h1 className="text-lg text-gray-500">Skill Test</h1>

        <div className="flex flex-col sm:flex-row justify-center p-1 w-full sm:justify-between">
          <div className="w-[75%] flex flex-col gap-4 pt-10">
            <div className="border p-3 rounded-md flex sm:flex-row flex-col justify-center items-center gap-2">
              <Image src="html.svg" alt="html" width={70} height={70} />
              <div>
                <h1 className="font-semibold">HyperText Markup Language</h1>
                <div className="flex items-center gap-2 mr-8 text-[11px] w-full">
                  <p>Questions : 08 | </p>
                  <p>Duration : 15 mins | </p>
                  <p>Submitted on : 17 Nov 2024 </p>
                </div>
              </div>
              <DialogBox
                rank={rank}
                setRank={setRank}
                percentile={percentile}
                setPercentile={setPercentile}
                score={score}
                setScore={setScore}
              />
            </div>

            <div className="border p-3 rounded-md justify-center items-center gap-2">
              <h1 className="font-semibold">Quick Statistics</h1>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mr-8 w-full pb-4">
                <div className="sm:border-r py-2 px-4 flex justify-center items-center gap-3">
                  <span className="p-3 px-4 bg-gray-100 rounded-full">🏆</span>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-semibold">
                      {rank ? rank : 1}
                    </h1>
                    <p className="text-sm text-gray-400 capitalize">
                      Your Rank
                    </p>
                  </div>
                </div>
                <div className="sm:border-r py-2 px-4 flex justify-center items-center gap-3">
                  <span className="p-3 px-4 bg-gray-100 rounded-full">🗒️</span>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-semibold">
                      {percentile ? percentile : 30}%
                    </h1>
                    <p className="text-sm text-gray-400 capitalize">
                      Percentile
                    </p>
                  </div>
                </div>
                <div className="py-2 px-4 flex justify-center items-center gap-3">
                  <span className="p-3 px-4 bg-gray-100 rounded-full">✅</span>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-semibold">
                      {score ? score : 10}/15
                    </h1>
                    <p className="text-sm text-gray-400 capitalize">
                      Correct Answers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-3">
              <h1 className="font-semibold mb-4">Your Performance Wise </h1>
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                controls={false}
                width="100%"
                height={320}
              />
            </div>
          </div>
          <div className="min-w-[25%]  sm:px-4 pt-10">
            <div className="border rounded-md p-4 -ml-12 sm:ml-0">
              <h1 className="font-semibold mb-4">Syllabus Wise Analysis</h1>

              <div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="">
                    <h2 className="text-gray-400 mb-1">
                      HTML Tools, Forms,History
                    </h2>
                    <div className="bg-blue-200 h-2 rounded-full w-full">
                      <div className="bg-blue-500 w-[65%] h-full rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-blue-500 font-semibold">65%</h2>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="">
                    <h2 className="text-gray-400 mb-1">
                      Tags & Reference in HTML
                    </h2>
                    <div className="bg-orange-200 h-2 rounded-full w-full">
                      <div className="bg-orange-500 w-[76%] h-full rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-orange-500 font-semibold">76%</h2>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="">
                    <h2 className="text-gray-400 mb-1">
                      Tables & Reference in HTML
                    </h2>
                    <div className="bg-green-200 h-2 rounded-full w-full">
                      <div className="bg-green-500 w-[65%] h-full rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-green-500 font-semibold">65%</h2>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="">
                    <h2 className="text-gray-400 mb-1">Tables & CSS Basics</h2>
                    <div className="bg-red-200 h-2 rounded-full w-full">
                      <div className="bg-red-500 w-[65%] h-full rounded-full "></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-red-500 font-semibold">65%</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-md p-4 mt-4 -ml-12 sm:ml-0">
              <div className="flex justify-between">
                <h1 className="font-semibold mb-4">Question Analysis</h1>
                <h1 className="text-blue-500 font-semibold">
                  {" "}
                  {score ? score : 10}/15
                </h1>
              </div>
              <h2 className="text-gray-500 mb-1">
                <span className="font-semibold">
                  You scored {score ? score : 10} question correct out of 15
                </span>
                . However it still needs some improvements
              </h2>
              <PieChart
                lineWidth={25}
                animate={true}
                radius={30}
                data={[
                  {
                    title: "Correct",
                    value: (score / 15) * 100 || 66,
                    color: "#3b82f6",
                  },
                  {
                    title: "Remaining",
                    value: 100 - ((score / 15) * 100 || 66),
                    color: "#dbeafe",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
