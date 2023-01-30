import React from "react";
import ActionButtons from "./Comps/ActionButtons";
import NavBar from "./Comps/NavBar";
import SalesTable from "./Comps/SalesTable";

const Dashboard = () => {
  return (
    <div className="w-full h-auto bg-gray-200">
      <NavBar />

      <div className="pt-28">
        <ActionButtons />
        <SalesTable />
      </div>
    </div>
  );
};

export default Dashboard;
