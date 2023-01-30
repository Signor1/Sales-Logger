import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Envelope, Eye, EyeClosed, Key, LockKey } from "phosphor-react";
import ErrMsg from "./ErrMsg";
import useAuthContext from "../AuthContext/AuthContext";

const LoginForm = () => {
  // Initialize a boolean state for showing & hiding password
  const [passwordShown, setPasswordShown] = useState(false);
  //password show
  const handlePasswordShow = () => {
    setPasswordShown(!passwordShown);
  };

  const { login } = useAuthContext();

  // Use of Formik
  //initial form values
  const initialValues = {
    email: "",
    password: "",
  };
  //form validation using schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Your Email is required"),
    password: Yup.string()
      .min(8, "Password is too weak")
      .required("Password is required"),
  });
  //validation using yup method

  // onsubmit form event
  const onSubmit = async (values, { resetForm }) => {
    //making a post request for login using axios
    login(values);
    resetForm({ values: "" });
  };
  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      <h1 className="text-rose-700 font-sans font-semibold text-2xl tracking-wider flex gap-1 items-center">
        <Key size={20} color="currentColor" />
        Login
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {(formik) => {
          const { errors, touched, dirty, isValid } = formik;
          return (
            <Form className="w-full flex flex-col justify-center gap-4">
              <div className="relative">
                <div className="absolute top-2.5 left-0 flex items-center pl-3 text-gray-800 pointer-events-none">
                  <Envelope size={20} color="currentColor" />
                </div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`bg-gray-200 rounded-lg transition-all duration-300 border border-gray-700 text-gray-800 outline-none text-sm focus:border-gray-800 block w-full pl-10 p-2.5 placeholder:text-gray-800 placeholder:font-light ${
                    errors.email && touched.email ? "border-rose-700" : null
                  }`}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component={ErrMsg} />
              </div>

              <div className="relative">
                <div className="absolute top-2.5 left-0 flex items-center pl-3 text-gray-800 pointer-events-none">
                  <LockKey size={20} color="currentColor" />
                </div>
                {/* Icon for show || hide */}
                <div
                  onClick={handlePasswordShow}
                  className="absolute top-2.5 right-0 flex items-center pr-3 text-gray-800 cursor-pointer"
                >
                  {passwordShown ? (
                    <Eye size={20} color="currentColor" />
                  ) : (
                    <EyeClosed size={20} color="currentColor" />
                  )}
                </div>
                <Field
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`bg-gray-200 rounded-lg transition-all duration-300 border border-gray-700 text-gray-800 outline-none text-sm focus:border-gray-800 block w-full pl-10 p-2.5 placeholder:text-gray-800 placeholder:font-light ${
                    errors.password && touched.password
                      ? "border-rose-700"
                      : null
                  }`}
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component={ErrMsg} />
              </div>

              <div className="w-full mt-8 flex flex-col justify-center items-center gap-2">
                <button
                  type="submit"
                  disabled={!(dirty && isValid)}
                  className="px-14 cursor-pointer border border-gray-100 rounded-lg outline-none transition-all duration-300  hover:bg-rose-900 text-base font-semibold py-2 bg-rose-700 text-gray-100 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
