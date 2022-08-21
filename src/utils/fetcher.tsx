import { QueryFunction, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { character } from "../types/customTypes";

export default function fetcher(
  queryName: string,
  fetchFunction: QueryFunction
) {
  // const [characters, setCharacters] = useState<character[]>([]);
  const {
    status,
    data: charactersData,
    error,
    isLoading,
    isError,
  }: UseQueryResult<character[], Error> = useQuery([queryName], fetchFunction);
  console.log("status", status, "charactersData", charactersData);
  if (queryName === "getCharacters") {
    // const data: character[] = charactersData?.data;

    return {
      data: charactersData,
      isLoading,
      isError,
      error,
    };
  }
  return charactersData
    ? {
        data: charactersData,
        isLoading,
        isError,
        error,
      }
    : { success: false, message: error };
}
