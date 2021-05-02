import React from "react";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Banner />

        {/* <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
