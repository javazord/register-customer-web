import { useState } from "react";

export default errors = () => {
  const [formData, setFormData] = useState();
  return (
    formErrors.email && (
      <p className="text-red-500 text-sm">{formErrors.email}</p>
    )
  );
};
