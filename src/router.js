import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Cep from "./components/Cep/index";
import Produtos from "./components/Produtos/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cep" component={Cep} />
      <Route path="/produtos" component={Produtos} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
