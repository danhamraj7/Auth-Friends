import axios from "axios";

// A helper function so we don't have to keep repeating this
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  // .create gives us headers and anytime auth is called
  // it returns an axios instance.
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
