import React, { Component } from "react";
import ReactDOM from "react-dom";
import produtosApi from "../../services/apiProdutos";
import Header from "../../components/Header/index";

export default class Produtos extends Component {
  state = {
    listaProdutos: []
  };

  componentDidMount() {
    this.carregarListaProdutos();
  }

  async carregarListaProdutos() {
    let response = await produtosApi.get("/products?page=1");
    this.setState({ listaProdutos: response.data.docs });
  }

  render() {
    return (
      <div>
        <Header />
        <h2>Listagem de produtos</h2>
        <br />
        <br />
        <div id="lista-produtos">
          {this.state.listaProdutos.map((item) => (
            <div key={item._id}>Título: {item.title}</div>
          ))}
        </div>
      </div>
    );
  }
}
