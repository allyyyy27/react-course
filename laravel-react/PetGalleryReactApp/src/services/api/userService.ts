import { APP_CONFIG } from "../../config/constants";
import type { 
    UserRegistrationFormData, 
    UserLoginFormData,
    ApiResponse 
} from "../../types/user";

export const registerUser = async (formData: UserRegistrationFormData) : Promise<ApiResponse> => {
    const payload = {
        ...formData,
        pinCode: formData.pinCode ? parseInt(formData.pinCode, 10) : 0,
    };

    // FIXED: Added forward slash before userRegister
    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/userRegister`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        const rawText = await response.text();
        console.error('Non-JSON response received:', rawText);
        throw new Error(`Server returned status ${response.status} instead of JSON. Check endpoint URL or backend logs.`);
    }

    const data: ApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(data.errorMessage || 'Server error occurred during registration.');
    }

    return data;
};

export const loginUser = async (formData: UserLoginFormData): Promise<ApiResponse> => {
    const payload = {
        ...formData,
    };

    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/userLogin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        const rawText = await response.text();
        console.error('Non-JSON response received:', rawText);
        throw new Error(`Server returned status ${response.status} instead of JSON.`);
    }

    const data: ApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(data.errorMessage || 'Server error occurred during login.');
    }

    return data;
};




export const checkBackendPing = async () => {
  try {
    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/ping`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to connect to backend:', error);
    throw error;
  }
};