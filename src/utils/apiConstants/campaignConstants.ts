export const getCampaignUrl = (key: string, params: any = {}) => {
  switch (key) {
    case "GETCAMPAIGN":
      return `/campaigns`;
    case "UPDATE":
      return `/campaigns/${params.id}`;
    case "DELETE":
      return `/campaigns/${params.id}`;
    case "CREATE":
      return `/campaigns/create-campaign`;

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
