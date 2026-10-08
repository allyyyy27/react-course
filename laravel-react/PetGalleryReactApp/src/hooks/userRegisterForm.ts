import { useState } from 'react';
import { registerUser } from '../services/api/userService';
import type { UserRegistrationFormData } from '../types/user';

const initialFormState: UserRegistrationFormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  suffix: '',
  email: '',
  userName: '',
  password: '',
  pinCode: '',
};

export const userRegisterForm = (onRegistrationSuccess?: () => void) => {
  const [formData, setFormData] = useState<UserRegistrationFormData>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerUser(formData);

      if (response.errorNumber == 200 || response.errorMessage === 'SUCCESS') {
        setModalState({
          isOpen: true,
          type: 'success',
          message: 'Just a few more steps left. Please go on to login.',
        });
        setFormData(initialFormState);
      } else {
        setModalState({
          isOpen: true,
          type: 'error',
          message: response.errorMessage || 'Registration failed.',
        });
      }
    } catch (err: any) {
      setModalState({
        isOpen: true,
        type: 'error',
        message: err.message || 'An unexpected error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    const isSuccess = modalState.type === 'success';
    setModalState((prev) => ({ ...prev, isOpen: false }));
    if (isSuccess && onRegistrationSuccess) {
      onRegistrationSuccess();
    }
  };

  return {
    formData,
    loading,
    modalState,
    handleChange,
    handleSubmit,
    closeModal,
  };
};