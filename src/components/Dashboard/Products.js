import React from "react";
import NavBar from "./Comps/NavBar";
import { ProductTable } from "./Tables/ProductTable";

const Products = () => {
  return (
    <div className="w-full h-auto bg-gray-200">
      <NavBar />

      <div className="w-full h-auto pt-28">
        <ProductTable />
      </div>
    </div>
  );
};

export default Products;
