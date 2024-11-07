import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class VehicleBrand {
  getAll = async () => {
    const response = await axios({
      method: "get",
      url: `${API_URL}vehicle-brand`,
    }).catch((e) => {
      throw e.message;
    });
    return response.data.brand;
  };
}

export default new VehicleBrand();
