import React from "react";
import HistoryTable from "./Comps/HistoryTable";
import NavBar from "./Comps/NavBar";

const History = () => {
  return (
    <div className="w-full h-auto bg-gray-200">
      <NavBar />

      <div className="pt-28">
        <HistoryTable />
      </div>
    </div>
  );
};

export default History;
