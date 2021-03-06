import {
  CashIcon,
  ClipboardCopyIcon,
  ClockIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Modal from "../components/organisms/Modal";

type Props = {
  onCloseModal: void;
};

interface TransactionPool {
  transactionPoll: {
    id: string;
    input: {};
    outputMap: {};
  };
}
const Wallet = (props: Props) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [modal, setModal] = useState(false);
  const [transactionPool, setTransactionPool] = useState<TransactionPool>();
  const [outputObject, setOutputObject] = useState({});
  const [outputObj, setOutputObj] = useState([]);
  //   console.log(transactionPool.transactionPoll);
  const router = useRouter();
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const mineTransactionHandler = () => {
    axios
      .get(`https://sympodiumcoin.herokuapp.com/api/mine-transaction`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        let response = res.data;
        console.log(response);
        router.push("/blocks");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get(`https://sympodiumcoin.herokuapp.com/api/wallet-info`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        let response = res.data;
        setAddress(response.address);
        setBalance(response.balance);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get(`https://sympodiumcoin.herokuapp.com/api/transaction-poll`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        let response = res.data;
        setTransactionPool(response);
        console.log(response.transactionPoll);
        Object.values(response.transactionPoll).map((transaction: any) => {
          setOutputObject(transaction.outputMap);
          console.log(transaction);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const tifOptions = Object.keys(outputObject).map((key) => (
    <div className="w-full p-3 mt-4 bg-white shadow-lg flex flex-row bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
      <div
        aria-label="group icon"
        role="img"
        className="focus:outline-none  w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center"
      >
        <CashIcon className="h-6 text-green " />
      </div>
      <div className="pl-3 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="focus:outline-none text-sm leading-none">
            <span className="text-indigo-200">To</span>{" "}
            {truncateString(key, 20)}
          </p>
        </div>
        <p className="focus:outline-none text-xs leading-3 pt-1 text-white-500">
          <span className="text-indigo-200">Amount</span> {outputObject[key]}
        </p>
      </div>
    </div>
  ));

  return (
    <Layout complete={true}>
      <div className="  flex flex-col lg:flex-col justify-between w-full items-start lg:space-x-0">
        {modal ? (
          <Modal
            onCloseModal={() => {
              setModal(false);
            }}
          />
        ) : (
          ""
        )}

        <div className=" mt-12 mb-5 lg:mb-0 lg:my-14 w-full lg:w-6/12 lg:flex lg:flex-col lg:self-center ">
          <div className=" text-black font-bold  p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 bg-gradient-to-r from-[#ffcc33] via-[#ffd700] to-[#e1ad21]  backdrop-filter: blur(20px)">
            <div className="flex flex-row items-center mb-5 lg:mb-14 justify-between ">
              <img src="/images/cardlogo.png" className="w-16" />
              <p className="uppercase text-lg">Sympodium</p>
            </div>
            <div className="flex flex-col  space-y-4">
              <div className="sm:w-6/12">
                <div className="flex flex-row items-center ">
                  <p>
                    <ClipboardCopyIcon className="text-black cursor-pointer h-6" />
                  </p>
                  <p className="text-md lg:text-xl">
                    {truncateString(address, 20)}
                  </p>
                </div>
                {/* <p className="text-md lg:text-xl">MENDS ALBERT</p> */}
              </div>
              <p className="text-xl lg:text-3xl ">{balance}SC </p>
            </div>
          </div>
          <div className=" flex space-x-0 space-y-4 md:space-x-3 md:space-y-0 lg:space-y-0 lg:space-x-5 my-5 flex-col w-full md:flex-row lg:flex-row items-center justify-between">
            <div
              onClick={() => {
                setModal(true);
              }}
              className="uppercase cursor-pointer text-md  rounded-md w-full text-center py-2 px-5 text-white lg:text-lg  lg:w-full  bg-gradient-to-r from-[#0A7ABF] to-[#00DBDE] "
            >
              TRANSFER
            </div>
            <div
              onClick={() => {
                mineTransactionHandler();
              }}
              className="uppercase cursor-pointer text-md  rounded-md w-full text-center py-2 px-5 text-white lg:text-lg  lg:w-full  bg-gradient-to-r  from-[#FF1E1E] to-[#5200FF] "
            >
              MINE TRANSACTION
            </div>
          </div>
        </div>
        <div className="my-8  lg:my-14 text-white w-full">
          <p className="text-2xl mb-4">Transaction(s)</p>
          {tifOptions}
          {/* {outputMap(outputObject)} */}
          <div className="w-full space-y-4"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
