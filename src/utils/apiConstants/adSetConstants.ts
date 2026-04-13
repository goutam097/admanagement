export const getAdSetUrl = (key: string, params: any = {}) => {
  switch (key) {
    case "GETADSET":
      return `/adsets`;
    case "UPDATE":
      return `/adsets/${params.id}`;
    case "DELETE":
      return `/adsets/${params.id}`;
    case "CREATE":
      return `/adsets/createAdset`;

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
