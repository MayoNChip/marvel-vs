import { character } from "../types/customTypes";

export const getRandomCharacter = (
  array: character[],
  isLoading: boolean | undefined
) => {
  if (!isLoading) {
    const leftImage: character = array?.map(
      (character: character) => character
    )[Math.floor(Math.random() * array?.length)];

    const rightImage = array?.map((character: character) => character)[
      Math.floor(Math.random() * array?.length)
    ];

    return { leftImage, rightImage };
  }
  // data[Math.floor(Math.random() * data?.data?.data?.results.length)];
};
