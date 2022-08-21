import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { API_CALLS } from "../helpers/apiCalls";
import { character } from "../types/customTypes";
import fetcher from "../utils/fetcher";
import { getRandomCharacter } from "../utils/getRandomCharacter";
import Card from "./Card";

const initialCharacter = () => {
  return {
    id: 0,
    name: "",
    thumbnail: {
      extension: "",
      path: "",
    },
    description: "",
    modified: Date.now(),
    resourceURI: "",
    urls: {
      type: "",
      url: "",
    },
  };
};

export default function Question() {
  const [leftCardData, setLeftCardData] = useState<character | undefined>(
    undefined
  );
  const [rightCardData, setRightCardData] = useState<character | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { data, isLoading, isError, error } = fetcher(
    "getCharacters",
    API_CALLS.getCharacters
  );

  console.log("data from question ", data);
  const handleStart = () => {
    if (data !== undefined) {
      const result = getRandomCharacter(data, isLoading);

      setLeftCardData(result?.leftImage);
      setRightCardData(result?.rightImage);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-4/5 my-12 overflow-hidden shadow-xl h-[2500px] rounded-xl bg-gradient-to-r from-red-500 to-red-700">
      <div className="absolute self-start m-0 text-gray-700/20 justify-self-start">
        <h1 className="text-[250px] p-0">Battle</h1>
      </div>
      {isModalOpen && (
        <div className="absolute z-20 flex flex-col items-center justify-between mt-12 bg-white rounded shadow-xl w-96 h-52">
          <h2 className="mt-12">Ready to start?</h2>
          <button
            onClick={handleStart}
            className="px-5 py-3 mb-6 text-white bg-red-500 rounded-full hover:bg-red-600 active:bg-red-700"
          >
            Start
          </button>
        </div>
      )}

      <h2 className="z-10 my-10 text-6xl text-red-200">
        Who will win in a battle?
      </h2>
      <div className="absolute flex items-center w-full h-full ">
        <div className="absolute right-0 w-full h-screen rotate-45 bg-red-600 opacity-50 rounded-xl"></div>
        {/* <div className="opacity-50 absolute w-[300px] h-[300px]  bg-red-700 rotate-45 ml-[60px] rounded-full"></div> */}
      </div>
      <div className="z-10 flex items-center justify-center w-full h-full">
        <Card data={leftCardData} />
        <Card data={rightCardData} />
      </div>
    </div>
  );
}
