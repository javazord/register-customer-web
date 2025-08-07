import CustomerTable from "./CustomerTable";
import Dialog from "../../../components/modal/Dialog";
import useCustomerForm from "../../../hooks/useCustomerForm";

export default function CustomerListForm() {
  const {
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
    msg,
    setMsg,
    error,
    setError,
  } = useCustomerForm();

  return (
    <>
      <CustomerTable
        customer={searchFields}
        onChange={handleSearchChange}
        onSearch={searchCustomer}
        currentItems={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
        onDelete={deleteCustomer}
        onEdit={editCustomer}
      />
      {(error || msg) && (
        <Dialog
          msg={msg}
          erro={error}
          onClose={() => {
            setMsg(null);
            setError(null);
          }}
        />
      )}
    </>
  );
}
