import { NextApiRequest, NextApiResponse } from "next";
import { getAllCharacters } from "../../../services/characters.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      return getAllCharacters(req, res);
    }
  }
}
