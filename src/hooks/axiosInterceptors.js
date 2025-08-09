import axios from "axios";

export function setupAxiosInterceptors(setIsChecking) {
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Se não houve resposta ou foi erro de rede
      if (!error.response) {
        setIsChecking(true);
        return new Promise((resolve, reject) => {
          // O LoadingServiceModal fará o polling no healthUrl e,
          // quando pronto, recarrega a página ou refaz a requisição
          reject(error);
        });
      }
      return Promise.reject(error);
    }
  );
}
