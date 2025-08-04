import { useState } from "react";
import { formatCpf } from "../utils/formatters";
import { validateField } from "../utils/validators";

export default function useCustomerForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    cpf: "",
    email: "",
    phone: "",
    address: {
      street: "",
      state: "",
      city: "",
      district: "",
      zipCode: "",
    },
    error: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastName: "",
    cpf: "",
    email: "",
  });

  const handleChange = (eOrName, maybeValue) => {
    let name, value;

    // Caso 1: evento do input comum
    if (typeof eOrName === "object" && eOrName.target) {
      name = eOrName.target.name;
      value = eOrName.target.value;
    }
    // Caso 2: chamada direta (ex: handleChange("address.state", { nome: "Sao Paulo" }))
    else {
      name = eOrName;
      // Ex: value = "SP" se for um objeto { nome: "Sao Paulo" }
      value = maybeValue?.nome ?? maybeValue;
    }

    if (name.includes("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Validação
    const errorMsg = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const getFormattedCpf = () => formatCpf(formData.cpf);

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleChange,
    getFormattedCpf,
  };
}
