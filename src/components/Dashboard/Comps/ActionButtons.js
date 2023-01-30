import React, { useState } from "react";
import Modal from "./Modal";
import useAuthContext from "../../AuthContext/AuthContext";

const ActionButtons = () => {
  const [showModal, setShowModal] = useState(false);

  const { sales, storeData, deleteTable } = useAuthContext();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSave = () => {
    storeData();
  };

  const handleDelete = () => {
    deleteTable();
  };

  return (
    <section className="w-full flex flex-col px-4">
      <div className="flex gap-4 flex-wrap items-center">
        <button
          onClick={handleModal}
          type="submit"
          className="px-6 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 md:text-base text-sm font-semibold py-2 bg-rose-700 text-gray-100"
        >
          Add Product
        </button>
        {sales && (
          <button
            onClick={handleSave}
            type="submit"
            className="px-6 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 md:text-base text-sm font-semibold py-2 bg-rose-700 text-gray-100"
          >
            Save Logs
          </button>
        )}
        {sales && (
          <button
            onClick={handleDelete}
            type="submit"
            className="px-6 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 md:text-base text-sm font-semibold py-2 bg-rose-700 text-gray-100"
          >
            Reset Table
          </button>
        )}
      </div>
      <Modal showModal={showModal} handleModal={handleModal} />
    </section>
  );
};

export default ActionButtons;
