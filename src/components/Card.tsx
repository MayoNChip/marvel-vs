import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { API_CALLS } from "../helpers/apiCalls";
import fetcher from "../utils/fetcher";

import * as Loader from "react-loader-spinner";
import { character } from "../types/customTypes";

interface Props {
  data: character | undefined;
}

export default function Card({ data }: Props) {
  // const firstHero = data && data[0];
  // const { getImagesURL } = fetcher("getCharacters", API_CALLS.getCharacters);
  const [imageURL, setImageURL] = useState<string>("");
  // const { data, isLoading } = fetcher("getCharacters", API_CALLS.getCharacters);
  console.log("data from Card", data);

  const getImagesURL = ({
    path,
    extension,
  }: {
    path: string;
    extension: string;
  }) => {
    console.log("path", path, "extension", extension);
    return `${path}.${extension}`;
  };

  const imageSrc = useMemo(() => {
    if (data) {
      const image = getImagesURL({ ...data?.thumbnail });
      console.log("imageSrc", image);
      setImageURL(image);
    }
  }, [data]);

  const handleClick = () => {
    if (data !== undefined) {
      console.log("data URI", data.description);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-2/5 mx-24 bg-gray-900 shadow-xl shadow-red-900 drop-shadow-2xl rounded-2xl min-h-min">
      <h2 className="mt-3 text-2xl text-white">{data?.name}</h2>
      <div className="flex items-center justify-center w-40 h-40 overflow-hidden border-4 border-red-500 rounded-full mt-7">
        {data === undefined ? (
          <Loader.TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            // radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <Image
            src={imageURL}
            alt="card"
            width={"500px"}
            height={"500px"}
            layout="intrinsic"
          />
        )}
      </div>
      <div className="flex w-5/6 p-8 my-10 text-white bg-gray-300/25">
        {data?.description}
      </div>
      <button
        onClick={handleClick}
        className="py-2 mb-10 bg-red-600 border-2 border-yellow-300 rounded-full bottom-10 px-7"
      >
        <h2 className="text-2xl font-bold text-white">Pick</h2>
      </button>
    </div>
  );
}
