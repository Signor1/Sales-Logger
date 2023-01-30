import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const GuestLayout = () => {
  const cookie = new Cookies();
  const getLogger = cookie.get("SalesLogin");

  return !getLogger ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default GuestLayout;
