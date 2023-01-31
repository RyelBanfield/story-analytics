import Features from "../components/Features";
import Hero from "../components/Hero";

// import { api } from "../utils/api";

const Home = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
