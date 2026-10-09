export const APP_CONFIG = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://172.18.208.14:8000/api',
    MAX_PIN_LENGTH: 6,      // Maximum length for PIN codes
    MIN_PASS_LENGTH: 8,     // Minimum length for passwords
    MAX_PASS_LENGTH: 20,    // Maximum length for passwords
};