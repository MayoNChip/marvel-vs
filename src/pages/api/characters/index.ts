import { NextApiRequest, NextApiResponse } from "next";
import { API_CALLS } from "../../../helpers/apiCalls";
import { getAllCharacters } from "../../../services/characters.service";
import fetcher from "../../../utils/fetcher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getAllCharacters(req, res);
    }
  }
}
