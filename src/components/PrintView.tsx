/* eslint-disable @typescript-eslint/no-explicit-any */

import { MdPrint } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";

import { NavLink } from "react-router-dom";
import SingleTransaction from "./SingleTransaction";
// import { useQuery } from "@tanstack/react-query";
// import VehicleTransactionService from "../service/VehicleTransactionService";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import CustomerModal from "./CustomerModal";

function PrintView({ transaction }: any) {
  const componentRef = useRef(null);

  // const [showInvoiceModel, setShowInvoiceModel] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: A4; }",
  });

  return (
    <>
      <div className="flex items-center justify-end w-full h-20 gap-5 p-6 bg-slate-300">
        {/* <button onClick={editView}>
          <BiSolidEdit size={25} />
        </button> */}
        {transaction.code.substring(0, 3) === "620" ? (
          <NavLink to={`/intro/transaction/edit-buyer/${transaction.code}`}>
            <BiSolidEdit size={25} />
          </NavLink>
        ) : (
          <NavLink to={`/intro/transaction/edit-seller/${transaction.code}`}>
            <BiSolidEdit size={25} />
          </NavLink>
        )}

        <NavLink to={`/intro/transaction/${transaction.code}`}>
          <BsFillEyeFill size={25} />
        </NavLink>

        <button onClick={handlePrint}>
          <MdPrint size={25} />
        </button>

        {/* <BsFillEyeFill size={25} onClick={() => setShowInvoiceModel(true)} /> */}

        {/* {showInvoiceModel && (
          <SingleTransaction ref={componentRef} transaction={transaction} />
        )} */}

        <div className="hidden">
          <SingleTransaction ref={componentRef} transaction={transaction} />
        </div>
      </div>

      {/* <CustomerModal
        formName="buyer-invoice"
        visible={true}
        handleClose={handleCloseModal}
      /> */}
    </>
  );
}

export default PrintView;
