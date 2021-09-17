import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

//custom hook

// import { useModalState } from "./hooks/useModalState";

//components

import { DiscountBar } from "./components/DiscountBar";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
// import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { Cart } from "./components/Cart";
import { Account } from "./components/Account";
import { AsideSocialMedia } from "./components/AsideSocialMedia";
import { NavFooter } from "./components/NavFooter";
import { Footer } from "./components/Footer";
import Main from "./components/Main/";

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Main />
        <Router>
          <DiscountBar />
          <Header />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className='switch-wrapper'
          >
            <Route exact path='/products/women' component={Products} />
            <Route exact path='/products/men' component={Products} />
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/account' component={Account} />
            <Route path='/cart'>
              <Cart />
            </Route>
            <NavBar />
          </AnimatedSwitch>

          {/* <Route exact path='/' component={Home} /> */}

          {/* <Products /> */}
        </Router>
        <AsideSocialMedia />
        <NavFooter />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
