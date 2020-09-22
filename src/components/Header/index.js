import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav>
          <Link exact to="/">
            HOME
          </Link>
          <Link to="/cep">CEP</Link>
          <Link to="/produtos">PRODUTOS</Link>
        </nav>
      </div>
    );
  }
}
