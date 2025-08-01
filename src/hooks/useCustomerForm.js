import { useState } from "react";
import { formatCpf } from "../utils/formatters";
import { isValidEmail } from "../utils/validators";

export default function useCustomerForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    cpf: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    district: "",
    zipCode: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeState = (value) => {
    setFormData((prev) => ({
      ...prev,
      state: value.nome,
    }));
  };

  const handleChangeCpf = (e) => {
    const { name, value } = e.target;

    let finalValue = value;
    if (name === "cpf") {
      finalValue = value.replace(/\D/g, "").slice(0, 11);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setFormData(value);

    // Validação em tempo real (opcional)
    if (!isValidEmail(value)) {
      setFormData("Digite um e-mail válido.");
    } else {
      setFormData("");
    }
  };

  const getFormattedCpf = () => formatCpf(formData.cpf);

  return {
    formData,
    handleChange,
    handleChangeEmail,
    getFormattedCpf,
    handleChangeState,
  };
}
