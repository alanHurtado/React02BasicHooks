import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setForm(initialForm);
  };

  return {
    form,
    handleInputChange,
    reset
  };
};
