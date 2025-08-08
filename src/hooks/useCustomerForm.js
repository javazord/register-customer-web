import { useState, useEffect } from "react";
import { formatCpf } from "../utils/formatters";
import { validateField, validateForm } from "../utils/validators";
import CustomerService from "../app/service/customer/customerService";
import { useNavigate } from "react-router-dom";

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

  const [customers, setCustomers] = useState([]);
  const [searchFields, setSearchFields] = useState({ cpf: "", email: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();
  const service = new CustomerService();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await service.getAll();
      setCustomers(response.data);
    } catch (error) {
      console.error("Erro search customers:", error);
    }
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchFields((prev) => ({ ...prev, [name]: value }));
  };

  const searchCustomer = async () => {
    try {
      const response = await service.search(searchFields);
      setCustomers(response.data);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await service.erase(id);
      setMsg("Customer with id " + id + " deleted!");
      setCustomers(customers.filter((c) => c.id !== id));
      setError(null);
    } catch (erro) {
      setError(erro.response?.data?.error || "Unexpected error");
    }
  };

  const editCustomer = (customer) => {
    navigate(`/edit-customer`, { state: { customer } });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

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
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) return;

    service
      .save(formData)
      .then(() => {
        setMsg("Customer saved successfully!");
        setError(null);
        resetFormData();
      })
      .catch((erro) => {
        setError(erro.response?.data?.error || "Unexpected error");
      });
  };

  const update = () => {
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) return;

    service
      .update(formData)
      .then(() => {
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

    if (typeof eOrName === "object" && eOrName.target) {
      name = eOrName.target.name;
      value = eOrName.target.value;
    } else {
      name = eOrName;
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

    //retornos para CustomerList
    searchFields,
    handleSearchChange,
    searchCustomer,
    deleteCustomer,
    editCustomer,
    currentItems,
    currentPage,
    totalPages,
    handleNext,
    handlePrev,
  };
}
