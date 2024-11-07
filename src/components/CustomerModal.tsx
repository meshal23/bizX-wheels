import { FC } from "react";
import CustomerForm from "./CustomerForm";
import SellerForm from "./SellerForm";
// import VehicleForm from "./VehicleForm";
// import InvoiceForm from "./InvoiceForm";
import AllVehiclesForm from "./AllVehiclesForm";
import InvoiceFormTwo from "./InvoiceFormTwo";
import InvoiceFormThree from "./InvoiceFormThree";
import EditBuyerInvoiceForm from "./EditBuyerInvoiceForm";
import EditSellerInvoiceForm from "./EditSellerInvoiceForm";

interface modalProps {
  visible: boolean;
  formName: string;
  handleClose: () => unknown;
}

const CustomerModal: FC<modalProps> = ({
  visible = false,
  handleClose = () => (visible = true),
  formName,
}) => {
  const onClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target && "id" in e.target && e.target.id === "container") {
      return handleClose();
    }
  };

  const renderForm = (formName: string) => {
    if (formName === "customer") {
      return <CustomerForm />;
    } else if (formName === "seller") {
      return <SellerForm />;
    } else if (formName === "vehicle") {
      return <AllVehiclesForm />;
    } else if (formName === "buyer-invoice") {
      return <InvoiceFormTwo />;
    } else if (formName === "buyer-invoice-edit") {
      return <EditBuyerInvoiceForm />;
    } else if (formName === "seller-invoice-edit") {
      return <EditSellerInvoiceForm />;
    } else {
      return <InvoiceFormThree />;
    }
  };

  return (
    <>
      {visible && (
        <div
          onClick={onClose}
          id="container"
          className={`fixed inset-0 flex items-center justify-center w-full bg-black bg-opacity-40 backdrop-blur-md ${
            visible && "animate-slide-up"
          }`}
        >
          <div className="w-3/4 overflow-y-scroll h-3/4 bg-slate-100 scrollbar-thin scrollbar-webkit">
            {renderForm(formName)}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerModal;
