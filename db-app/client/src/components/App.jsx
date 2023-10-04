import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Homepage from "./home/Homepage";
import DatabaseDetail from "./page/DatabaseDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/database/:key" component={DatabaseDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
