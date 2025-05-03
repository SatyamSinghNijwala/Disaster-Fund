// utils/api/feedback.js
import API from './index'; // ✅ VERY IMPORTANT

export const submitFeedback = (formData) => {
  return API.post('/feedback/create', formData);
};
