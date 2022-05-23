import { useForm } from "../../hooks/useForm";
import { FormEvent, ChangeEvent } from "react";

export const SimpleForm = () => {
  const { form, handleInputChange, reset } = useForm({
    email: "alana",
    password: "holaeee",
    name: "alan",
  });
  const { name, email } = form;

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div>
      <p> Permite ejecutar efectos secundarios</p>
      <input
        type="lable"
        name="name"
        value={name}
        className="input"
        onChange={handleInputChange}
      />
      <input
        type="lable"
        name="email"
        value={email}
        className="input"
        onChange={handleInputChange}
      />

      <button className="button is-primary" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};
