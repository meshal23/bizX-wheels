import { useNavigate, useLocation } from "react-router-dom";
import CustomerModal from "./CustomerModal";

function CreateBuyerVehicleAndInvoice() {
  const navigate = useNavigate();
  const location = useLocation();

  const formController = () => {
    if (location?.pathname.split("/").pop() === "create-buyer") {
      return (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="customer"
            handleClose={() => navigate("/intro/buyer")}
          />
        </div>
      );
    } else if (location?.pathname.split("/").pop() === "create-vehicle") {
      return (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="vehicle"
            handleClose={() => navigate("/intro/vehicle")}
          />
        </div>
      );
    } else if (location?.pathname.split("/").pop() === "create-buyer-invoice") {
      return (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="buyer-invoice"
            handleClose={() => navigate("/intro/buyer-invoice")}
          />
        </div>
      );
    } else if (
      location?.pathname.split("/").pop() === "create-seller-invoice"
    ) {
      return (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="seller-invoice"
            handleClose={() => navigate("/intro/seller-invoice")}
          />
        </div>
      );
    }
  };

  return <>{formController()}</>;
}

export default CreateBuyerVehicleAndInvoice;
