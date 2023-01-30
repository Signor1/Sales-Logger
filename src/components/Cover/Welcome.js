import React from "react";
import CoverImage from "../../assets/fashion.jpeg";
import "./Welcome.css";
import { motion } from "framer-motion";
import { GithubLogo, WhatsappLogo, TwitterLogo } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

const welcomeVariants = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full">
        <img
          src={CoverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="w-full h-full flex flex-col absolute top-0 left-0 bg-gray-900/50 z-10">
        <motion.header
          className="w-full h-24 flex justify-between items-center md:px-24 px-4"
          initial={{ x: 2500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        >
          <Link to="/">
            <h1 className="text-gray-100 tracking-widest uppercase font-sans font-bold text-xl">
              Corta
              <span className="text-rose-700 text- tracking-tighter font-extrabold">
                shop
              </span>
            </h1>
          </Link>
          <ul className="flex gap-4">
            <motion.li
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://github.com/Signor1"
                target={`_blank`}
                className="text-gray-100"
              >
                <GithubLogo size={20} color="currentColor" />
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://wa.me/07069106259"
                target={`_blank`}
                className="text-gray-100"
              >
                <WhatsappLogo size={20} color="currentColor" />
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://twitter.com/OneSignor?t=xTu8ujiP_M3nibDoFjsUUA&s=09"
                target={`_blank`}
                className="text-gray-100"
              >
                <TwitterLogo size={20} color="currentColor" />
              </a>
            </motion.li>
          </ul>
        </motion.header>
        <motion.div
          className="w-full h-96 mt-24 md:mt-48 lg:mt-0 flex flex-col gap-16 items-center justify-center"
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
        >
          <ul
            className="flex gap-2 md:text-7xl text-5xl font-sans font-semibold relative z-10 before:content-[''] before:absolute before:left-0 before:bottom-2 before:bg-rose-700 before:w-full before:h-8 before:-z-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-rose-700 after:w-full after:h-6 after:z-20 after:border-b after:border-gray-200 text-gray-200"
            id="animeText"
          >
            <li style={{ animationDelay: "0s" }}>W</li>
            <li style={{ animationDelay: "0.2s" }}>E</li>
            <li style={{ animationDelay: "0.4s" }}>L</li>
            <li style={{ animationDelay: "0.6s" }}>C</li>
            <li style={{ animationDelay: "0.8s" }}>O</li>
            <li style={{ animationDelay: "1s" }}>M</li>
            <li style={{ animationDelay: "1.2s" }}>E</li>
          </ul>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="px-12 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 text-base font-semibold py-2 bg-rose-700 text-gray-100"
          >
            Log In
          </button>
        </motion.div>
      </main>
    </section>
  );
};

export default Welcome;
