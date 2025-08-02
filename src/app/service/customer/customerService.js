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

  delete(id) {
    return this.delete(`/${id}`);
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
