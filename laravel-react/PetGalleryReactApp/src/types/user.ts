export interface UserRegistrationFormData{
    pinMode: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    email: string;
    userName: string;
    password: string;
    pinCode: string;
}

export interface ApiResponse {
    errorNumber: number;
    errorMessage: string;
    error?: string;
}

export interface UserLoginFormData {
    userName: string;
    password: string;
}