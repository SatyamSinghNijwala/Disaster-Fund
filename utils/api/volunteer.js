import API from './index'; // ✅ correct import inside api folder

export const submitVolunteer = (formData) => {
  return API.post('/volunteer/create', formData);
};
