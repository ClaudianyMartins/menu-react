import axios from "axios";

const produtosApi = axios.create({
  baseURL: "https://rocketseat-node.herokuapp.com/api"
});

export default produtosApi;
