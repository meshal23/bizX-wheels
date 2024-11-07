/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class Buyer {
  create = async (buyer: any) => {
    const res = await axios({
      method: "post",
      url: `${API_URL}customer`,
      data: buyer,
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
      url: `${API_URL}customer`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BizX_accessToken")}`,
      },
    }).catch((e) => {
      throw e.message;
    });

    return res.data;
  };

  search = async (keyword: any) => {
    const response = await axios({
      method: "get",
      url: `${API_URL}customer-search/${keyword}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BizX_accessToken")}`,
      },
    }).catch((e) => {
      throw e.message;
    });
    return response.data.customer;
  };
}

export default new Buyer();
