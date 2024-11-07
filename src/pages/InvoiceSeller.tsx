/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomerModal from "../components/CustomerModal";

import { FaFileInvoiceDollar } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
// import VehicleTransactionService from "../service/VehicleTransactionService";
import PrintView from "../components/PrintView";
import VehicleSellingTransactionService from "../service/VehicleSellingTransactionService";
import { NavLink } from "react-router-dom";

const InvoiceSeller: FC = () => {
  // const [modal, setModal] = useState(false);
  const [printView, setPrintView] = useState(false);
  const [printViewData, setPrintViewData] = useState(null);

  // const handleShowModal = () => {
  //   setModal(true);
  // };

  // const handleCloseModal = () => {
  //   setModal(false);
  // };

  const {
    data: sellerInvoiceData,
    isLoading: isSellerInvoiceDataLoading,
    isSuccess: isSellerInvoiceDataSuccesss,
  } = useQuery({
    queryKey: ["seller-invoice-data", 1],
    queryFn: async () => {
      const transactions = VehicleSellingTransactionService.getAll();
      return transactions;
    },
  });

  if (isSellerInvoiceDataLoading) {
    console.log("loading transactions");
  }
  if (isSellerInvoiceDataSuccesss) {
    console.log(sellerInvoiceData);
  }

  return (
    <section className="relative grid w-full min-h-screen p-5 overflow-y-scroll scrollbar-thin scrollbar-webkit place-content-center bg-primaryBg">
      <h1 className="absolute w-full p-5 text-2xl text-center text-white transform -translate-x-1/2 top-12 left-1/2 bg-formHeaderBg font-roboto-bold">
        Seller Invoice
      </h1>

      <div className="absolute w-11/12 overflow-x-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {!printView && (
          // <button
          //   type="button"
          //   onClick={handleShowModal}
          //   className="text-white bg-formHeaderBg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
          // >
          //   <FaFileInvoiceDollar
          //     size={20}
          //     style={{ marginRight: 5, marginBottom: 2 }}
          //   />
          //   Add Invoice
          // </button>
          <NavLink
            to="/intro/create-seller-invoice"
            className="text-white bg-formHeaderBg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
          >
            <FaFileInvoiceDollar
              size={20}
              style={{ marginRight: 8, marginBottom: 2 }}
            />
            Add Invoice
          </NavLink>
        )}
        <div className="overflow-y-scroll scrollbar-thin scrollbar-webkit top-24 h-80">
          {printView && <PrintView transaction={printViewData} />}
          {isSellerInvoiceDataLoading ? (
            <div role="status" className="absolute left-1/2 top-2/4">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Seller Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vehicle Plate No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vehicle Model
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Previous Owner
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Previous Owner's Phone
                  </th>

                  {/* <th scope="col" className="px-6 py-3">
                  Licence
                </th>
                <th scope="col" className="px-6 py-3">
                  Changing Letter
                </th>
                <th scope="col" className="px-6 py-3">
                  NIC Photocopy
                </th>
                <th scope="col" className="px-6 py-3">
                  Insurance
                </th> */}
                </tr>
              </thead>
              <tbody>
                {sellerInvoiceData?.transaction
                  // .filter((type: any) => type.customerType === "seller")
                  .map((transaction: any, idx: any) => {
                    return (
                      <tr
                        key={idx}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <input
                            type="checkbox"
                            className="w-5 h-5 mr-3"
                            name=""
                            onChange={() => {
                              setPrintView((prev) => !prev);
                              setPrintViewData(transaction);
                            }}
                          />
                          {transaction.customer &&
                            transaction.customer.firstName +
                              " " +
                              transaction.customer.secondName}
                        </th>
                        <td className="px-6 py-4">
                          {transaction.vehicleMaster.noPlate}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.vehicleMaster.model}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.sellingTransactionDate}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.sellingPrice}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.vehicleTransaction.customer.firstName}{" "}
                          {transaction.vehicleTransaction.customer.secondName}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.vehicleTransaction.customer.phone1}
                        </td>
                        {/* <td className="px-6 py-4">
                          {transaction.isLicense === "1"
                            ? "submitted"
                            : "not submitted"}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.isChangingLetter === "1"
                            ? "submitted"
                            : "not submitted"}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.isNicSubmitted === "1"
                            ? "submitted"
                            : "not submitted"}
                        </td>
                        <td className="px-6 py-4">
                          {transaction.isInsurance === "1"
                            ? "submitted"
                            : "not submitted"}
                        </td> */}
                      </tr>
                    );
                  })}

                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr> */}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* <CustomerModal
        formName="seller-invoice"
        visible={modal}
        handleClose={handleCloseModal}
      /> */}
    </section>
  );
};

export default InvoiceSeller;
