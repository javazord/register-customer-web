import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/about/About";
import CustomerRegisterForm from "../views/customer/register/CustomerRegisterForm";
import CustomerListForm from "../views/customer/list/CustomerListForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register-customer" element={<CustomerRegisterForm />} />
      <Route path="/edit-customer" element={<CustomerRegisterForm />} />
      <Route path="/list-customer" element={<CustomerListForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
