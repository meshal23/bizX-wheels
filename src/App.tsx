import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Customer from "./pages/Customer";
import Login, { action as loginAction } from "./pages/Login";
import { validate } from "./authentication/authRequired";
import Seller from "./pages/Seller";
import Vehicle from "./pages/Vehicle";
import SideNavigation from "./layout/SideNavigation";
import Invoice from "./pages/Invoice";

import { action as customerAction } from "./components/CustomerForm";
import { action as sellerAction } from "./components/SellerForm";
import { action as vehicleAction } from "./components/AllVehiclesForm";
import { action as buyerInvoiceAction } from "./components/InvoiceFormTwo";
import { action as sellerInvoiceAction } from "./components/InvoiceFormThree";
import { action as editBuyerInvoiceAction } from "./components/EditBuyerInvoiceForm";
import { action as editSellerInvoiceAction } from "./components/EditSellerInvoiceForm";
import InvoiceSeller from "./pages/InvoiceSeller";
// import SingleTransaction from "./components/SingleTransaction";
import SingleTransactionForWeb from "./components/SingleTransactionForWeb";

import EditBuyerSellerInvoice from "./components/EditBuyerSellerInvoice";
import Dashboard from "./components/Dashboard";
import CreateBuyerVehicleAndInvoice from "./components/CreateBuyerVehicleAndInvoice";

// import RenderTransactionDataForWeb from "./components/RenderTransactionDataForWeb";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} action={loginAction} />

      <Route path="/intro" element={<SideNavigation />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await validate()}
        />
        <Route
          path="buyer"
          element={<Customer />}
          loader={async () => await validate()}
        />
        <Route
          path="create-buyer"
          element={<CreateBuyerVehicleAndInvoice />}
          action={customerAction}
          loader={async () => await validate()}
        />
        <Route
          path="seller"
          element={<Seller />}
          action={sellerAction}
          loader={async () => await validate()}
        />
        <Route
          path="vehicle"
          element={<Vehicle />}
          loader={async () => await validate()}
        />
        <Route
          path="create-vehicle"
          element={<CreateBuyerVehicleAndInvoice />}
          action={vehicleAction}
          loader={async () => await validate()}
        />
        <Route
          path="buyer-invoice"
          element={<Invoice />}
          loader={async () => await validate()}
        />
        <Route
          path="create-buyer-invoice"
          element={<CreateBuyerVehicleAndInvoice />}
          action={buyerInvoiceAction}
          loader={async () => await validate()}
        />
        <Route
          path="seller-invoice"
          element={<InvoiceSeller />}
          loader={async () => await validate()}
        />
        <Route
          path="create-seller-invoice"
          element={<CreateBuyerVehicleAndInvoice />}
          action={sellerInvoiceAction}
          loader={async () => await validate()}
        />
        <Route
          path="transaction/:id"
          element={<SingleTransactionForWeb />}
          loader={async () => await validate()}
        />
        <Route
          path="transaction/edit-buyer/:id"
          element={<EditBuyerSellerInvoice />}
          action={editBuyerInvoiceAction}
          loader={async () => await validate()}
        />
        <Route
          path="transaction/edit-seller/:id"
          element={<EditBuyerSellerInvoice />}
          action={editSellerInvoiceAction}
          loader={async () => await validate()}
        />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
