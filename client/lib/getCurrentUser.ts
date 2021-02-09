export let currentUser: string;

export const setCurrentUser = (token: string) => {
  currentUser = token;
};

export const GetCurrentUser = () => {
  return currentUser;
};
