import { useNavigate, useParams } from "react-router-dom";
import CustomerModal from "./CustomerModal";

function EditBuyerSellerInvoice() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      {params.id?.substring(0, 3) === "620" ? (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="buyer-invoice-edit"
            handleClose={() => navigate("/intro/buyer-invoice")}
          />
        </div>
      ) : (
        <div className="w-full h-[80vh] p-5 m-3">
          <CustomerModal
            visible={true}
            formName="seller-invoice-edit"
            handleClose={() => navigate("/intro/seller-invoice")}
          />
        </div>
      )}
    </>
  );
}

export default EditBuyerSellerInvoice;
