import API from '../api';

export const submitContact = async (formData) => {
  return await API.post('/api/contact/create', formData);
};
