export const getAdsUrl = (key: string, params: any = {}) => {
  switch (key) {
    case "GETADS":
      return `/ads`;
    case "UPDATE":
      return `/ads/${params.id}`;
    case "DELETE":
      return `/ads/${params.id}`;
    case "CREATE":
      return `/ads/createAd`;

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
