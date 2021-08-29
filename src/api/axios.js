import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://levelup-github-actions-keot47rrnq-uc.a.run.app/"
});

export default api;