/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class Vehicle {
  create = async (vehicle: any) => {
    const res = await axios({
      method: "post",
      url: `${API_URL}vehicle-master`,
      data: vehicle,
    }).catch((e) => {
      const { message } = e.response.data;
      if (message.errorInfo) throw message.errorInfo[2];
      else throw e.message;
    });

    return res.data;
  };

  getAll = async () => {
    const res = await axios({
      method: "get",
      url: `${API_URL}vehicle-master`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BizX_accessToken")}`,
      },
    }).catch((err) => {
      throw err.message;
    });

    return res.data;
  };

  search = async (keyword: any) => {
    const response = await axios({
      method: "get",
      url: `${API_URL}vehicle-master-search/${keyword}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BizX_accessToken")}`,
      },
    }).catch((e) => {
      throw e.message;
    });
    return response.data.vehicles;
  };

  edit = async (val: any, code: any) => {
    await axios({
      method: "put",
      url: `${API_URL}vehicle-master/${code}`,
      data: val,
    }).catch((e) => {
      const { message } = e.response.data;
      if (message.errorInfo) throw message.errorInfo[2];
      else throw e.message;
    });
  };
}

export default new Vehicle();
