import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import WalletAndBilling from "../pages/walletAndBilling/WalletAndBilling";
import AdCenter from "../pages/adCenter/AdCenter";
import Advertise from "../pages/advertise/Advertise";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/MainLayout";
import { PaymentHistory } from "../pages/paymentHistory/PaymentHistory";
import ViewCampaign from "../pages/viewCampaign/ViewCampaign";
import ViewAdSet from "../pages/viewAdset/ViewAdSet";
import ViewAd from "../pages/viewAd/ViewAd";
import CampaignForm from "../pages/campaignForm/CampaignForm";
import AdSetForm from "../pages/adSetForm/AdSetForm";
import AdForm from "../pages/adForm/AdForm";
import CampaignDetails from "../pages/campaignDetails/CampaignDetails";

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
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="campaign/view/:id" element={<ViewCampaign />} />
          <Route path="adset/view/:id" element={<ViewAdSet />} />
          <Route path="ad/view/:id" element={<ViewAd />} />
          <Route path="campaign" element={<CampaignForm />} />
          <Route path="adset/:id?" element={<AdSetForm />} />
          <Route path="ad/:id?" element={<AdForm />} />
          <Route path="campaign-details" element={<CampaignDetails />} />

        </Route>
      </Route>

    </Routes>
  );
};

export default AdsRoutes;