// Central API base URL — set VITE_API_URL in your .env file
// Local dev:      VITE_API_URL=http://localhost:5005
// Production:     VITE_API_URL=https://your-backend-domain.com

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5005';

export default API_BASE_URL;
