import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import WalletAndBilling from "../pages/walletAndBilling/WalletAndBilling";
import AdCenter from "../pages/adCenter/AdCenter";
import Advertise from "../pages/advertise/Advertise";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/MainLayout";

const AdsRoutes = () => {
  return (
    <Routes>
      
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}

      <Route element={<PrivateRoute />} >
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="wallet" element={<WalletAndBilling />} />
          <Route path="createAd" element={<AdCenter />} />
          <Route path="advertise" element={<Advertise />} />
        </Route>
      </Route>

    </Routes>
  );
};

export default AdsRoutes;