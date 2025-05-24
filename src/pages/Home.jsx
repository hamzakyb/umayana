import React from "react";
import StoreButtons from "../components/StoreButtons";

const Home = () => {
  return (
    <main className="bg-white flex flex-col items-center">
      <div className="mt-1 mb-20">
        <StoreButtons />
      </div>
    </main>
  );
};

export default Home;