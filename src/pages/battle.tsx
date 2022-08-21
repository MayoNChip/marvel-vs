import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Navbar from "../components/Navbar";
import Question from "../components/Question";
import { API_CALLS } from "../helpers/apiCalls";
import fetcher from "../utils/fetcher";

export default function battle() {
  const { data, error, isLoading } = fetcher(
    "getCharacters",
    API_CALLS.getCharacters
  );

  console.log("data", data, "error", error);
  return (
    !isLoading && (
      <div className="flex flex-col items-center h-screen bg-gray-800">
        <Navbar />
        <Question />
      </div>
    )
  );
}
