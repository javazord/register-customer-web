import ApiService from "../../apiService";

export default class HealthService extends ApiService {
  constructor() {
    super("api/health");
  }

  getHealth() {
    return this.get("");
  }
}
