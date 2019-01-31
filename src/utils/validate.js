export const validateUsername = (username) => {
  const allowed = /^[a-zA-Z0-9]+$/;
  return allowed.test(username);
};

export const validatePassword = () => {};
