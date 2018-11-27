import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/home";
import Result from './pages/result';
import Search from './pages/search';

import { Globalstyle } from "./style";
import Header from "./common/header/index";

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/result" exact component={Result} />
              <Route path="/search" exact component={Search} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
