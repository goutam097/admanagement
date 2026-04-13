import { getAdsUrl } from "./apiConstants/adsConstants";
import { getAdSetUrl } from "./apiConstants/adSetConstants";
import { getAuthUrl } from "./apiConstants/authConstants";
import { getBudgetUrl } from "./apiConstants/budgetConstants";
import { getCampaignUrl } from "./apiConstants/campaignConstants";

export const getApiHeaders = () => {
  const token = localStorage.getItem("accessToken") || null;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const getURL = (key: string, params = {}) => {
  const [moduleName, apiName] = key.split(".");
  switch (moduleName) {
    case "AUTH":
      return getAuthUrl(apiName, params);
      case "CAMPAIGN":
      return getCampaignUrl(apiName, params);
      case "ADSET":
      return getAdSetUrl(apiName, params);
      case "ADS":
      return getAdsUrl(apiName, params);
      case "BUDGET":
      return getBudgetUrl(apiName, params);

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
