import ApiService from "../../apiService";

export default class CustomerService extends ApiService {
  constructor() {
    super("api/customers");
  }

  save(user) {
    return this.post("", user);
  }

  update(user) {
    return this.put(`/${user.id}`, user);
  }

  erase(id) {
    return this.delete(`/${id}`);
  }

  getAll() {
    return this.get(`/all`);
  }

  getCountCustomers() {
    return this.get(`/count-customers`);
  }

  getLastRegisters() {
    return this.get(`/last-registers`);
  }

  search(userFilter) {
    let params = "";
    if (userFilter.email) {
      params += `?email=${userFilter.email}`;
    }
    if (userFilter.cpf) {
      params += `?cpf=${userFilter.cpf}`;
    }
    return this.get(params);
  }
}
