import { redirect } from "react-router-dom";

export const validate = async () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    throw redirect("/login?error=credentials validation failed");
  }

  return null;
};
