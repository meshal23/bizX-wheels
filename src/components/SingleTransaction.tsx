/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useQuery } from "@tanstack/react-query";
// import { FC } from "react";
// import { useParams } from "react-router-dom";
// import VehicleTransactionService from "../service/VehicleTransactionService";

// import { IoReturnUpBack } from "react-icons/io5";
// import { MdPrint } from "react-icons/md";
// import { FaFileDownload } from "react-icons/fa";
import React from "react";

// import header from "/print/header.jpeg";
import headerWheels from "/print/headerWheels.png";
import footerWheels from "/print/footerWheels.png";

const SingleTransaction = React.forwardRef(({ transaction }: any, ref: any) => {
  console.log(transaction);
  return (
    // 98vh used for height for prevent 2 pdf pages to print
    <section ref={ref} className="w-full p-5 mt-2 h-[99vh] bg-primaryBg">
      {/* <h1 className="p-3 m-3 text-2xl text-center text-white bg-formHeaderBg font-roboto-bold">
        Buyer Invoice Details
      </h1> */}
      <div className="flex items-center justify-center w-full mt-0 ">
        {/* <NavLink to="/intro/buyer-invoice">
          <IoReturnUpBack className="text-white" size={25} />
          <p className="text-white tracing widest">Back to invoice</p>
        </NavLink> */}
        <div className="relative w-11/12 p-3  h-[900px] bg-formBg">
          {/* <div
            onClick={() => console.log(transaction)}
            className="absolute flex gap-4 p-3 right-2 "
          >
            <MdPrint size={24} />
            <FaFileDownload size={24} />
          </div> */}

          <img src={headerWheels} alt="header" />

          <h1 className="my-3 text-2xl text-center font-roboto-bold">
            {transaction.code.substring(0, 3) === "630"
              ? "Seller Invoice"
              : "Buyer Invoice"}
          </h1>
          {/* <h1>{transaction.code}</h1> */}
          {/* {isSuccess && singleTransaction && ( */}
          <div>
            <div className="mx-10">
              {transaction.code.substring(0, 3) === "630" && (
                <div className="">
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Seller Name:
                    </span>
                    {transaction.customer.firstName}{" "}
                    {transaction.customer.secondName}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Seller Address :{" "}
                    </span>{" "}
                    {transaction.customer.notes}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Seller NIC:{" "}
                    </span>{" "}
                    {transaction.customer.nicNumber}
                  </p>
                  <hr className="h-[1.25px] my-1 bg-gray-300 border-0" />
                </div>
              )}
              {/* Buyer Details */}
              {transaction.code.substring(0, 3) === "630" ? (
                <div className="">
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">Buyer Name</span>
                    :{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.customer.firstName +
                        " " +
                        transaction.vehicleTransaction.customer.secondName}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Buyer Address:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.customer.notes}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Buyer NIC:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.customer.nicNumber}
                  </p>
                  <hr className="h-[1.25px] my-1 bg-gray-300 border-0" />
                </div>
              ) : (
                <div className="">
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Buyer Name:{" "}
                    </span>{" "}
                    {transaction &&
                      transaction.customer.firstName +
                        " " +
                        transaction.customer.secondName}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Buyer Address:{" "}
                    </span>{" "}
                    {transaction && transaction.customer.notes}
                  </p>
                  <p className="tracking-wider ">
                    <span className="text-lg font-roboto-bold">
                      Buyer NIC:{" "}
                    </span>{" "}
                    {transaction && transaction.customer.nicNumber}
                  </p>
                  <hr className="h-[1.5px] my-1 bg-gray-300 border-1" />
                </div>
              )}
              {/* Vehicle Details */}
              {transaction.code.substring(0, 3) === "630" ? (
                <div className="">
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Model:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.vehicleMaster.model}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Registration Number:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.vehicleMaster
                        .vehicleNumber}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Chessis:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.vehicleMaster
                        .servicePeriod}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Engine Number:{" "}
                    </span>{" "}
                    {transaction.vehicleTransaction &&
                      transaction.vehicleTransaction.vehicleMaster.serviceKm}
                  </p>
                </div>
              ) : (
                <div className="">
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Model:{" "}
                    </span>{" "}
                    {transaction && transaction.vehicleMaster.model}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Registration Number:{" "}
                    </span>{" "}
                    {transaction && transaction.vehicleMaster.vehicleNumber}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Chessis:{" "}
                    </span>{" "}
                    {transaction && transaction.vehicleMaster.servicePeriod}
                  </p>
                  <p className="tracking-wider ">
                    {/* Code : {singleTransaction.customer.code} */}
                    <span className="text-lg font-roboto-bold">
                      Vehicle Engine Number:{" "}
                    </span>{" "}
                    {transaction && transaction.vehicleMaster.serviceKm}
                  </p>
                </div>
              )}
              {/* Documents Submitted */}
              <hr className="h-[1.5px] my-2 bg-gray-300 border-1" />
              <div className="flex gap-4">
                <div className="">
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Deletion Letter
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isDeletionLetter === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Number Plate
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isNumberPlate === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Transfer Paper
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isChangingLetter === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>

                <div className="">
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Identity
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isNicSubmitted === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      Insurance
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isInsurance === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className="w-40 font-medium text-gray-900 dark:text-gray-300"
                    >
                      License
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      readOnly
                      checked={transaction.isLicense === "1"}
                      className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              </div>
              <hr
                className={`h-[1.25px]  bg-gray-300 border-0 ${
                  transaction.code.substring(0, 3) === "630"
                    ? "mt-2 mb-4"
                    : "my-7"
                }`}
              />
              <div className="flex justify-between">
                <div className="flex flex-col items-center justify-center">
                  <div className="">.................................</div>
                  <div className="">Date</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="">..................................</div>
                  <div className="">Time</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="">...................................</div>
                  <div className="">Phone No</div>
                </div>
              </div>
              <hr
                className={`h-[1.25px]  bg-gray-300 border-0 ${
                  transaction.code.substring(0, 3) === "630" ? "my-4" : "my-6"
                }`}
              />
              <div className="flex justify-between">
                <div className="flex flex-col items-center justify-center">
                  <div className="">...................................</div>
                  <div className="">Buyer's Signature</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="">...................................</div>
                  <div className="">Witness</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="">....................................</div>
                  <div className="">Seller's Signature</div>
                </div>
              </div>
              <hr
                className={`h-[1.25px]  bg-gray-300 border-0 ${
                  transaction.code.substring(0, 3) === "630" ? "my-2" : "my-6"
                }`}
              />
              <div className="mb-2">
                <p className="text-sm text-gray-900 font-roboto-bold w-96 dark:text-gray-300">
                  Vehicle transfered within 14 days
                </p>
                <p className="text-sm text-gray-900 font-roboto-bold w-96 dark:text-gray-300">
                  Any problem regard with the vehicle/documents sorted out
                  within 14 days
                </p>
                <p className="text-sm text-gray-900 font-roboto-bold w-96 dark:text-gray-300">
                  {" "}
                  Vehicle Documents Checked before bought
                </p>
              </div>
              <hr
                className={`h-[1.25px]  bg-gray-300 border-0 ${
                  transaction.code.substring(0, 3) === "630" ? "my-4" : "my-6"
                }`}
              />
              {/* <div className="flex items-center mb-4">
                <label
                  htmlFor="default-checkbox"
                  className="font-medium text-gray-900 w-96 dark:text-gray-300"
                >
                  Vehicle transfered within 14 days
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div> */}
              {/* <div className="flex items-center mb-4">
                <label
                  htmlFor="default-checkbox"
                  className="font-medium text-gray-900 w-96 dark:text-gray-300"
                >
                  Any problem regard with the vehicle/documents sorted out
                  within 14 days
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div> */}
              {/* <div className="flex items-center mb-4">
                <label
                  htmlFor="default-checkbox"
                  className="font-medium text-gray-900 w-96 dark:text-gray-300"
                >
                  Vehicle Documents Checked before bought
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-6 h-5 text-blue-600 bg-gray-100 border-black rounded ms-5 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div> */}
            </div>
          </div>
          <img src={footerWheels} alt="footer" />
        </div>
      </div>
    </section>
  );
});

export default SingleTransaction;
