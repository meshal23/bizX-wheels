/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { FC } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Form, redirect, useActionData } from "react-router-dom";
import BuyerService from "../service/BuyerService";
import axios from "axios";

let timeoutId;

export async function action({ request }: any) {
  const requestData = await request.formData();

  const firstName = requestData.get("firstName");
  const lastName = requestData.get("secondName");
  const NIC = requestData.get("nicNumber");
  const phone = requestData.get("phone1");
  const address = requestData.get("notes");

  const values = {
    companyName: "",
    creditBalance: 0,
    creditDays: "",
    creditLimit: 0,
    customCode: "",
    customerAddresses: [
      {
        address: "",
        city: "",
        country: "Srilanka",
        district: "",
        email: "",
        firstName: "",
        isActive: true,
        phone1: phone,
        phone2: "",
        postBox: "",
        secondName: "",
      },
    ],
    customerContacts: [],
    customerType: null,
    email: "",
    fax: "",
    isActive: true,
    isVerified: 0,
    passportNumber: "",
    rating: 0,
    route: "",
    website: "",
    firstName: firstName,
    secondName: lastName,
    nicNumber: NIC,
    phone1: phone,
    phone2: "",
    notes: address,
  };

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("BizX_accessToken")}`;

  try {
    await BuyerService.create(values);

    // timeoutId = setTimeout(() => {
    //   location.reload();
    // }, 1200);
    // toast.success("Buyer created successfull");
    return redirect("/intro/buyer");
  } catch (err) {
    return toast.error("failed to create a customer");
  }
}

clearTimeout(timeoutId);

const CustomerForm: FC = () => {
  const formActionData = useActionData();
  console.log(formActionData);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="fixed w-3/4 p-5 text-xl text-center text-white bg-formHeaderBg font-roboto-bold">
        Customer details
      </h1>

      <Form className="w-full p-4 mt-20 bg-formBg" method="post" replace>
        <div className="grid w-full gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="secondName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="NIC"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              NIC No
            </label>
            <input
              type="text"
              id="NIC"
              name="nicNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          {/* <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Website URL
            </label>
            <input
              type="text"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="flowbite.com"
              required
            />
          </div> */}
          {/* <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=""
              required
            />
          </div> */}
        </div>
        <div className="">
          {/* <div className="w-full mb-6 ">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div> */}
          {/* <div className="w-full mb-6 ">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="w-full mb-6 ">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div> */}

          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Customer Address
          </label>
          <textarea
            id="address"
            name="notes"
            rows={4}
            className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white w-full bg-secondaryBtn hover:bg-secondaryBtnHover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </Form>
    </>
  );
};

export default CustomerForm;
