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
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/wallet"
        element={
          <PrivateRoute>
            <MainLayout>
              <WalletAndBilling />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/createAd"
        element={
          <PrivateRoute>
            <MainLayout>
              <AdCenter />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/advertise"
        element={
          <PrivateRoute>
            <MainLayout>
              <Advertise />
            </MainLayout>
          </PrivateRoute>
        }
      />

    </Routes>
  );
};

export default AdsRoutes;