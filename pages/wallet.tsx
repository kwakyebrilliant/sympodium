import { TicketIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div className="flex flex-row justify-between w-full items-start">
      <div className=" my-14 w-full ">
        <div className=" text-black font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
            <img src="/images/cardlogo.png" className="w-16" />
            <p className="uppercase text-lg">Sympodium</p>
          </div>
          <div className="flex flex-row justify-between items-center space-y-4">
            <div>
              <p className="text-xl ">0aB3 XXXX XXXX XXXX XXXX</p>
              <p className="text-xl">MENDS ALBERT</p>
            </div>
            <p className="text-3xl">1000 SC</p>
          </div>
        </div>
        <div className=" flex space-x-5 my-5 flex-row items-center justify-between">
          <div className="uppercase cursor-pointer  rounded-md text-center py-2 px-5 text-white text-lg w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] ">
            TRANSFER
          </div>
          <div className="uppercase cursor-pointer  rounded-md text-center py-2 px-5 text-white text-lg w-full  bg-gradient-to-r from-[#FF1E1E] to-[#5200FF] ">
            WITHDRAW
          </div>
        </div>
      </div>
      <div className="my-14 text-white w-full   ">
        <p>Transactions (2)</p>

        <div className="w-full">
          <div className="w-full p-3 mt-8 bg-white rounded flex">
            <div
              aria-label="heart icon"
              role="img"
              className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg2.svg"
                alt="icon"
              />
            </div>
            <div className="pl-3">
              <p className="focus:outline-none text-sm leading-none">
                <span className="text-indigo-700">James Doe</span> favourited an{" "}
                <span className="text-indigo-700">item</span>
              </p>
              <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                2 hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
