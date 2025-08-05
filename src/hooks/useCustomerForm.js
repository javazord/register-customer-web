import { useState } from "react";
import { formatCpf } from "../utils/formatters";
import { validateField, validateForm } from "../utils/validators";
import CustomerService from "../app/service/customer/customerService";

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

  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const service = new CustomerService();

  const resetFormData = () => {
    setFormData({
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
    setFormErrors({
      name: "",
      lastName: "",
      cpf: "",
      email: "",
    });
  };

  const create = () => {
    const errors = validateForm(formData); // valida os campos no submit
    setFormErrors(errors); // atualiza os erros na tela

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;
    service
      .save(formData)
      .then((response) => {
        setMsg("Customer saved successfully!");
        setError(null);
        resetFormData();
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

  const update = () => {
    const errors = validateForm(formData); // valida tudo
    setFormErrors(errors); // atualiza os erros na tela

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;
    service
      .update(formData)
      .then((response) => {
        setMsg("Customer saved successfully!");
        setError(null);
        resetFormData();
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

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

    // Validação dos inputs
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
    error,
    setError,
    msg,
    setMsg,
    isEditing,
    setIsEditing,
    resetFormData,
    create,
    update,
  };
}
