import React from "react";

const Loader = () => {
  return (
    <div
      className="w-full h-screen bg-gray-900 flex justify-center items-center fixed top-0 left-0"
      id="loader"
    >
      <h1 className="text-base uppercase font-semibold font-sans text-gray-200">
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
