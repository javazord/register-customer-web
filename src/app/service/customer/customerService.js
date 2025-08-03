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
    return this.get("");
  }

  search(userFilter) {
    let params = "";
    if (userFilter.name) {
      params += `?name=${userFilter.name}`;
    }
    if (userFilter.lastName) {
      params += `?lastName=${userFilter.lastName}`;
    }
    if (userFilter.cpf) {
      params += `?cpf=${userFilter.cpf}`;
    }
  }
}
