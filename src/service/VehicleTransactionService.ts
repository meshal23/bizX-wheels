/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class VehicleTransaction {
  create = async (transaction: any) => {
    const res = await axios({
      method: "post",
      url: `${API_URL}vehicle-transaction`,
      data: transaction,
    }).catch((err) => {
      const { message } = err.response.data;
      if (message.errorInfo) throw message.errorInfo[2];
      else throw err.message;
    });

    return res.data;
  };

  getAll = async () => {
    const res = await axios({
      method: "get",
      url: `${API_URL}vehicle-transaction`,
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
      url: `${API_URL}vehicle-transaction-search/${keyword}`,
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
      url: `${API_URL}vehicle-transaction/${code}`,
      data: val,
    }).catch((e) => {
      const { message } = e.response.data;
      if (message.errorInfo) throw message.errorInfo[2];
      else throw e.message;
    });
  };
}

export default new VehicleTransaction();
