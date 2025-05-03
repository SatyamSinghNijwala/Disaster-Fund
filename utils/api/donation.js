import API from '../api';

export const submitDonation = async (formData) => {
    return await API.post('/api/donation/create', formData); // ✅ correct path
};

