/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class Seller {
  create = async (seller: any) => {
    const res = await axios({
      method: "post",
      url: `${API_URL}customer`,
      data: seller,
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
      url: `${API_URL}customer`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("BizX_accessToken")}`,
      },
    }).catch((e) => {
      throw e.message;
    });

    return res.data;
  };
}

export default new Seller();
