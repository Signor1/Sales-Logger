import React, { useEffect, lazy, Suspense } from "react";
import { animateScroll } from "react-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//css for react-toastify
import "react-toastify/dist/ReactToastify.css";

// Layouts
import GuestLayout from "./Layouts/GuestLayout";
import AuthLayout from "./Layouts/AuthLayout";

import Loader from "./components/Loader/Loader";
import History from "./components/Dashboard/History";

//Lazy Rendering
const Welcome = lazy(() => import("./components/Cover/Welcome"));
const Login = lazy(() => import("./components/Auth/Login"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Products = lazy(() => import("./components/Dashboard/Products"));

function App() {
  //for starting at the top when route changes
  const location = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [location.pathname]);

  return (
    <div className="w-full h-auto bg-gray-200">
      <Suspense fallback={<Loader />}>
        <ToastContainer />
        <Routes>
          {/* Guest Layout  */}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* AuthLayout  */}
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
