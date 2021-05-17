import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import ViewListing from "./ViewListing";
import Listing from "./Listing";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/addlisting">
            <Listing />
          </Route>
          <Route path="/viewlisting/:listingId">
            <ViewListing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
