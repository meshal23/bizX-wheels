/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";

// import { IoReturnUpBack } from "react-icons/io5";
import { RiArrowGoBackLine } from "react-icons/ri";
import VehicleSellingTransactionService from "../service/VehicleSellingTransactionService";
// import { MdPrint } from "react-icons/md";
// import { FaFileDownload } from "react-icons/fa";

const SingleSellingTransactionForWeb: FC = () => {
  const params = useParams();
  let singleTransaction;

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
    console.log("loading ....");
  }

  if (isSellerInvoiceDataSuccesss) {
    console.log(sellerInvoiceData);
    console.log(params.id);

    singleTransaction = sellerInvoiceData.transaction.find(
      (tr: any) => tr.code === params.id
    );
  }

  console.log(singleTransaction);

  return (
    <section className="w-full min-h-screen overflow-y-hidden bg-primaryBg">
      <h1 className="flex gap-10 p-3 m-3 text-2xl text-center text-white bg-formHeaderBg font-roboto-bold">
        <NavLink to="/intro/buyer-invoice" className="mt-1">
          <RiArrowGoBackLine />
        </NavLink>
        Seller Invoice Details
      </h1>

      <div className="flex items-center justify-center w-full mt-10 ">
        <div className="relative w-3/4 p-3 shadow-md h-[500px] bg-formBg">
          {/* <div className="absolute flex gap-4 p-3 right-2 ">
            <MdPrint size={24} />
            <FaFileDownload size={24} />
          </div> */}

          <h1 className="text-xl text-center font-roboto-bold">
            Seller Information
          </h1>

          {isSellerInvoiceDataSuccesss && singleTransaction && (
            <div>
              <div className="mx-10">
                <p className="tracking-wider ">
                  Name : {singleTransaction.customer.firstName}{" "}
                  {singleTransaction.customer.secondName}
                  {/* Name: {transaction.customer.firstName}{" "} */}
                  {/* {transaction.customer.secondName} */}
                </p>
                <p className="tracking-wider ">
                  Code : {singleTransaction.customer.code}
                  {/* Code : {transaction.customer.code} */}
                </p>
                <hr className="h-[1.25px] my-8 bg-gray-300 border-0" />
                <div className="flex justify-between">
                  <p className="tracking-wider ">
                    NIC Number : {singleTransaction.customer.nicNumber}
                    {/* NIC Number : {transaction.customer.nicNumber} */}
                  </p>
                  <p className="tracking-wider ">
                    Verified Status :{" "}
                    {singleTransaction.customer.isVerified == "1"
                      ? "Verified"
                      : "Not Verified"}
                    {/* {transaction.customer.isVerified == "1"
                    ? "Verified"
                    : "Not Verified"} */}
                  </p>
                </div>
                <hr className="h-[1.25px] my-8 bg-gray-300 border-0" />
                <p className="tracking-wider ">
                  Buyer Address : {singleTransaction.customer.notes}
                  {/* Buyer Address : {transaction.customer.notes} */}
                </p>
                <hr className="h-[1.25px] my-8 bg-gray-300 border-0" />
              </div>
              <div className="mx-10">
                <h1 className="text-xl text-center font-roboto-bold">
                  Vehicle Information
                </h1>

                <div className="relative mt-3 overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Vehicle Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Number Plate
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Vehicle Model
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {singleTransaction.vehicleMaster.code}
                          {/* {transaction.vehicleMaster.code} */}
                        </th>
                        <td className="px-6 py-4">
                          {singleTransaction.vehicleMaster.noPlate}
                          {/* {transaction.vehicleMaster.noPlate} */}
                        </td>
                        <td className="px-6 py-4">
                          {singleTransaction.vehicleMaster.model}
                          {/* {transaction.vehicleMaster.model} */}
                        </td>
                        <td className="px-6 py-4">
                          {singleTransaction.buyingPrice}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleSellingTransactionForWeb;
