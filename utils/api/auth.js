import API from "./index"; // ✅ correct import

export const registerUser = async (formData) => {
  return await API.post("/user/register", formData);
};
