import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPageContext } from "next";
import Image from "next/image";
import { API_CALLS } from "../helpers/apiCalls";
import { getAllCharacters } from "../services/characters.service";
import { character } from "../types/customTypes";
import fetcher from "../utils/fetcher";

export default function Welcome() {
  const { data, isLoading } = fetcher("getCharacters", API_CALLS.getCharacters);

  const images =
    data &&
    data
      .filter(
        (character: character) =>
          !character.thumbnail.path.includes("image_not_available")
      )
      .map((character: character) => {
        return {
          path: `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`,
          posX: () => Math.floor(Math.random() * 25),
          posY: () => Math.floor(Math.random() * 18),
        };
      });
  console.log("images array", images);
  // const image =
  //   data ??
  //   `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`;
  return (
    // <div className="flex flex-col items-center w-full mt-10 bg-gray-400 shadow-lg h-5/6">
    <div className="relative flex flex-col w-4/5 mt-10 overflow-hidden bg-gray-400 rounded-md shadow-lg h-3/4">
      <div className="absolute right-0 bg-gray-600 md:w-1/2 md:h-screen lg:bg-blue-500">
        {data && (
          <div className="relative w-full h-full">
            {!isLoading &&
              images &&
              images.map(
                (image: { path: string; posX: Function; posY: Function }) => {
                  return (
                    <div
                      className={` translate-x-[50px]
                    translate-y-[${image.posY()}px]`}
                    >
                      <Image
                        src={image.path}
                        width="200px"
                        height="200px"
                        className="rounded-full "
                      ></Image>
                    </div>
                  );
                }
              )}

            {/* <h2>{data.data?.data?.results[0]?.name}</h2> */}
          </div>
        )}
      </div>
      <div className="z-10 mt-20 ml-20">
        <h2 className="text-4xl text-gray-600 ">Welcome to </h2>
        <h2 className="ml-10 text-red-700 text-8xl">Marvel Battle </h2>
        <p className="mt-10 ml-20 text-2xl">
          Pick which character will win in a battle
        </p>
      </div>
    </div>
    // </div>
  );
}
