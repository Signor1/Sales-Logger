import { X } from "phosphor-react";
import React from "react";
import ModalForm from "./ModalForm";

const Modal = ({ showModal, handleModal }) => {
  return (
    <>
      <section
        id="modal"
        className={`w-full h-screen flex justify-center items-center fixed bg-gray-900/50 ${
          showModal ? "top-0" : "-top-[1000px]"
        } top-0 left-0 transition-all duration-500 ease-in`}
      >
        <main className="lg:w-1/2 md:w-3/4 w-11/12  h-auto bg-gray-100 rounded-lg py-6 px-6">
          <div className="flex justify-end items-center text-gray-900">
            <span onClick={handleModal} className="cursor-pointer">
              <X size={25} color="currentColor" />
            </span>
          </div>
          <ModalForm />
        </main>
      </section>
    </>
  );
};

export default Modal;
