/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import VehicleSellingTransactionService from "../service/VehicleSellingTransactionService";

const Dashboard: FC = () => {
  const {
    data: sellerInvoiceData,
    isLoading: isSellerInvoiceDataLoading,
    // isSuccess: isSellerInvoiceDataSuccesss,
  } = useQuery({
    queryKey: ["seller-invoice-data", 1],
    queryFn: async () => {
      const transactions = VehicleSellingTransactionService.getAll();
      return transactions;
    },
  });

  const [plateNo, setPlateNo] = useState("");
  const [buyerNic, setBuyerNic] = useState("");
  const [sellerNic, setSellerNic] = useState("");

  return (
    <section className="w-full min-h-screen p-5 bg-primaryBg">
      <div className="mb-8 text-center">
        <span className="text-6xl font-roboto-bold text-primaryBtn">
          {" "}
          WHEELS{" "}
        </span>
        <span className="text-4xl font-roboto-bold">DASHBOARD</span>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-roboto-bold">SELLER INFORMATION</h1>
      </div>

      <div className="relative overflow-x-auto mt-14">
        <div className="flex gap-10 mb-6">
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search By Number Plate"
              onChange={(e) => setPlateNo(e.target.value)}
              value={plateNo}
              required
            />
            <hr className="h-[2.25px]" />
          </div>

          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search By Seller NIC"
              onChange={(e) => setSellerNic(e.target.value)}
              value={sellerNic}
              required
            />
            <hr className="h-[2.25px]" />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search By Buyer NIC"
              onChange={(e) => setBuyerNic(e.target.value)}
              value={buyerNic}
              required
            />
          </div>
        </div>

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
          <table className="w-full overflow-x-scroll overflow-y-scroll text-sm text-left text-gray-500 scrollbar-thin scrollbar-webkit rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Seller Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller NIC
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Number Plate
                </th>
                <th scope="col" className="px-6 py-3">
                  Selling Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Selling Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Buyer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Buyer NIC
                </th>
                <th scope="col" className="px-6 py-3">
                  Buying Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Buying Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Buyer Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {sellerInvoiceData?.transaction
                ?.filter((tran: any) => {
                  if (plateNo === "" && buyerNic === "" && sellerNic === "")
                    return [];
                  if (plateNo !== "") {
                    return tran.vehicleMaster.noPlate
                      .toLowerCase()
                      .includes(plateNo.toLowerCase());
                  } else if (buyerNic !== "") {
                    return tran.vehicleTransaction.customer.nicNumber
                      .toLowerCase()
                      .includes(buyerNic.toLowerCase());
                  } else if (sellerNic !== "") {
                    return tran.customer.nicNumber
                      .toLowerCase()
                      .includes(sellerNic.toLowerCase());
                  }
                })
                .map((tr: any) => {
                  return (
                    <tr
                      key={tr.code}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {tr.customer.firstName + " " + tr.customer.secondName}
                      </th>
                      <td className="px-6 py-4">{tr.customer.nicNumber}</td>
                      <td className="px-6 py-4">{tr.customer.phone1}</td>
                      <td className="px-6 py-4">{tr.vehicleMaster.model}</td>
                      <td className="px-6 py-4">
                        {tr.vehicleMaster.vehicleBrand?.name}
                      </td>
                      <td className="px-6 py-4">{tr.vehicleMaster.noPlate}</td>
                      <td className="px-6 py-4">{tr.sellingPrice}</td>
                      <td className="px-2 py-4">{tr.sellingTransactionDate}</td>
                      <td className="px-6 py-4">
                        {tr.vehicleTransaction.customer.secondName}
                      </td>
                      <td className="px-6 py-4">
                        {tr.vehicleTransaction.customer.nicNumber}
                      </td>
                      <td className="px-6 py-4">
                        {tr.vehicleTransaction.buyingPrice}
                      </td>
                      <td className="px-2 py-4">
                        {tr.vehicleTransaction.buyingTransactionDate}
                      </td>
                      <td className="px-6 py-4">
                        {tr.vehicleTransaction.customer.phone1}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
