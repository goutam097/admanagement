export const getBudgetUrl = (key: string, params: any = {}) => {
  switch (key) {
    case "LIST":
      return `/budget/list`;

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
