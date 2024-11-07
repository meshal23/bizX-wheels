/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FC, useState } from "react";
import { Form, redirect } from "react-router-dom";
import VehicleService from "../service/VehicleService";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import VehicleBrandService from "../service/VehicleBrandService";

import Select from "react-select";

let timeoutId;

export async function action({ request }: any) {
  const requestData = await request.formData();

  const vehicleNumber = requestData.get("vehicleNo");
  const brandCode = requestData.get("vehicle_brand");
  const vehicleModel = requestData.get("model");
  const vehicleNoPlate = requestData.get("no_plate");
  const vehicleChessis = requestData.get("chessis");
  const vehicleEngineNo = requestData.get("engine_no");
  //   const vehiclePrice = requestData.get("price");
  //   const sellerCode = requestData.get("sellerCode");

  const values = {
    vehicleNumber: vehicleNumber,
    // brandCode: brandCode,
    serviceKm: vehicleEngineNo,
    servicePeriod: vehicleChessis,
    model: vehicleModel,
    noPlate: vehicleNoPlate,
    // price: 1000000000,
    vehicleBrand: { code: brandCode },
    vehicleType: { code: Date.now() },
    customer: { code: Date.now() },
  };

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("BizX_accessToken")}`;

  try {
    await VehicleService.create(values);
    // timeoutId = setTimeout(() => {
    //   location.reload();
    // }, 1200);

    // toast.success("Vehicle added successfully");
    return redirect("/intro/vehicle");
  } catch (err) {
    return toast.error("Vehicle adding unsuccessful");
  }
}

clearInterval(timeoutId);

const AllVehiclesForm: FC = () => {
  const {
    data: vehicleBrandData,
    // isLoading: vehicleBrandIsLoading,
    isSuccess: vehicleBrandIsSuccess,
  } = useQuery({
    queryKey: ["vehicle-brand"],
    queryFn: async () => {
      const res = await VehicleBrandService.getAll();
      return res;
    },
  });

  let selectOptions;

  if (vehicleBrandIsSuccess) {
    // console.log(vehicleBrandData);
    selectOptions = vehicleBrandData.map((br: any) => ({
      label: br.name,
      value: br.code,
    }));
  }

  const [brandCode, setBrandCode] = useState<any>(null);

  const handleChange = (selectOptions: any) => {
    setBrandCode(selectOptions);
  };

  const selectCustomStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      textAlign: "left",
      marginTop: "9px",
      width: "536px",
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#121063" : "#fff",
    }),
  };

  console.log(brandCode);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="fixed w-3/4 p-5 text-xl text-center text-white bg-formHeaderBg font-roboto-bold">
        Add Vehicle
      </h1>
      <Form className="w-full p-4 mt-20 bg-formBg" method="post" replace>
        <div className="grid w-full gap-6 mb-6 md:grid-cols-2">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div>
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="model"
              name="vehicleNo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          {vehicleBrandIsSuccess && (
            <div className="">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="vehicle_brand"
              >
                Vehicle Brand
                <Select
                  value={brandCode}
                  onChange={handleChange}
                  options={selectOptions}
                  styles={selectCustomStyles}
                  name="vehicle_brand"
                  id="vehicle_brand"
                />
              </label>
            </div>
          )}

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
              name="no_plate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
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

          {/* <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seller Address
          </label>
          <textarea
            id="address"
            name="notes"
            rows={4}
            className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="284, cassim road, kalmunai-06"
          ></textarea> */}
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

export default AllVehiclesForm;
