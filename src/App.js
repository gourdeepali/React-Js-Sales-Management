import React from "react";
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import { Provider} from 'react-redux'

import "./styles.css";
import NavBar from "./components/header/NavBar";
import ManagerComponent from "./components/manager/ManagerComponent";
import ProductComponent from "./components/products/ProductComponent";
import ProductDetailComponent from "./components/products/ProductDetailComponent";
import store from './redux/store'

export default function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className="App">
        <NavBar />
        <br />
        <br/>

        <Switch>
          <Route path="/" exact component={ProductComponent} />
          <Route path="/salesRepresentatives" exact component={ProductComponent} />
          <Route path="/products/:id" exact component={ProductDetailComponent} />          
          <Route path="/salesRepresentatives/:id" exact component={ProductDetailComponent} />
          <Route path="/manager" exact component={ManagerComponent} />
        </Switch>
      </div>
     </Router>
     </Provider>
  );
}
