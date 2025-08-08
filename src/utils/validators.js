//verificar se campo não está vazio
export const isNotEmpty = (value) => {
  return value && value.trim() !== "";
};

// Função para validar um campo e retornar mensagem de erro ou vazio
export const isValidEmail = (value) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(value).toLowerCase());
};

// Função para validar um campo e retornar mensagem de erro ou vazio em tempo real
export const validateField = (fieldName, value) => {
  switch (fieldName) {
    case "name":
    case "lastName":
    case "cpf":
      if (!isNotEmpty(value)) return "This field is required.";
      return "";
    case "email":
      if (!isNotEmpty(value)) return "Email is required.";
      if (!isValidEmail(value)) return "Enter a valid email.";
      return "";
    case "address.state":
      if (!isNotEmpty(value)) return "State is required.";
      return "";
    default:
      return "";
  }
};

//Função para validar os campos no submit
export const validateForm = (formData) => {
  const errors = {};

  if (!isNotEmpty(formData.name)) {
    errors.name = "Name is required.";
  }

  if (!isNotEmpty(formData.lastName)) {
    errors.lastName = "Last name is required.";
  }

  if (!isNotEmpty(formData.cpf)) {
    errors.cpf = "CPF is required.";
  }

  if (!isNotEmpty(formData.email)) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Enter a valid email.";
  }

  // Para campos aninhados, como address.state
  if (!isNotEmpty(formData.address?.state)) {
    errors["address.state"] = "State is required.";
  }

  return errors;
};
