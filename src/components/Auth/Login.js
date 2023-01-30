import React from "react";
import CoverImage from "../../assets/fashion.jpeg";
import { motion } from "framer-motion";
import { GithubLogo, WhatsappLogo, TwitterLogo } from "phosphor-react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

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

const Login = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full">
        <img
          src={CoverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <main className="w-full h-full flex flex-col items-center absolute top-0 left-0 bg-gray-900/50 z-10">
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
          className="md:w-[500px] w-11/12 h-auto bg-gray-300/90 flex flex-col justify-center items-center md:px-8 px-6 pt-4 pb-8 shadow-xl rounded-xl lg:mt-24 md:mt-48 mt-28"
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Importing Form */}
          <LoginForm />
        </motion.div>
      </main>
    </section>
  );
};

export default Login;
