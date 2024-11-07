/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FC, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Form, redirect } from "react-router-dom";
import BuyerService from "../service/BuyerService";
import VehicleService from "../service/VehicleService";
import VehicleTransactionService from "../service/VehicleTransactionService";
import VehicleSellingTransactionService from "../service/VehicleSellingTransactionService";

export async function action({ request }: any) {
  const requestData = await request.formData();

  const customerCode = requestData.get("customer_code");
  const vehicleCode = requestData.get("vehicle_code");
  const transactionCode = requestData.get("transaction_code");
  // const customerType = "seller";
  const transactionDate = requestData.get("date");
  const transactionPrice = parseFloat(requestData.get("tran_price"));
  const licenseSubmit = requestData.get("license_submit") === "1";
  const changingLetterSubmit = requestData.get("changing_letter") === "1";
  const nicSubmit = requestData.get("nic_photocopy") === "1";
  const insuranceSubmit = requestData.get("insurance") === "1";
  const deletionLetterSubmit = requestData.get("deletion_letter") === "1";
  const numberPlateSubmit = requestData.get("number_plate") === "1";

  const commaSeperatedPrice = transactionPrice.toLocaleString();

  const values = {
    buyerCode: { code: transactionCode },
    customer: { code: customerCode },
    vehicleMaster: { code: vehicleCode },
    // customerType: customerType,
    sellingTransactionDate: transactionDate,
    isLicense: licenseSubmit,
    isChangingLetter: changingLetterSubmit,
    isNicSubmitted: nicSubmit,
    isInsurance: insuranceSubmit,
    sellingPrice: commaSeperatedPrice,
    isDeletionLetter: deletionLetterSubmit,
    isNumberPlate: numberPlateSubmit,
  };

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("BizX_accessToken")}`;

  try {
    await VehicleSellingTransactionService.create(values);
    // timeoutId = setTimeout(() => {
    //   location.reload();
    // }, 1200);

    // toast.success("Transaction successful");
    return redirect("/intro/seller-invoice");
  } catch (err) {
    return toast.error("Transaction failed");
  }
}

const InvoiceFormThree: FC = () => {
  const [searchLetter, setSearchLetter] = useState("");
  const [customerCode, setCustomerCode] = useState<any>(null);
  const [searchData, setSearchData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [visibleList, setVisibleList] = useState(true);

  const [customerData, setCustomerData] = useState<any>([]);
  const [vehicleData, setVehicleData] = useState<any>([]);
  const [buyingTransactionData, setBuyingTransactionData] = useState<any>([]);

  const [vehicleCode, setVehicleCode] = useState<any>(null);
  const [searchPlateLetter, setSearchPlateLetter] = useState("");
  const [searchVehicleData, setSearchVehicleData] = useState([]);
  const [searchVehicleLoading, setSearchVehicleLoading] = useState(false);
  const [visibleVehicleList, setVisibleVehicleList] = useState(true);

  const handleCustomerInputChange = async (e: any) => {
    const searchKey = e.target.value;
    setSearchLetter(searchKey);
    setSearchLoading(true);
    const res = await BuyerService.search(searchKey);
    console.log(res);
    setVisibleList(true);
    setSearchData(res);
    setSearchLoading(false);
  };

  useEffect(() => {
    // console.log(customerCode);
  }, [
    customerCode,
    searchVehicleData,
    vehicleCode,
    customerData,
    vehicleData,
    buyingTransactionData,
  ]);

  const handleVehicleInputChange = async (e: any) => {
    const searchKey = e.target.value;
    setSearchPlateLetter(searchKey);
    setSearchVehicleLoading(true);
    const res = await VehicleService.search(searchKey);
    const tran_res = await VehicleTransactionService.search(searchKey);
    console.log(res);
    console.log(tran_res);
    setVisibleList(true);
    setSearchVehicleData(res);
    setSearchVehicleLoading(false);
    setBuyingTransactionData(tran_res);
  };

  console.log(buyingTransactionData);

  // const handleBuyingTransactionVehicleInputChange = async (e: any) => {
  //   const searchKey = e.target.value;
  //   setSearchPlateLetter(searchKey);
  //   setSearchVehicleLoading(true);
  //   const res = await VehicleService.search(searchKey);
  //   console.log(res);
  //   setVisibleList(true);
  //   setSearchVehicleData(res);
  //   setSearchVehicleLoading(false);
  // };

  console.log(customerCode);
  console.log(vehicleData);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="fixed w-3/4 p-5 text-xl text-center text-white bg-formHeaderBg font-roboto-bold">
        Seller Invoice
      </h1>
      <Form className="w-full p-4 mt-20 bg-formBg" method="post" replace>
        <div className="grid w-full gap-6 mb-6 md:grid-cols-2">
          {/* <div className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Buyer
            </label>
          </div>
          <div className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700">
            <input
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
            >
              Seller
            </label>
          </div> */}
          <div>
            <label
              htmlFor="customer_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customer_name"
              value={searchLetter}
              onChange={handleCustomerInputChange}
              name="customerName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
            {searchLoading ? (
              <h1 className={`${searchLetter === "" && "hidden"}`}>
                Loading...
              </h1>
            ) : (
              <ul
                onClick={() => setVisibleList(false)}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  (visibleList == false || searchLetter == "") && "hidden"
                }`}
              >
                {searchData.map((cus: any) => {
                  return (
                    <>
                      <li
                        className="p-2 border cursor-pointer hover:bg-formHeaderBg hover:text-white"
                        onClick={() => {
                          setSearchLetter(`${cus.firstName} ${cus.secondName}`);
                          setCustomerCode(cus.code);
                          setCustomerData(cus);
                        }}
                        key={cus.code}
                      >
                        {cus.firstName} {cus.secondName}
                      </li>
                      <input
                        type="hidden"
                        name="customer_code"
                        value={customerCode}
                      />
                    </>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <label
              htmlFor="no_plate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number Plate
            </label>
            <input
              type="text"
              id="no_plate"
              value={searchPlateLetter}
              onChange={handleVehicleInputChange}
              name="noPlate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
            {searchVehicleLoading ? (
              <h1 className={`${searchPlateLetter === "" && "hidden"}`}>
                Loading...
              </h1>
            ) : (
              <ul
                onClick={() => {
                  setVisibleVehicleList(false);
                  setVisibleList(false);
                }}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  (visibleVehicleList == false || searchPlateLetter == "") &&
                  "hidden"
                }`}
              >
                {searchVehicleData.map((veh: any) => {
                  return (
                    <>
                      <li
                        className="p-2 border cursor-pointer hover:bg-formHeaderBg hover:text-white"
                        onClick={() => {
                          setSearchPlateLetter(`${veh.noPlate}`);
                          setVehicleCode(veh.code);

                          setVehicleData(veh);
                        }}
                        key={veh.code}
                      >
                        {veh.noPlate}
                      </li>
                      <input
                        type="hidden"
                        name="vehicle_code"
                        value={vehicleCode}
                      />
                    </>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Vehicle Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={vehicleData?.model}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          {/* {buyingTransactionData.map((tr: any) => {
            return (
              <div>
                <label
                  htmlFor="model"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Buyer
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={tr?.customer?.secondName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John"
                  required
                />
                <input type="hidden" name="transaction_code" value={tr?.code} />
              </div>
            );
          })} */}

          {buyingTransactionData.length !== 0 && (
            <div>
              <label
                htmlFor="model"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Buyer
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={
                  [...buyingTransactionData].reverse()[0]?.customer.secondName
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
              <input
                type="hidden"
                name="transaction_code"
                value={[...buyingTransactionData].reverse()[0]?.code}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
          )}

          {/* {buyingTransactionData && (
            <input
              type="hidden"
              name="transaction_code"
              value={buyingTransactionData.reverse().at(0)?.code}
            />
          )} */}

          {/* <div>
            <label
              htmlFor="no_plate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number Plate
            </label>
            <input
              type="text"
              id="no_plate"
              name="no_plate"
              value={vehicleData?.noPlate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Doe"
              required
            />
          </div> */}
          <div>
            <label
              htmlFor="chessis"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Chessis Number
            </label>
            <input
              type="text"
              id="chessis"
              name="chessis"
              value={vehicleData?.servicePeriod}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="engine"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Engine number
            </label>
            <input
              type="tel"
              id="engine"
              name="engine_no"
              value={vehicleData?.serviceKm}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
        </div>

        {/* Transaction details */}
        <br />
        <div className="grid w-full grid-cols-2 gap-6 mb-6">
          {/* <div>
            <label
              htmlFor="transaction_id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Transaction ID
            </label>
            <input
              type="text"
              id="transaction_id"
              name="transaction_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="971362286V"
              required
            />
          </div> */}
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Transaction date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="tran_price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Transaction price
            </label>
            <input
              type="text"
              id="tran_price"
              name="tran_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Submitted Documents
          </h3>
          <ul className="w-2/4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="license"
                  type="checkbox"
                  name="license_submit"
                  value="1"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="license"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Licence
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="changingLetter"
                  type="checkbox"
                  name="changing_letter"
                  value="1"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="changingLetter"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Owner's changing letter
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="NIC"
                  type="checkbox"
                  value="1"
                  name="nic_photocopy"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="NIC"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  NIC photocopy
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="insurance"
                  type="checkbox"
                  value="1"
                  name="insurance"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="insurance"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Insurance
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="deletion_letter"
                  type="checkbox"
                  value="1"
                  name="deletion_letter"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="deletion_letter"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Deletion Letter
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="number_plate"
                  type="checkbox"
                  value="1"
                  name="number_plate"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="number_plate"
                  className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
                >
                  Number Plate
                </label>
              </div>
            </li>
          </ul>
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

export default InvoiceFormThree;
