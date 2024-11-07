/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomerModal from "../components/CustomerModal";

import { IoIosAddCircle } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import VehicleService from "../service/VehicleService";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Vehicle: FC = () => {
  // const [modal, setModal] = useState(false);
  // const navigate = useNavigate();

  // const handleShowModal = () => {
  //   setModal(true);
  // };

  // const handleCloseModal = () => {
  //   setModal(false);
  // };

  const {
    data: vehicleData,
    isLoading: vehicleIsLoading,
    isError: vehicleIsError,
  } = useQuery({
    queryKey: ["vehicle"],
    queryFn: async () => {
      const vehicles = await VehicleService.getAll();
      return vehicles;
    },
  });

  console.log(vehicleData);

  if (vehicleIsError) {
    return toast.error("Failed to fetch vehicles");
  }

  return (
    <section className="relative grid w-full min-h-screen p-5 overflow-y-scroll scrollbar-thin scrollbar-webkit place-content-center bg-primaryBg">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="absolute w-full p-5 text-2xl text-center text-white transform -translate-x-1/2 top-12 left-1/2 bg-formHeaderBg font-roboto-bold">
        Vehicle Details
      </h1>
      {/* <button
        className="absolute right-0 p-2 mt-2 text-lg rounded-md font-roboto-normal"
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          navigate("/login?message=successfully logged out");
        }}
      >
        Logout
      </button> */}

      <div className="absolute w-3/4 overflow-x-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {/* <button
          type="button"
          onClick={handleShowModal}
          className="text-white bg-formHeaderBg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          <IoIosAddCircle
            size={20}
            style={{ marginRight: 5, marginBottom: 2 }}
          />
          Add Vehicle
        </button> */}

        <NavLink
          to="/intro/create-vehicle"
          className="text-white bg-formHeaderBg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
        >
          <IoIosAddCircle
            size={20}
            style={{ marginRight: 8, marginBottom: 2 }}
          />
          Add Invoice
        </NavLink>
        <div className="overflow-y-scroll scrollbar-thin scrollbar-webkit top-24 h-80">
          {vehicleIsLoading ? (
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
                    Vehicle model
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                  Vehicle no
                </th> */}
                  <th scope="col" className="px-6 py-3">
                    Vehicle Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number plate
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vehicle chessis
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vehicle engine no
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                  Vehicle price
                </th> */}
                </tr>
              </thead>
              <tbody>
                {vehicleData.vehicles.map((vehicle: any, idx: any) => {
                  return (
                    <tr
                      key={idx}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {vehicle.model}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {vehicle.vehicleBrand && vehicle.vehicleBrand.name}
                      </th>
                      {/* <td className="px-6 py-4">{vehicle.vehicleNumber}</td> */}
                      <td className="px-6 py-4">{vehicle.noPlate}</td>
                      <td className="px-6 py-4">{vehicle.servicePeriod}</td>
                      <td className="px-6 py-4">{vehicle.serviceKm}</td>
                      {/* <td className="px-6 py-4">{vehicle.price}</td> */}
                    </tr>
                  );
                })}

                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
        formName="vehicle"
        visible={modal}
        handleClose={handleCloseModal}
      /> */}
    </section>
  );
};

export default Vehicle;
