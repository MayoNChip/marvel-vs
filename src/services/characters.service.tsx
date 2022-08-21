import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../utils/fetcher";
const md5 = require("md5");

const baseURL = process.env.MARVEL_API_BASE_URL;
const API_KEY = process.env.MARVEL_API_KEY;
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
console.log("private key", PRIVATE_KEY);
// const AUTH = `${Date.now() + PRIVATE_KEY + API_KEY}`;
// console.log("auth string", AUTH);
// const AUTH = process.env.MARVEL_STRING;

export const getRandomCharacter = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const firstCharacter = await axios.get(
    `${baseURL}/v1/public/characters?ts=${
      Date.now
    }&apikey=${"b8ceff4fff3619dccd38169ea464ae64"}`
  );
};

export const getAllCharacters = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const ts = Date.now();
  if (PRIVATE_KEY && API_KEY) {
    const hashedString = md5(ts + PRIVATE_KEY + API_KEY);
    console.log("hashed string md5", hashedString);
    const url = `${baseURL}v1/public/characters?ts=${ts}&apikey=${API_KEY}&hash=${hashedString}`;

    const params = {
      ts: Date.now(),
      apikey: API_KEY || "b8ceff4fff3619dccd38169ea464ae64",
      hash: hashedString,
    };

    console.log("full url", url);
    // const allCharacters = await axios.get(`${baseURL}v1/public/characters`, {
    //   params,
    // });
    const allCharacters = await axios.get(url);
    console.log(allCharacters.data);
    res.send({ success: true, data: allCharacters.data.data.results });
  }
};

//  default getRandomCharacter
