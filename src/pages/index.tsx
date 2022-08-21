import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { GetServerSideProps, NextPage } from "next";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import { API_CALLS } from "../helpers/apiCalls";
import fetcher from "../utils/fetcher";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-800 max-w-screen">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default Home;

// export const GetServerSideProps = async () => {
//   console.log("res", data);

//   return {
//     props: {
//       characters: data,
//     }, // will be passed to the page component as props
//   };
// };

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const queryClient = new QueryClient();

//   // prefetch data on the server
//   await queryClient.fetchQuery(["getCharacters"], API_CALLS.getCharacters);

//   return {
//     props: {
//       // dehydrate query cache
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
