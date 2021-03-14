import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components

import { DiscountBar } from "./components/DiscountBar";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Breadcrumbs } from "./components/Breadcrumbs";
// import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Account } from "./components/Account";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <DiscountBar />
          <Header />
          <Switch>
            <Route path='/products' component={Products} />
            <Route path='/account' component={Account} />
            <Route path='/cart' component={Cart} />
            {/* <Route exact path='/' component={Home} /> */}
          </Switch>
          <NavBar />
          <Breadcrumbs />
          {/* <Home /> */}
          <Products />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
