import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/about/About";
import CustomerRegisterForm from "../views/customer/register/CustomerRegisterForm";
import CustomerList from "../views/customer/list/CustomerList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registercustomer" element={<CustomerRegisterForm />} />
      <Route path="/listcustomer" element={<CustomerList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
