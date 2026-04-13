export const getAuthUrl = (key: string, params: any = {}) => {
  switch (key) {
    case "LOGIN":
      return `/auth/login`;
    case "DETAILS":
      return `/user-profile/details`;
    case "MEMBERSHIP":
      return `/auth/membership-type-list`;

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
