import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./views/Navbar/Navbar";
import CustomerRegister from "./views/customer/CustomerRegister";
import CustomerList from "./views/customer/CustomerList";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registercustomer" element={<CustomerRegister />} />
        <Route path="/listcustomer" element={<CustomerList />} />
      </Routes>
    </>
  );
}
