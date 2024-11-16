import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const DialogBox = ({
  rank,
  setRank,
  percentile,
  setPercentile,
  score,
  setScore,
}) => {
  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempScore, setTempScore] = useState(score);

  const handleSave = () => {
    if (!tempRank || !tempPercentile || !tempScore) {
      alert("All fields are required!");
      return;
    }
    setRank(tempRank);
    setPercentile(tempPercentile);
    setScore(tempScore);
  };

  return (
    <Dialog.Root className="z-100">
      <Dialog.Trigger asChild>
        <button className="inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none bg-blue-600 text-white border hover:border-black">
          Update
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] sm:max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-semibold text-mauve12 flex justify-between mx-4 pb-4 items-center">
            Update Profile
            <Image src="html.svg" alt="html" width={40} height={40} />
          </Dialog.Title>
          <fieldset className="mb-[15px] flex justify-between items-center gap-5 w-full">
            <label className="w-2/3 text-[15px] text-violet11" htmlFor="rank">
              <span className="bg-blue-700 text-white px-2 py-1 rounded-full mr-2">
                1
              </span>{" "}
              Update your <strong>Rank</strong>
            </label>
            <input
              className="inline-flex h-[35px] w-1/3 items-center justify-center rounded px-2.5 text-[15px] text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="rank"
              placeholder="e.g. 12"
              value={tempRank}
              required
              onChange={(e) => setTempRank(e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-2/3 text-[15px] text-violet11"
              htmlFor="percentile"
            >
              <span className="bg-blue-700 text-white px-2 py-1 rounded-full mr-2">
                2
              </span>{" "}
              Update your <strong>Percentile</strong>
            </label>
            <input
              className="inline-flex h-[35px] w-1/3 items-center justify-center rounded px-2.5 text-[15px] text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="percentile"
              placeholder="e.g. 85"
              value={tempPercentile}
              required
              onChange={(e) => setTempPercentile(e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label className="w-2/3 text-[15px] text-violet11" htmlFor="score">
              <span className="bg-blue-700 text-white px-2 py-1 rounded-full mr-2">
                3
              </span>{" "}
              Update your <strong>Current Score</strong>
            </label>
            <input
              className="inline-flex h-[35px] w-1/3 items-center justify-center rounded px-2.5 text-[15px] text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
              id="score"
              placeholder="e.g. 11"
              value={tempScore}
              required
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === "" ||
                  (Number(value) >= 0 && Number(value) <= 15)
                ) {
                  setTempScore(value);
                }
              }}
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className=" inline-flex h-[35px] items-center justify-center rounded border px-6 font-medium text-blue-700 hover:bg-blue-600 hover:text-white">
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                onClick={handleSave}
                className=" bg-blue-200 ml-3 inline-flex h-[35px] items-center justify-center rounded border px-6 font-medium text-blue-700 hover:bg-blue-600 hover:text-white"
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogBox;
