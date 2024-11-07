/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";
import "../index.css";
import {
  Form,
  // useNavigate,
  useNavigation,
  // useActionData,
  redirect,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";
import { Animate } from "react-simple-animate";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export async function action({ request }: any) {
  const requestData = await request.formData();
  const username = requestData.get("username");
  const password = requestData.get("password");

  if (username === "" || password === "") {
    return toast.error("Username or password cannot be empty");
  }

  try {
    const res = await axios({
      method: "post",
      url: `${API_URL}login`,
      data: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("BizX_accessToken", res.data.accessToken);
    return redirect("/intro");
  } catch (error) {
    localStorage.setItem("isLoggedIn", "false");
    return toast.error("Credentials not valid");
  }
}

const Login: FC = () => {
  const state = useNavigation().state;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("message") !== "") {
      toast.success(searchParams.get("message"));
      setSearchParams({ message: "" });
    }
  }, [searchParams]);

  return (
    <section className="grid w-full min-h-screen place-content-center bg-primaryBg">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid max-w-screen-xl gap-8 px-4 py-8 mx-auto lg:py-16 lg:grid-cols-2 lg:gap-16">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-450px)" }}
          end={{ transform: "translateX(0)" }}
          easeType="ease-in-out"
        >
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl leading-none tracking-normal text-gray-900 font-roboto-extrabold font-r md:text-5xl lg:text-6xl dark:text-white">
              Welcome to BizX{" "}
              <span className="text-primaryBtn animate-pulse"> WHEELS</span>
            </h1>

            <p className="mt-6 mb-5 text-lg text-gray-500 font-roboto-normal lg:text-xl dark:text-gray-400">
              So why wait? Browse our fleet, and get your vehicle today. We look
              forward to serving you and helping you make the most of your next
              adventure!"
            </p>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(450px)" }}
          end={{ transform: "translateX(0)" }}
          easeType="ease-in-out"
        >
          <div>
            <div className="w-full p-6 space-y-8 rounded-lg shadow-xl bg-formBg lg:max-w-xl sm:p-8 ">
              <h2 className="p-4 text-2xl tracking-wide text-center text-white rounded-md font-roboto-bold bg-formHeaderBg">
                Log in to BizX Wheels
              </h2>
              <Form className="mt-8 space-y-6 bg-formBg" method="POST" replace>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-inputBorder  text-inputText text-sm rounded-lg focus:ring-blue-500 focus:border-inputBorderFocus placeholder:text-placeHolderText block w-full p-2.5 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-inputBorder  text-inputText text-sm rounded-lg focus:ring-blue-500 focus:border-inputBorderFocus placeholder:text-placeHolderText block w-full p-2.5"
                  />
                </div>

                <button
                  disabled={state === "submitting"}
                  onClick={() => setSearchParams({ message: "" })}
                  style={
                    state === "submitting" ? { opacity: 0.7 } : { opacity: 1 }
                  }
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-secondaryBtn hover:bg-secondaryBtnHover focus:ring-4 focus:ring-blue-300 sm:w-auto "
                >
                  {state === "submitting"
                    ? "Verifying credentials..."
                    : "Log in to your account"}
                </button>
              </Form>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Login;
