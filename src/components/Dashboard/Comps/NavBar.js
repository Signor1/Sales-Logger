import { motion } from "framer-motion";
import { List, X } from "phosphor-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthContext from "../../AuthContext/AuthContext";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setOpen(!open);
  };
  const { logout } = useAuthContext();

  const handleLogout = () => {
    // logging out
    logout();
  };

  const NavLinks = [
    { name: "dashboard", link: "/dashboard" },
    { name: "products", link: "/products" },
    { name: "history", link: "/history" },
  ];
  return (
    <motion.div
      className="shadow-md w-full z-50 fixed top-0 left-0"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="md:flex md:h-20 items-center justify-between bg-gray-900 py-8 md:px-16 px-7">
        <Link to="/dashboard" className="block">
          <h1 className="text-gray-100 tracking-widest uppercase font-sans font-bold text-xl">
            Corta
            <span className="text-rose-700 text- tracking-tighter font-extrabold">
              shop
            </span>
          </h1>
        </Link>
        {/* Hamburger Menu  */}
        <div
          onClick={handleMenu}
          className="text-gray-200 absolute right-8 top-6 cursor-pointer lg:hidden block"
        >
          {open ? (
            <X size={32} color="currentColor" />
          ) : (
            <List size={32} color="currentColor" />
          )}
        </div>
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-6 lg:static absolute bg-rose-700 lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-700 ease lg:opacity-100 opacity-0 ${
            open ? "top-20 opacity-100" : "top-[-1000px]"
          }`}
        >
          {NavLinks.map((NavLink, index) => (
            <li
              key={index}
              className="lg:ml-8 lg:my-0 my-7 lg:py-2 overflow-x-hidden"
            >
              <Link
                to={NavLink.link}
                onClick={handleMenu}
                className={`text-gray-200 transition duration-200 hover:underline text-sm md:text-base font-sans capitalize font-normal ${
                  location.pathname === NavLink.link ? "underline" : ""
                }`}
              >
                {NavLink.name}
              </Link>
            </li>
          ))}

          <li className="lg:ml-6 ml-0 inline-block">
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm font-semibold px-8 py-2 outline-none rounded-lg font-poppins text-rose-700 bg-gray-200 hover:bg-gray-400"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
