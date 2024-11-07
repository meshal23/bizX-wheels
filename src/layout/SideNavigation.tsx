import { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { activeStyles } from "../styles/ActiveNavLinkStyles";

import { FaUser } from "react-icons/fa";

import { FaCar } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const SideNavigation: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-1">
      <div className="flex flex-col w-1/5 min-h-screen gap-5 bg-secondaryBg">
        <NavLink to="/intro">
          <h1 className="w-full p-5 text-xl text-center bg-primaryBg font-roboto-extrabold">
            BizX <span className="text-primaryBtn animate-pulse">WHEELS</span>
          </h1>
        </NavLink>
        <div className="flex flex-col gap-3">
          <NavLink
            to="/intro"
            end
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaRegAddressCard size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Dashboard
            </span>
          </NavLink>
          <NavLink
            to="/intro/buyer"
            end
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaUser size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Customer
            </span>
          </NavLink>
          {/* <NavLink
            to="/intro/seller"
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaUserTie size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Seller
            </span>
          </NavLink> */}
          <NavLink
            to="/intro/vehicle"
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaCar size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Vehicle
            </span>
          </NavLink>
          <NavLink
            to="/intro/buyer-invoice"
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaFileInvoiceDollar size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Buyer Invoice
            </span>
          </NavLink>
          <NavLink
            to="/intro/seller-invoice"
            className="w-full p-3 rounded-[30px]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            <FaFileInvoiceDollar size={20} className="inline mb-1 mr-4" />
            <span className="text-lg tracking-wider font-roboto-normal">
              Seller Invoice
            </span>
          </NavLink>
        </div>
        <div
          className="flex w-full gap-3 py-3 tracking-widest cursor-pointer text-roboto-normal bg-slate-200 hover:bg-slate-300 text-formHeaderBg"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("BizX_accessToken");
            navigate("/?message=successfully logged out", { replace: true });
          }}
        >
          <span className="mt-1 ml-4">
            <MdLogout size={20} />
          </span>
          Logout
        </div>
      </div>
      <div className="w-4/5 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavigation;
